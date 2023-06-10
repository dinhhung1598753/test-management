import { Student } from "@/types";
import { api } from "@/apis";

export const useStudentStore = defineStore("student", () => {
  const students = ref<Student[]>([]);

  const getStudents = async () => {
    const res = await api.get("/student/list").catch((err) => {
      console.log(err);
      return null;
    });
    students.value = res?.data || [];
  };

  const create = async (
    fullname: string,
    code: string,
    birthday: string,
    gender: string,
    joinDate: string,
    phoneNumber: string,
    email: string
  ) => {
    const res = await api
      .post("/student/add", {
        fullname,
        code,
        birthday,
        gender,
        joinDate,
        phoneNumber,
        email,
      })
      .catch((err) => {});
  };

  const updateById = async (
    id: number,
    fullname: string,
    code: string,
    birthday: string,
    gender: string,
    joinDate: string,
    phoneNumber: string,
    email: string
  ) => {
    const res = await api
      .put(`/student/update/${id}`, {
        fullname,
        code,
        birthday,
        gender,
        joinDate,
        phoneNumber,
        email,
      })
      .catch((err) => {});
    return res;
  };

  const deleteById = async (id: number) => {
    const res = await api.delete(`student/disable/${id}`).catch(() => null);
    if (res !== null) {
      const deletedItemIndex = students.value.findIndex(
        (item) => item.id === id
      );
      if (deletedItemIndex > -1) {
        students.value.splice(deletedItemIndex, 1);
      }
    }
  };
  return {
    students,
    getStudents,
    create,
    updateById,
    deleteById,
  };
});
