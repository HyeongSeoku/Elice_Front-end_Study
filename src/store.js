import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import post_reducer from "./reducer/post";
import * as postAction from "./action/postAction";

const post_createData = postAction.post_createData;
const post_deleteData = postAction.post_deleteData;

//분리된 리듀서 연결
const reducer = combineReducers({ postData: post_reducer });

//composeWithDevTools() : 크롬에서 Redux extension 사용하기 위한 세팅
const store = createStore(reducer, composeWithDevTools());

export const actionCreators = {
  post_createData,
  post_deleteData,
};

export default store;

//보통 store에서 초기 state와  state와 관련된 동작등을 작성
