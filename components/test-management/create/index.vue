<script lang="ts" setup>
import { Question } from "@/types";
const questions: Question[] = [
  {
    id: 1,
    order: 1,
    subjectName: "Giải tích",
    question: "Why does the man want to buy Ms. Jefferson some flowers?",
    chapter: "Chương 1",
    level: "Dễ",
    answers: [
      {
        id: 1,
        label: "A. She was promoted.",
        isCorrect: true,
      },
      {
        id: 2,
        label: "B. She won an award.",
        isCorrect: false,
      },
      {
        id: 3,
        label: "C. She is moving.",
        isCorrect: false,
      },
      {
        id: 4,
        label: "D. She is retiring.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    order: 2,
    subjectName: "Đại số",
    chapter: "Chương 2",
    question: "Why does the man want to buy Ms. Jefferson some flowers?",
    level: "Trung bình",
    answers: [
      {
        id: 1,
        label: "A. She was promoted.",
        isCorrect: true,
      },
      {
        id: 2,
        label: "B. She won an award.",
        isCorrect: false,
      },
      {
        id: 3,
        label: "C. She is moving.",
        isCorrect: false,
      },
      {
        id: 4,
        label: "D. She is retiring.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    order: 2,
    subjectName: "Đại số",
    chapter: "Chương 3",
    question: "Why does the man want to buy Ms. Jefferson some flowers?",
    level: "Khó",
    answers: [
      {
        id: 1,
        label: "A. She was promoted.",
        isCorrect: true,
      },
      {
        id: 2,
        label: "B. She won an award.",
        isCorrect: false,
      },
      {
        id: 3,
        label: "C. She is moving.",
        isCorrect: false,
      },
      {
        id: 4,
        label: "D. She is retiring.",
        isCorrect: false,
      },
    ],
  },
];

const isCreateQuestion = ref(false);
const isDeleteQuestion = ref(false);

const createQuestion = () => {
  isCreateQuestion.value = true;
};
const authUser = ref("teacher");
const deleteQuestion = () => {
  isDeleteQuestion.value = true;
};
</script>

<template>
  <div class="test-management">
    <div class="action">
      <v-btn @click="createQuestion"
        ><v-icon icon="mdi-plus" />Thêm mới câu hỏi</v-btn
      >
      <v-file-input
        clearable
        label="Import bộ câu hỏi"
        variant="underlined"
      ></v-file-input>
    </div>

    <test-management-list
      :questions="questions"
      :auth-user="authUser"
      @create="createQuestion"
      @delete="deleteQuestion"
    />

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
    <div class="dialog-delete-question">
      <v-row justify="center">
        <v-dialog v-model="isDeleteQuestion" persistent width="500">
          <v-card>
            <v-card-text>
              <h3>Bạn có chắc chắn muốn xoá câu hỏi không?</h3>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="isDeleteQuestion = false"
              >
                Huỷ
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="isDeleteQuestion = false"
              >
                Xoá
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test-management {
  > .action {
    width: 600px;
    display: flex;
    align-items: center;
    gap: 60px;
    overflow: hidden;
  }
}

.list-questions {
  margin-top: 16px;
  cursor: pointer;
}

.wrap {
  display: flex;
  align-items: center;
}
</style>
