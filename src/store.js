import { createStore } from "redux";

const CREATE = "CREATE";
const DELETE = "DELETE";

const initialState = [
  {
    id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
    title: "첫번째 글",
    body: "첫번째 글 본문",
  },
  {
    id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
    title: "두번째 글",
    body: "두번째 글 본문",
  },
];
const createData = (text) => {
  return {
    type: CREATE,
    title: text.title,
    body: text.body,
  };
};

const deleteData = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = initialState, action) => {
  console.log("🚀 ~ file: store.js ~ line 25 ~ reducer ~ state", state);

  switch (action.type) {
    case CREATE:
      return [
        {
          id: parseInt(Date.now()) + Math.floor(Math.random() * 10),
          title: action.title,
          body: action.body,
        },
        ...state,
      ];
    case DELETE:
      return state.filter((data) => data.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  createData,
  deleteData,
};

export default store;

//보통 store에서 초기 state와  state와 관련된 동작등을 작성
