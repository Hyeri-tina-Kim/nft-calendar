import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({
  modalReducer,
  alertReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
