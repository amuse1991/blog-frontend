import { changeField, initializeForm } from "./auth";

export type AuthAction =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initializeForm>;

export type FormData = {
  [key: string]: string | undefined;
  username: string;
  password: string;
  passwordConfirm?: string;
};

export type AuthState = {
  [key: string]: FormData;
  register: FormData;
  login: FormData;
};
