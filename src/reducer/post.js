import { createAction, createReducer } from "@reduxjs/toolkit";

//action
const createPost = createAction("CREATE_POST");
const deletePost = createAction("DELETE_POST");
const updatePost = createAction("UPDATE_POST");
const changeTitle = createAction("TITLE_CHANGE");
const changeBody = createAction("BODY_CHANGE");

const initialState = [
  {
    id: parseInt(Date.now()),
    title: "첫번째 글",
    body: "첫번째 글 본문",
    img_url: "",
  },
  {
    id: parseInt(Date.now()) + 1,
    title: "두번째 글",
    body: "두번째 글 본문",
    img_url: "",
  },
];

//immer
//createReducer = 할 수 있는 두가지 옵션 (return || mutate)

const post_reducer = createReducer(initialState, {
  [createPost]: (state, action) => {
    state.push({
      id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
      title: action.payload.title,
      body: action.payload.body,
      img_url: "",
    });
  },
  [deletePost]: (state, action) =>
    state.filter((data) => data.id !== action.payload),
  // [updatePost]:(state,action) =>
  [changeTitle]: (state, { payload }) =>
    state.map((data) =>
      data.id === payload.id ? { ...data, title: payload.title } : data
    ),
  [changeBody]: (state, { payload }) =>
    state.map((data) =>
      data.id === payload.id ? { ...data, body: payload.body } : data
    ),
});

export {
  post_reducer,
  createPost,
  deletePost,
  changeTitle,
  changeBody,
  updatePost,
};
