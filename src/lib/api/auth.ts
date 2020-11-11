import client from "./client";

type Login = {
  username: string;
  password: string;
};

export const login = ({ username, password }: Login) =>
  client.post("/api/auth/login", { username, password });

export const register = ({ username, password }: Login) =>
  client.post("/api/auth/register", { username, password });

// 로그인 상태 확인
export const check = () => client.get("/api/auth/check");
