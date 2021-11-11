import { createAction } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";

//action
const createPost = createAction("CREATE_POST");
const deletePost = createAction("DELETE_POST");
const updatePost = createAction("UPDATE_POST");

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
});

// const post_reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case createPost.type:
//       return [
//         ...state,
//         {
//           id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
//           title: action.payload.title,
//           body: action.payload.body,
//           img_url: "",
//         },
//       ];
//     case deletePost.type:
//       return state.filter((data) => data.id !== action.payload);
//     //수정 액션 (! complete)
//     case updatePost.type:
//       return [
//         ...state,
//         { id: action.id, title: action.title, body: action.body },
//       ];
//     default:
//       return state;
//   }
// };

export { post_reducer, createPost, deletePost, updatePost };
