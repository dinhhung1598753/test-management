import { api } from "@/apis";
import { Subject } from "@/types";

export const subjects = ref<Subject[]>([]);
export const getSubjects = async () => {
  const res = await api.get("/subject/list").catch((err) => {
    console.log(err);
    return null;
  });
  return res;
};

export const create = async (
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
  return res;
};

export const updateById = async (
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

export const deleteById = async (id: number) => {
  // TODO
  const res = await api.delete(`subject/disable/${id}`).catch(() => null);
  console.log(res);
  if (res !== null) {
    const deletedItemIndex = subjects.value.findIndex((item) => item.id === id);
    if (deletedItemIndex > -1) {
      subjects.value.splice(deletedItemIndex, 1);
    }
  }
};
