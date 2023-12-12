import api from "@/plugins/axios";

function login(data) {
  return api.post("auth/login", data);
}

export { login };
