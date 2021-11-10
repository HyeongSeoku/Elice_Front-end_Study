import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store, { actionCreators } from "../store";
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

const PostLi = styled.li`
  border: 1px solid rgba(0,0,0,0.2);
  background-color: rgba(255,255,255,0.8);
  width: 400px;
  border-radius: 8px;
  padding: 5px 10px;
  margin-top: 10px;
  &:hover{
    transform: scale(1.007);
  }
`

const PostContainer = styled.div`
  visibility: ${props=>props.visiblity?'hidden':'block'};
`

const PostContents = styled.div`
  border: 1px solid rgba(0,0,0,0.2);
  padding: 5px 10px;
  border-radius: 8px;
  color:black;
  margin-top: 5px;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
`

const PostDelete = styled.button`
  border-radius: 8px;
  visibility: ${props=>props.visiblity?'hidden':'block'};
  &:hover{
    box-shadow: inset;
  }
`

const PostUpdate = styled.button`
  border-radius: 8px;
  visibility: ${props=>props.visiblity?'hidden':'block'};
  &:hover{
    box-shadow: inset;
  }
`

const PostData = ({ title, body, id, onDeleteBtnClick,onModalOpen }) => {

    return (
      <PostLi>
        <PostContainer >
          <StyledLink to={`/detail/${id}`} >
            <PostContents>{title}</PostContents>
            <PostContents>{body}</PostContents>
          </StyledLink>
          </PostContainer>
        <PostDelete onClick={onDeleteBtnClick}>DELELE</PostDelete>
        <PostUpdate onClick={onModalOpen}>UPDATE</PostUpdate>
      </PostLi>
    );
  };
  
  //store에 접근한 컴포넌트가 store의 상태를 바꾸기 위해 dispatch를 사용할수 있게 만들어줌
  const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
      onDeleteBtnClick: () => dispatch(actionCreators.post_deleteData(ownProps.id)),
      onModalOpen :() => {
        dispatch(actionCreators.modal_open(true,ownProps.id))
      }
    };
  };


//(mapStateToProps,mapDispatchToProps) 
//순서라서 앞에 null없이 mapDispatchToProps만 사용시 오류뜸 단, 반대의 경우는 문제없음
export default connect(null,mapDispatchToProps)(PostData);
