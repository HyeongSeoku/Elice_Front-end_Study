import * as types from "../action/ActionTypes";
import { modal_open } from "../action/modalAction";

const initialState = { isOpen: false };

const modal_reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { isOpen: action.isOpen };
    case types.CLOSE_MODAL:
      return { isOpen: action.isOpen };
    default:
      return state;
  }
};

console.log(modal_reducer(initialState, modal_open(true)));

export default modal_reducer;
