import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import post_reducer from "./reducer/post";
import modal_reducer from "./reducer/modal";
import * as postAction from "./action/postAction";
import * as modalAction from "./action/modalAction";

//post Action
const post_createData = postAction.post_createData;
const post_deleteData = postAction.post_deleteData;
const post_updateData = postAction.post_updateData;

//modal Action
const modal_open = modalAction.modal_open;
const modal_close = modalAction.modal_close;

//분리된 리듀서 연결
const reducer = combineReducers({
  postData: post_reducer,
  modal: modal_reducer,
});

//composeWithDevTools() : 크롬에서 Redux extension 사용하기 위한 세팅
const store = createStore(reducer, composeWithDevTools());

//actionCreators에서 action을 통합 관리
export const actionCreators = {
  post_createData,
  post_deleteData,
  post_updateData,
  modal_open,
  modal_close,
};

export default store;

//보통 store에서 초기 state와  state와 관련된 동작등을 작성
