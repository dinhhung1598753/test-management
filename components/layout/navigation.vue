<script lang="ts" setup>
import { MenuItem, AUTH_USER } from '@/types'

const authUser = ref('student') // TODO: check auth user to show navigation
const menuByAdmin: MenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'mdi-home-city',
    path: '/',
  },
  {
    title: 'Quản lí học sinh',
    icon: 'mdi-account-group-outline',
    path: '/admin/students',
  },
  {
    title: 'Quản lí giáo viên',
    icon: 'mdi-account-group-outline',
    path: '/admin/teachers',
  },
  {
    title: 'Quản lí bài thi',
    icon: 'mdi-book-open-page-variant',
    path: '/admin/test-management',
  },
  {
    title: 'Quản lí tài khoản',
    icon: 'mdi-account-circle',
    path: '/admin/profile',
  },
]

const menuByStudent: MenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'mdi-home-city',
    path: '/student/home',
  },
  {
    title: 'Thư viện đề thi',
    icon: 'mdi-book-open',
    path: '/student/tests',
  },
  {
    title: 'Thi online',
    icon: 'mdi-lead-pencil',
    path: '/student/online-exam',
  },
  {
    title: 'Quản lí tài khoản',
    icon: 'mdi-account-circle',
    path: '/student/profile',
  },
]

const menuByTeacher: MenuItem[] = [
  {
    title: 'Trang chủ',
    icon: 'mdi-home-city',
    path: '/',
  },
  {
    title: 'Quản lí học sinh',
    icon: 'mdi-account-group-outline',
    path: '/teacher/students',
  },
  {
    title: 'Quản lí bài thi',
    icon: 'mdi-book-open-page-variant',
    path: '/teacher/test-management',
  },
  {
    title: 'Chấm bài thi offline',
    icon: 'mdi-lead-pencil',
    path: '/teacher/mark-the-exam',
  },
  {
    title: 'Quản lí tài khoản',
    icon: 'mdi-account-circle',
    path: '/teacher/profile',
  },
]

const menus = computed(() => {
  if (authUser.value === AUTH_USER.admin) { return menuByAdmin } else if (authUser.value === AUTH_USER.student) { return menuByStudent }
  return menuByTeacher
})

const router = useRouter()
const route = useRoute()

const activeMenu = computed(() => {
  return route.path
})

const handleRedirect = (path: string) => {
  if (activeMenu.value !== path) {
    router.push(path)
  }
}
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent location="left">
        <template #prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
          />
        </template>

        <v-divider />

        <v-list v-for="item in menus" :key="item.title" density="compact" nav>
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            value="home"
            @click.stop="handleRedirect(item.path)"
          />
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
