import produce, { Draft } from "immer";

// actions
const CHANGE_FIELD = "auth/CHANGE_FIELD" as const;
const INITIALIZE_FORM = "auth/INITIALIZE_FORM" as const;

type AuthAction =
  | ReturnType<typeof changeField>
  | ReturnType<typeof initializeForm>;

// action creators
export const changeField = (payload: {
  form: keyof AuthState;
  key: string;
  value: string;
}) => ({
  type: CHANGE_FIELD,
  payload
});
export const initializeForm = (payload: keyof AuthState) => ({
  type: INITIALIZE_FORM,
  payload
});

// reducer
type Register = {
  username: string;
  password: string;
  passwordConfirm: string;
};

type Login = {
  username: string;
  password: string;
};

type AuthState = {
  register: Register;
  login: Login;
};

const initialState: AuthState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    username: "",
    password: ""
  }
};

const auth = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return produce(state, (draft: Draft<AuthState>) => {
        const { form, key, value } = action.payload;
        draft[form][key] = value;
      });
    case INITIALIZE_FORM:
      return produce(state, (draft: Draft<AuthState>) => {
        const form = action.payload;
        draft = {
          ...state,
          [form]: initialState[form]
        };
      });
    default:
      break;
  }
};

export default auth;
