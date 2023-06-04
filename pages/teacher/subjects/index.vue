<script lang="ts" setup>
const subjects = [
  { id: 1, name: "Toán", createAt: "22-02-2023" },
  { id: 2, name: "Văn", createAt: "22-02-2023" },
  { id: 3, name: "Anh", createAt: "22-02-2023" },
  { id: 4, name: "Sử", createAt: "22-02-2023" },
  { id: 5, name: "Sinh", createAt: "22-02-2023" },
];
const title = ref("");
const order = ref("");
const subjectName = ref("");
const isShowSnack = ref(false);
const isShowCreateSubjectForm = ref(false);
const isDisabledCreateButton = ref(false);

const showCreateSubjectForm = () => {
  isShowCreateSubjectForm.value = true;
  isDisabledCreateButton.value = true;
};

const closeForm = () => {
  isShowCreateSubjectForm.value = false;
  isDisabledCreateButton.value = false;
};
const createSubject = (order: any, subjectName: string) => {
  // TODO CALL API
  isShowSnack.value = true;
  title.value = "Thêm thành công";
  closeForm();
};

const editSubject = (subjectId: number, subjectName: string) => {
  isShowSnack.value = true;

  // TODO: CALL API
  title.value = "Sửa thành công";
};

const deleteSubject = (subjectId: number, subjectName: string) => {
  isShowSnack.value = true;

  // TODO: CALL API
  title.value = "Xoá thành công";
};
</script>
<template>
  <h2 class="title">Quản lý môn học</h2>

  <div class="create-subject">
    <v-btn @click="showCreateSubjectForm" :disabled="isDisabledCreateButton"
      >Thêm môn học</v-btn
    >

    <div class="form" v-if="isShowCreateSubjectForm">
      <v-text-field v-model="order" label="Nhập STT" required></v-text-field>
      <v-text-field
        v-model="subjectName"
        label="Nhập tên môn"
        required
      ></v-text-field>
      <v-btn @click="createSubject(order, subjectName)">Thêm</v-btn>
      <v-btn @click="closeForm">Đóng</v-btn>
    </div>
  </div>

  <div class="search"></div>
  <v-table class="subject-table">
    <thead>
      <tr class="row-head">
        <th class="cell text-center">STT</th>
        <th class="cell text-center">Tên môn học</th>
        <th class="cell text-center">Ngày tạo</th>
        <th class="cell text-center">Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="subject in subjects" :key="subject.id">
        <td class="text-center">{{ subject.id }}</td>
        <td class="text-center">
          <v-text-field v-model="subject.name"></v-text-field>
        </td>
        <td class="text-center">{{ subject.createAt }}</td>
        <td class="action text-center">
          <v-icon
            size="small"
            class="me-2"
            @click="editSubject(subject.id, subject.name)"
          >
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteSubject(subject.id, subject.name)">
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>

  <template>
    <div class="text-center ma-2">
      <v-snackbar v-model="isShowSnack" :timeout="1200" :color="'#2196F3'">
        {{ title }}
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

.subject-table {
  cursor: pointer;
}

.form {
  display: flex;
  margin: 32px 0;
  gap: 16px;
}
</style>
