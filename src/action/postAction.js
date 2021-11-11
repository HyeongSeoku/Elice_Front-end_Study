import { createAction } from "@reduxjs/toolkit";

const createPost = createAction("CREATE_POST");
const deletePost = createAction("DELETE_POST");
const updatePost = createAction("UPDATE_POST");

export { createPost, deletePost, updatePost };
