import { createPost, deletePost, updatePost } from "../action/postAction";

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

const post_reducer = (state = initialState, action) => {
  switch (action.type) {
    case createPost.type:
      return [
        ...state,
        {
          id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
          title: action.payload.title,
          body: action.payload.body,
          img_url: "",
        },
      ];
    case deletePost.type:
      return state.filter((data) => data.id !== action.payload);
    //수정 액션 (! complete)
    case updatePost.type:
      return [
        ...state,
        { id: action.id, title: action.title, body: action.body },
      ];
    default:
      return state;
  }
};

export default post_reducer;
