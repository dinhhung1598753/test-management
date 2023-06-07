import { Question } from "@/types";
import { api } from "@/apis";

export const useQuestionStore = defineStore("question", () => {
  const questions = ref<Question[]>([]);
  const isCreating = ref(false);

  const getQuestions = async (code: string) => {
    const res = await api.get(`/question/list?code=${code}`).catch((err) => {
      console.log(err);
      return null;
    });
    questions.value = res?.data || [];
  };

  return {
    questions,
    isCreating,
    getQuestions,
  };
});
