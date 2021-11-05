import * as types from "../action/ActionTypes";

const initialState = { isOpen: false };

const modal_reducer = (state = initialState, action) => {
  switch (action.types) {
    case types.OPEN_MODAL:
      return { isOpen: action.isOpen };
    case types.CLOSE_MODAL:
      return { isOpen: action.isOpen };
    default:
      return state;
  }
};

export default modal_reducer;
