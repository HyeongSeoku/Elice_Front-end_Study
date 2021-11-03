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

const PostContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
`

const PostData = ({ title, body, id, onBtnClick }) => {
    return (
      <li>
        <StyledLink to={`/detail/${id}`}>
            <PostContainer>
          {title}
          {body}
          </PostContainer>
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

//(mapStateToProps,mapDispatchToProps) 
//순서라서 앞에 null없이 mapDispatchToProps만 사용시 오류뜸 단, 반대의 경우는 문제없음
export default connect(null,mapDispatchToProps)(PostData);
