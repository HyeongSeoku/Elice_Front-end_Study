import * as types from "../action/ActionTypes";

const post_createData = (text) => {
  return {
    type: types.CREATE_POST,
    title: text.title,
    body: text.body,
  };
};

const post_deleteData = (id) => {
  return {
    type: types.DELETE_POST,
    id: parseInt(id),
  };
};

export { post_createData, post_deleteData };
