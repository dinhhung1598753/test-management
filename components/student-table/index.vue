<script lang="ts" setup>
import { Student } from "@/types";
import { useStudentStore } from "@/stores/student";

const isEditStudent = ref(false);
const studentStore = useStudentStore();

const studentById = ref({});
//get students
const res = await studentStore.getStudents();
const students = computed(() => studentStore.students);

const openDialogEditStudent = (student: object) => {
  studentById.value = student;
  isEditStudent.value = true;
};

const closeDialog = () => {
  isEditStudent.value = false;
};

const editStudent = (value: any) => {
  console.log("kkkk", value.id, value.fullName);
  // TODO CALL API
};

const deleteStudent = (id: number) => {
  // TODO CALL API
  console.log("delete", id);
};
</script>

<template>
  <h2 class="title">DANH SÁCH SINH VIÊN</h2>
  <student-table-create />
  <div class="list-students">
    <v-table fixed-header height="500px">
      <thead>
        <tr>
          <th class="text-left">Họ và tên</th>
          <th class="text-left">MSSV</th>
          <th class="text-left">Năm sinh</th>
          <th class="text-left">Giới tính</th>
          <th class="text-left">Ngày đăng kí</th>
          <th class="text-left">Điện thoại</th>
          <th class="text-left">Email</th>
          <th class="text-left">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.fullName }}</td>
          <td>{{ student.code }}</td>
          <td>{{ student.birthday }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.joinDate }}</td>
          <td>{{ student.phoneNumber }}</td>
          <td>{{ student.email }}</td>
          <td class="action">
            <v-icon
              size="small"
              class="me-2"
              @click="openDialogEditStudent(student)"
            >
              mdi-pencil
            </v-icon>
            <v-icon size="small" @click="deleteStudent(student.id)">
              mdi-delete
            </v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>

  <student-table-edit
    :isEditStudent="isEditStudent"
    :studentById="studentById"
    @close="closeDialog"
    @edit="editStudent"
  />
</template>

<style scoped lang="scss">
.title {
  padding-bottom: 16px;
  border-bottom: 1px solid $color-gray;
  margin-bottom: 12px;
}
.list-students {
  margin-top: 16px;
  cursor: pointer;
}

.wrap {
  display: flex;
  align-items: center;
}
</style>
