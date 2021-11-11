import { createAction, createReducer } from "@reduxjs/toolkit";

//action
const modalOpen = createAction("OPEN_MODAL");
const modalClose = createAction("CLOSE_MODAL");

const initialState = { isOpen: false, id: null };

const modal_reducer = createReducer(initialState, {
  [modalOpen]: (state, { payload }) => ({
    ...state,
    isOpen: payload.isOpen,
    id: payload.id,
  }),
  [modalClose]: (state, { payload }) => ({
    ...state,
    isOpen: payload.isOpen,
    id: null,
  }),
});

// const modal_reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case modalOpen.type:
//       console.log(action);
//       return { isOpen: action.payload.isOpen, id: action.payload.id };
//     case modalClose.type:
//       return { isOpen: action.payload, id: null };
//     default:
//       return state;
//   }
// };

export { modalOpen, modalClose, modal_reducer };
