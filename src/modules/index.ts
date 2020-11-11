import { combineReducers } from "redux";
import auth from "./auth/auth";
import loading from "./loading/loading";

const rootReducer = combineReducers({ auth, loading });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
