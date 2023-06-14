<script lang="ts" setup>
const name = ref("");
const props = defineProps({
  isEditStudent: {
    type: Boolean,
    default: false,
  },
  studentById: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits<{
  (e: "edit", data: any): void;
  (e: "close"): void;
}>();

const closeDialog = () => {
  emit("close");
};

const editStudent = (id: number) => {
  // TODO CALL API
  console.log("name.value", name.value);
  emit("edit", {
    id,
  });
};
</script>
<template>
  <div class="dialog-edit-student">
    <v-row justify="center">
      <v-dialog :model-value="isEditStudent" persistent width="1024">
        <v-card>
          <v-card-title>
            <span class="text-h5">Sửa thông tin sinh viên</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.fullName"
                    :placeholder="'Nhập họ và tên'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.code"
                    :placeholder="'Nhập MSSV'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.birthday"
                    :placeholder="'Nhập ngày sinh'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.gender"
                    :placeholder="'Nhập giới tính'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.joinDate"
                    :placeholder="'Nhập ngày tham gia'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.phoneNumber"
                    :placeholder="'Nhập số điện thoại'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :model-value="studentById.email"
                    :placeholder="'Nhập email'"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDialog">
              Huỷ
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="editStudent(studentById.id)"
            >
              Lưu
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<style lang="scss" scoped></style>
