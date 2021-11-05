import * as types from "../action/ActionTypes";

const modal_open = (value) => {
  return {
    type: types.OPEN_MODAL,
    isOpen: value,
  };
};

const modal_close = (value) => {
  return {
    type: types.CLOSE_MODAL,
    isOpen: value,
  };
};

export { modal_open, modal_close };
