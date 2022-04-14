import { createAction, createReducer, ActionType } from "typesafe-actions";

// 상태의 타입 선언
interface AlertReducer {
  isOpen: boolean;
  message: string;
}

// 상태 초기화
const initialState: AlertReducer = {
  isOpen: false,
  message: "",
};

// 액션타입 선언
export const OPEN_MODAL = "alertReducer/OPEN_MODAL";
export const CLOSE_MODAL = "alertReducer/CLOSE_MODAL";

// 액션함수 선언
export const openModal = createAction(OPEN_MODAL)<AlertReducer>();
export const closeModal = createAction(CLOSE_MODAL)();

// 액션 객체타입 선언
export const actions = { openModal, closeModal };
type ModalReducerActions = ActionType<typeof actions>;

// 리듀서 추가
const alertReducer = createReducer<AlertReducer, ModalReducerActions>(
  initialState,
  {
    [OPEN_MODAL]: (state, action) => ({
      isOpen: true,
      message: action.payload.message,
    }),
    [CLOSE_MODAL]: () => ({
      isOpen: false,
      message: "",
    }),
  }
);

export default alertReducer;
