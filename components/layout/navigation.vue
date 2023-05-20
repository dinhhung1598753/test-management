<script lang="ts" setup>
interface MenuItem {
  title: string;
  icon: string;
  path?: string;
}
const menus: MenuItem[] = [
  {
    title: "Trang chủ",
    icon: "mdi-home-city",
    path: "/",
  },
  {
    title: "Quản lí học sinh",
    icon: "mdi-account-group-outline",
    path: "/admin/students",
  },
  {
    title: "Quản lí giáo viên",
    icon: "mdi-account-group-outline",
    path: "/admin/teachers",
  },
  {
    title: "Quản lí bài thi",
    icon: "mdi-book-open-page-variant",
    path: "/admin/test-management",
  },
  { title: "Quản lí tài khoản", icon: "mdi-account-circle", path: "/" },
];
const router = useRouter();
const route = useRoute();

const activeMenu = computed(() => {
  return route.path;
});

const handleRedirect = (path: string) => {
  if (activeMenu.value !== path) {
    router.push(path);
  }
};
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent location="left">
        <template v-slot:prepend>
          <v-list-item
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Admin"
            subtitle="Logged in"
          ></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav v-for="item in menus" :key="item.title">
          <v-list-item
            @click.stop="handleRedirect(item.path)"
            :prepend-icon="item.icon"
            :title="item.title"
            value="home"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
