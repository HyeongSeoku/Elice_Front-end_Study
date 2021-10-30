import { createStore } from "redux";

const CREATE = "CREATE";
const DELETE = "DELETE";

const createData = (text) => {
  return {
    type: CREATE,
    text,
  };
};

const deleteData = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case CREATE:
      return [{ text: action.text, id: Date.now() }, ...state];
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
