import React from "react";
import { connect } from "react-redux";

const Detail = ({ toDo }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created At: {toDo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  //Route에서 component 속성을 설정해주지 않으면 오류남
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
