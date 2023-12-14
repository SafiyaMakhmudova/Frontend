import { useAuthStore } from "../store/auth";
// import { storeToRefs } from "pinia";

export function useAuth() {
  //   const store = useAuthStore();
  const { login, logout } = useAuthStore();

  return {
    login,
    logout,
  };
}
