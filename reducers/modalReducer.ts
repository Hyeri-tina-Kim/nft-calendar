import { createAction, createReducer, ActionType } from "typesafe-actions";

// 상태의 타입 선언
interface ModalReducer {
  isOpen: boolean;
  item: any;
}

// 상태 초기화
const initialState: ModalReducer = {
  isOpen: false,
  item: {},
};

// 액션타입 선언
export const OPEN_MODAL = "modalReducer/OPEN_MODAL";
export const CLOSE_MODAL = "modalReducer/CLOSE_MODAL";

// 액션함수 선언
export const openModal = createAction(OPEN_MODAL)<ModalReducer>();
export const closeModal = createAction(CLOSE_MODAL)();

// 액션 객체타입 선언
export const actions = { openModal, closeModal };
type ModalReducerActions = ActionType<typeof actions>;

// 리듀서 추가
const modalReducer = createReducer<ModalReducer, ModalReducerActions>(
  initialState,
  {
    [OPEN_MODAL]: (state, action) => ({
      isOpen: true,
      item: action.payload.item,
    }),
    [CLOSE_MODAL]: () => ({
      isOpen: false,
      item: {},
    }),
  }
);

export default modalReducer;
