<script lang="ts" setup>
interface Teachers {
  id: Number;
  fullName: string;
  birthday: string;
  gender: string;
  phoneNumber: string;
  email: string;
}

const teachers: Teachers[] = [
  {
    id: 1,
    fullName: "Nguyễn Hồng Phúc",
    birthday: "22/10/2000",
    gender: "Nữ",
    phoneNumber: "0975256563",
    email: "nguyenhonghanh@gmail.com",
  },
  {
    id: 2,
    fullName: "Nguyễn Hồng Phúc",
    birthday: "22/10/2000",
    gender: "Nữ",
    phoneNumber: "0975256563",
    email: "nguyenhonghanh@gmail.com",
  },
  {
    id: 3,
    fullName: "Nguyễn Hồng Phúc",
    birthday: "22/10/2000",
    gender: "Nữ",
    phoneNumber: "0975256563",
    email: "nguyenhonghanh@gmail.com",
  },
  {
    id: 4,
    fullName: "Nguyễn Hồng Phúc",
    birthday: "22/10/2000",
    gender: "Nữ",
    phoneNumber: "0975256563",
    email: "nguyenhonghanh@gmail.com",
  },
  {
    id: 5,
    fullName: "Nguyễn Hồng Phúc",
    birthday: "22/10/2000",
    gender: "Nữ",
    phoneNumber: "0975256563",
    email: "nguyenhonghanh@gmail.com",
  },
];
</script>
<template>
  <h2 class="teacher-info">Thông tin giáo viên</h2>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Họ và tên</th>
        <th class="text-left">Năm sinh</th>
        <th class="text-left">Giới tính</th>
        <th class="text-left">Điện thoại</th>
        <th class="text-left">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="teacher in teachers" :key="teacher.id">
        <td>{{ teacher.fullName }}</td>
        <td>{{ teacher.birthday }}</td>
        <td>{{ teacher.gender }}</td>
        <td>{{ teacher.phoneNumber }}</td>
        <td>{{ teacher.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
