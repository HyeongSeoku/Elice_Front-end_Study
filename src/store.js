import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import post_reducer from "./reducer/post";
import modal_reducer from "./reducer/modal";
import * as postAction from "./action/postAction";
import * as modalAction from "./action/modalAction";

//post Action
const createPost = postAction.createPost;
const deletePost = postAction.deletePost;
const updatePost = postAction.updatePost;

//modal Action
const modalOpen = modalAction.modalOpen;
const modalClose = modalAction.modalClose;

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
