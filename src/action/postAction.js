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

const post_updateData = (id, text) => {
  return {
    type: types.UPDATE_POST,
    id: parseInt(id),
    title: text.title,
    body: text.body,
  };
};

export { post_createData, post_deleteData, post_updateData };
