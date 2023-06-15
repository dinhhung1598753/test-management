import { Student } from "@/types";
import { api } from "@/apis";

export const useStudentStore = defineStore("student", () => {
  const students = ref<Student[]>([]);
  const isCreating = ref(false);

  const getStudents = async () => {
    const res = await api.get("/student/list").catch((err) => {
      console.log(err);
      return null;
    });
    students.value = res?.data || [];
  };

  const createStudent = async (
    fullName: string,
    code: string,
    username: string,
    password: string,
    birthday: string,
    gender: string,
    phoneNumber: string,
    course: number,
    email: string
  ) => {
    const res = await api
      .post("/student/add", {
        fullName,
        code,
        username,
        password,
        birthday,
        gender,
        phoneNumber,
        course,
        email,
      })
      .catch((err) => {});
  };

  const updateById = async (
    id: number,
    fullName: string,
    code: string,
    birthday: string,
    gender: string,
    phoneNumber: string,
    course: number,
    email: string
  ) => {
    const res = await api
      .put(`/student/update/${id}`, {
        fullName,
        code,
        birthday,
        gender,
        phoneNumber,
        course,
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
    isCreating,
    getStudents,
    createStudent,
    updateById,
    deleteById,
  };
});