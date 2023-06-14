<script lang="ts" setup>
import { Student } from "@/types";
import { useStudentStore } from "@/stores/student";

const studentStore = useStudentStore();

const fullName = ref("");
const code = ref("");
const username = ref("");
const password = ref("");
const birthday = ref("");
const gender = ref("");
const phoneNumber = ref("");
const course = ref(0);
const email = ref("");
const isCreateStudent = ref(false);

// TODO
const submit = async () => {
  const res = await studentStore.createStudent(
    fullName.value,
    code.value,
    username.value,
    password.value,
    birthday.value,
    gender.value,
    phoneNumber.value,
    course.value,
    email.value
  );
  // await studentStore.getStudents();
  isCreateStudent.value = false;
};
const createStudent = () => {
  isCreateStudent.value = true;
};
</script>

<template>
  <div class="student-management">
    <div class="action">
      <v-btn @click="createStudent"
        ><v-icon icon="mdi-plus" />Thêm mới sinh viên</v-btn
      >
      <v-file-input
        clearable
        label="Import danh sách sinh viên"
        variant="underlined"
      ></v-file-input>
    </div>
    <div class="dialog-create-student">
      <v-row justify="center">
        <v-dialog v-model="isCreateStudent" persistent width="1024">
          <v-card>
            <v-card-title>
              <span class="text-h5">Thêm mới sinh viên</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="fullName"
                      label="Nhập họ và tên"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="code"
                      label="Nhập MSSV"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="username"
                      label="Nhập tên đăng nhập"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="password"
                      label="Nhập mật khẩu"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="birthday"
                      label="Nhập ngày sinh"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="gender"
                      label="Nhập giới tính"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="phoneNumber"
                      label="Nhập số điện thoại"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="course"
                      label="Nhập khoá"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      label="Nhập email"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="isCreateStudent = false"
              >
                Huỷ
              </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="submit">
                Lưu
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>
<style scoped lang="scss">
.student-management {
  > .action {
    width: 700px;
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
  }
}
</style>
