import { ExamClass } from "@/types";
import { api } from "@/apis";

export const useExamClassStore = defineStore("exam-class", () => {
  const examClasses = ref<ExamClass[]>([]);

  const getExamClasses = async () => {
    const res = await api.get("/class/list").catch((err) => {
      console.log(err);
      return null;
    });
    examClasses.value = res?.data || [];
  };

  return {
    examClasses,
    getExamClasses,
  };
});
