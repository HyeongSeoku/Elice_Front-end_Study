import { createAction } from "@reduxjs/toolkit";

const modalOpen = createAction("OPEN_MODAL");
const modalClose = createAction("CLOSE_MODAL");

export { modalOpen, modalClose };
