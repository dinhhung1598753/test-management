export interface UserInfo {
  id: Number;
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

// constants

export const AUTH_USER = {
  admin: "admin",
  student: "student",
  teacher: "teacher",
};
