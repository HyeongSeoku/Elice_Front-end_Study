import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const ToDo = ({ title, body, id, onBtnClick }) => {
  return (
    <li>
      <StyledLink to={`/detail/${id}`}>
        {title}
        {body}
      </StyledLink>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(actionCreators.post_deleteData(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
