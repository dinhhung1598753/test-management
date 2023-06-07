import { Subject } from "@/types";
import { api } from "@/apis";

export const useSubjectStore = defineStore("subject", () => {
  const subjects = ref<Subject[]>([]);
  const isCreating = ref(false);

  const getSubjects = async () => {
    const res = await api.get("/subject/list").catch((err) => {
      console.log(err);
      return null;
    });
    subjects.value = res?.data || [];
  };

  const create = async (
    title: string,
    code: string,
    description: string,
    credit: number
  ) => {
    const res = await api
      .post("/subject/add", {
        title,
        code,
        description,
        credit,
      })
      .catch((err) => {});
  };

  const updateById = async (
    id: number,
    title: string,
    code: string,
    description: string,
    credit: number
  ) => {
    const res = await api
      .put(`/subject/update/${id}`, {
        title,
        code,
        description,
        credit,
      })
      .catch((err) => {});
    return res;
  };

  const deleteById = async (id: number) => {
    const res = await api.delete(`subject/disable/${id}`).catch(() => null);
    if (res !== null) {
      const deletedItemIndex = subjects.value.findIndex(
        (item) => item.id === id
      );
      if (deletedItemIndex > -1) {
        subjects.value.splice(deletedItemIndex, 1);
      }
    }
  };

  return {
    subjects,
    isCreating,
    getSubjects,
    create,
    updateById,
    deleteById,
  };
});
