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
const authUser = ref("admin");
</script>
<template>
  <h2 class="title">Ngân hàng câu hỏi</h2>
  <test-management-list :questions="questions" :auth-user="authUser" />
</template>

<style scoped lang="scss">
.title {
  padding-bottom: 16px;
  border-bottom: 1px solid $color-gray;
  margin-bottom: 12px;
}
</style>
