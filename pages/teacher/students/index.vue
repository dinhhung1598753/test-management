<script lang="ts" setup>
import { Student } from "@/types";
import { useStudentStore } from "@/stores/student";
const studentStore = useStudentStore();

const fullName = ref("");
const code = ref("");
const birthday = ref("");
const gender = ref("");
const joinDate = ref("");
const phoneNumber = ref("");
const email = ref("");
const titleSnack = ref("");
const isShowSnack = ref(false);
const isShowCreateStudentForm = ref(false);
const isDisabledCreateButton = ref(false);

const showCreateStudentForm = () => {
  isShowCreateStudentForm.value = true;
  isDisabledCreateButton.value = true;
};

const closeForm = () => {
  fullName.value = "";
  code.value = "";
  birthday.value = "";
  gender.value = "";
  joinDate.value = "";
  phoneNumber.value = "";
  email.value = "";
  isShowCreateStudentForm.value = false;
  isDisabledCreateButton.value = false;
};

// get
const res = await studentStore.getStudents();
const students = computed(() => studentStore.students);

// create
const createStudent = async () => {
  const res = await studentStore.create(
    fullName.value,
    code.value,
    birthday.value,
    gender.value,
    joinDate.value,
    phoneNumber.value,
    email.value
  );
  await studentStore.getStudents();
  isShowSnack.value = true;
  titleSnack.value = "Thêm thành công";
  closeForm();
};

//edit
const editStudent = async (
  id: number,
  fullname: string,
  code: string,
  birthday: string,
  gender: string,
  joinDate: string,
  phoneNumber: string,
  email: string
) => {
  const res = await studentStore.updateById(
    id,
    fullname,
    code,
    birthday,
    gender,
    joinDate,
    phoneNumber,
    email
  );

  isShowSnack.value = true;
  titleSnack.value = "Sửa thành công";
};

// delete

const deleteStudent = async (id: number) => {
  const res = await studentStore.deleteById(id);
  isShowSnack.value = true;
  titleSnack.value = "Xoá thành công";
};

// const students = ref<UserInfo[]>();

// const res = await getStudents();
// console.log(123, res);
// students.value = res?.data || [];

// const students: UserInfo[] = [
//   {
//     id: 1,
//     fullName: "Nguyễn Thị Hồng Hạnh",
//     birthday: "22/10/2000",
//     gender: "Nữ",
//     joinDate: "02/05/2023",
//     phoneNumber: "0975256563",
//     email: "nguyenhonghanh@gmail.com",
//   },
//   {
//     id: 2,
//     fullName: "Nguyễn Thị Hồng Hạnh",
//     birthday: "22/10/2000",
//     gender: "Nữ",
//     joinDate: "02/05/2023",
//     phoneNumber: "0975256563",
//     email: "nguyenhonghanh@gmail.com",
//   },
//   {
//     id: 3,
//     fullName: "Nguyễn Thị Hồng Hạnh",
//     birthday: "22/10/2000",
//     gender: "Nữ",
//     joinDate: "02/05/2023",
//     phoneNumber: "0975256563",
//     email: "nguyenhonghanh@gmail.com",
//   },
//   {
//     id: 4,
//     fullName: "Nguyễn Thị Hồng Hạnh",
//     birthday: "22/10/2000",
//     gender: "Nữ",
//     joinDate: "02/05/2023",
//     phoneNumber: "0975256563",
//     email: "nguyenhonghanh@gmail.com",
//   },
//   {
//     id: 5,
//     fullName: "Nguyễn Thị Hồng Hạnh",
//     birthday: "22/10/2000",
//     gender: "Nữ",
//     joinDate: "02/05/2023",
//     phoneNumber: "0975256563",
//     email: "nguyenhonghanh@gmail.com",
//   },
// ];
</script>

<template>
  <h2 class="title">Thông tin sinh viên</h2>
  <div class="student-info">
    <div class="create-student">
      <v-btn @click="showCreateStudentForm" :disabled="isDisabledCreateButton"
        >Thêm Sinh Viên</v-btn
      >
      <div class="form" v-if="isShowCreateStudentForm">
        <v-text-field
          v-model="fullName"
          label="Nhập họ và tên"
          required
        ></v-text-field>
        <v-text-field v-model="code" label="Nhập MSSV" required></v-text-field>
        <v-text-field
          v-model="birthday"
          label="Nhập ngày sinh"
          required
        ></v-text-field>
        <v-text-field
          v-model="gender"
          label="Nhập giới tính"
          required
        ></v-text-field>
        <v-text-field
          v-model="joinDate"
          label="Nhập ngày tham gia"
          required
        ></v-text-field>
        <v-text-field
          v-model="phoneNumber"
          label="Nhập số điện thoại"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          label="Nhập email"
          required
        ></v-text-field>
        <v-btn @click="createStudent">Thêm</v-btn>
        <v-btn @click="closeForm">Đóng</v-btn>
      </div>
    </div>

    <v-file-input
      clearable
      label="Import danh sách sinh viên"
      variant="underlined"
    ></v-file-input>
    <search />
  </div>

  <div class="list-students" fixed-header height="500px">
    <v-table>
      <thead>
        <tr class="row-head">
          <th class="cell text-center">ID</th>
          <th class="cell text-left">Họ và tên</th>
          <th class="cell text-left">MSSV</th>
          <th class="cell text-left">Năm sinh</th>
          <th class="cell text-left">Giới tính</th>
          <th class="cell text-left">Ngày đăng kí</th>
          <th class="cell text-left">Điện thoại</th>
          <th class="cell text-left">Email</th>
          <th class="cell text-left"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td class="text-center">{{ student.id }}</td>
          <td class="text-center" width="300px">
            <v-text-field v-model="student.fullName"></v-text-field>
          </td>
          <td class="text-center" width="200px">
            <v-text-field v-model="student.code"></v-text-field>
          </td>
          <td class="text-center" width="130px">
            <v-text-field v-model="student.birthday"></v-text-field>
          </td>
          <td class="text-center" width="100px">
            <v-text-field v-model="student.gender"></v-text-field>
          </td>
          <td class="text-center" width="150px">
            <v-text-field v-model="student.joinDate"></v-text-field>
          </td>
          <td class="text-center" width="150px">
            <v-text-field v-model="student.phoneNumber"></v-text-field>
          </td>
          <td class="text-center" width="150px">
            <v-text-field v-model="student.email"></v-text-field>
          </td>
          <td class="action text-center">
            <v-icon
              size="small"
              class="me-2"
              @click="
                editStudent(
                  student.id,
                  student.fullName,
                  student.code,
                  student.birthday,
                  student.gender,
                  student.joinDate,
                  student.phoneNumber,
                  student.email
                )
              "
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
  <template>
    <div class="text-center ma-2">
      <v-snackbar v-model="isShowSnack" :timeout="1200" :color="'#2196F3'">
        {{ titleSnack }}
      </v-snackbar>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.title {
  padding-bottom: 16px;
  border-bottom: 1px solid $color-gray;
  margin-bottom: 12px;
}
.student-info {
  > .action {
    width: 900px;
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
  }
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
