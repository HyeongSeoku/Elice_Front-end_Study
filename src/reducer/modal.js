import { modalOpen, modalClose } from "../action/modalAction";

const initialState = { isOpen: false, id: null };

const modal_reducer = (state = initialState, action) => {
  switch (action.type) {
    case modalOpen.type:
      console.log(action);
      return { isOpen: action.payload.isOpen, id: action.payload.id };
    case modalClose.type:
      return { isOpen: action.payload, id: null };
    default:
      return state;
  }
};

export default modal_reducer;
