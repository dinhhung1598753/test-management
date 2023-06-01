<template>
  <div class="dialog-update-question">
    <v-row justify="center">
      <v-dialog v-model="isCreateQuestion" persistent width="1024">
        <v-card>
          <v-card-title>
            <span class="text-h5">Thêm mới câu hỏi</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    label="Môn học"
                    :items="['Môn 1', 'Môn 2', 'Môn 3', 'Môn 4']"
                    class="select"
                    :variant="'outlined'"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    label="Bộ đề"
                    :items="['Chương 1', 'Chương 2', 'Chương 3', 'Chương 4']"
                    class="select"
                    :variant="'outlined'"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-select
                    label="Độ khó"
                    :items="['Dễ', 'Trung Bình', 'Khó']"
                    class="select"
                    :variant="'outlined'"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    required
                    :placeholder="'Nhập câu hỏi'"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">Đáp án </v-col>
                <v-col cols="12">
                  <div class="wrap">
                    <v-text-field
                      required
                      :placeholder="'Nhập đáp án'"
                    ></v-text-field>
                    <v-checkbox label="Đáp án đúng"></v-checkbox>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="wrap">
                    <v-text-field
                      required
                      :placeholder="'Nhập đáp án'"
                    ></v-text-field>
                    <v-checkbox label="Đáp án đúng"></v-checkbox>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="wrap">
                    <v-text-field
                      required
                      :placeholder="'Nhập đáp án'"
                    ></v-text-field>
                    <v-checkbox label="Đáp án đúng"></v-checkbox>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="wrap">
                    <v-text-field
                      required
                      :placeholder="'Nhập đáp án'"
                    ></v-text-field>
                    <v-checkbox label="Đáp án đúng"></v-checkbox>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="isCreateQuestion = false"
            >
              Huỷ
            </v-btn>
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="isCreateQuestion = false"
            >
              Lưu
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
