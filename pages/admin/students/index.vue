<script lang="ts" setup>
import { UserInfo } from '@/types'

const students: UserInfo[] = [
  {
    id: 1,
    fullName: 'Nguyễn Thị Hồng Hạnh',
    birthday: '22/10/2000',
    gender: 'Nữ',
    joinDate: '02/05/2023',
    phoneNumber: '0975256563',
    email: 'nguyenhonghanh@gmail.com',
  },
  {
    id: 2,
    fullName: 'Nguyễn Thị Hồng Hạnh',
    birthday: '22/10/2000',
    gender: 'Nữ',
    joinDate: '02/05/2023',
    phoneNumber: '0975256563',
    email: 'nguyenhonghanh@gmail.com',
  },
  {
    id: 3,
    fullName: 'Nguyễn Thị Hồng Hạnh',
    birthday: '22/10/2000',
    gender: 'Nữ',
    joinDate: '02/05/2023',
    phoneNumber: '0975256563',
    email: 'nguyenhonghanh@gmail.com',
  },
  {
    id: 4,
    fullName: 'Nguyễn Thị Hồng Hạnh',
    birthday: '22/10/2000',
    gender: 'Nữ',
    joinDate: '02/05/2023',
    phoneNumber: '0975256563',
    email: 'nguyenhonghanh@gmail.com',
  },
  {
    id: 5,
    fullName: 'Nguyễn Thị Hồng Hạnh',
    birthday: '22/10/2000',
    gender: 'Nữ',
    joinDate: '02/05/2023',
    phoneNumber: '0975256563',
    email: 'nguyenhonghanh@gmail.com',
  },
]
</script>
<template>
  <h2 class="student-info">
    Thông tin sinh viên
  </h2>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Họ và tên
        </th>
        <th class="text-left">
          Năm sinh
        </th>
        <th class="text-left">
          Giới tính
        </th>
        <th class="text-left">
          Ngày đăng kí
        </th>
        <th class="text-left">
          Điện thoại
        </th>
        <th class="text-left">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.fullName }}</td>
        <td>{{ student.birthday }}</td>
        <td>{{ student.gender }}</td>
        <td>{{ student.joinDate }}</td>
        <td>{{ student.phoneNumber }}</td>
        <td>{{ student.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
