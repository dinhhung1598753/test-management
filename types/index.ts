export interface UserInfo {
  id: number;
  fullName: string;
  birthday: string;
  gender: string;
  joinDate?: string;
  phoneNumber: string;
  email: string;
}

export interface MenuItem {
  title: string;
  icon: string;
  path?: string;
}

export interface Question {
  id: number;
  order: number;
  subjectName: string;
  question: string;
  imageQuestion?: string;
  chapter: string;
  level: string;
  answers: {
    id: number;
    label: string;
    isCorrect?: boolean;
  }[];
}

export interface ExamResult {
  id: number;
  examCompletionDate: string;
  examName: string;
  result: string;
  examTime: string;
}
// constants

export const AUTH_USER = {
  admin: "admin",
  student: "student",
  teacher: "teacher",
};
