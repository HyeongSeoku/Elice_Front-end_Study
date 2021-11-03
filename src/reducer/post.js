import * as types from "../action/ActionTypes";

const initialState = [
  {
    id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
    title: "첫번째 글",
    body: "첫번째 글 본문",
    img_url: "",
  },
  {
    id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
    title: "두번째 글",
    body: "두번째 글 본문",
    img_url: "",
  },
];

const post_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_POST:
      return [
        ...state,
        {
          id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
          title: action.title,
          body: action.body,
          img_url: "",
        },
      ];
    case types.DELETE_POST:
      return state.filter((data) => data.id !== action.id);
    default:
      return state;
  }
};

export default post_reducer;
