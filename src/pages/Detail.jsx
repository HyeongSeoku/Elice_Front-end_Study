import React from "react";
import { connect } from "react-redux";

const Detail = ({ data }) => {
  return (
    <>
      <h1>{data?.title}</h1>
      <h2>{data?.body}</h2>
      <h5>Created At: {data?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  //Route에서 component 속성을 설정해주지 않으면 오류남
  //params 사용 하여 id 받아옴
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { data: state.postData.find((data) => data.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
