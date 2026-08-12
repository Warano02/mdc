import axiosInstance from "@/lib/axios";
import { create } from "zustand";
type LoginData = { email: string; password: string };
interface IUser {
  _id: string;
  avatar: string;
  isSystem: boolean;
  name: string;
  email: string;
  phone: string;
  role: "super" | "admin" | "consultant";
  createdAt: Date;
  updatedAt: Date;
}
type LoginResponse = { message: string;user?: IUser; error: boolean };
interface AuthState {
  loading: boolean;
  login: (data: LoginData) => Promise<LoginResponse>;
  user: IUser;
  loadUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loading: false,
  loadUser: () => {
    const d = localStorage.getItem("user");
    if (!d) return;
    const user: IUser = JSON.parse(d);
    set({ user });
  },
  user: {
    _id: "",
    isSystem: false,
    name: "User Name",
    avatar: "",
    email: "user@email.me",
    phone: "",
    role: "consultant",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  login: async (payload) => {
    try {
      set({ loading: true });
      const { data } = await axiosInstance.post<{ user: IUser }>("/a/login", {
        ...payload,
      });
      console.log("Response of login ", data);

      localStorage.setItem("user", JSON.stringify(data.user));
      return { error: false, user: data.user, message: "" };
    } catch (e: any) {
      console.error("Error while login ", e);
      return {
        error: true,
        message: e?.response?.data?.message || "Error while login",
      };
    } finally {
      set({ loading: false });
    }
  },
}));
