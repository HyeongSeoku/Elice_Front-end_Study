import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  post_reducer,
  createPost,
  deletePost,
  updatePost,
} from "./reducer/post";
import { modal_reducer, modalOpen, modalClose } from "./reducer/modal";

//분리된 리듀서 연결
const reducer = combineReducers({
  postData: post_reducer,
  modal: modal_reducer,
});

//composeWithDevTools() : 크롬에서 Redux extension 사용하기 위한 세팅
const store = createStore(reducer, composeWithDevTools());

//actionCreators에서 action을 통합 관리
export const actionCreators = {
  createPost,
  deletePost,
  updatePost,
  modalOpen,
  modalClose,
};

store.subscribe(() => console.log("상태변경:", store.getState()));

export default store;

//보통 store에서 초기 state와  state와 관련된 동작등을 작성
