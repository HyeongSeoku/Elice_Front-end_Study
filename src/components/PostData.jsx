import React,{useState} from "react";
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
  &:hover{
    box-shadow: inset;
  }
`

const PostUpdate = styled.button`
  border-radius: 8px;
  &:hover{
    box-shadow: inset;
  }
`

const UpdateSubmitBtn = styled.button`
  border-radius: 8px;
  &:hover{
    box-shadow: inset;
  }
  visibility: ${props=>props.visiblity?'block':'hidden'};
`



const PostData = ({ title, body, id, onDeleteBtnClick }) => {
  const [toggle,setToggle] = useState(false);

  const onToggleBtnClick =()=>{
    setToggle(true);
  }

  const toggleClose = () =>{
    setToggle(false)
  }

    return (
      <PostLi>
        <StyledLink to={`/detail/${id}`}>
          <PostContainer>
            <PostContents>{title}</PostContents>
            <PostContents>{body}</PostContents>
          </PostContainer>
        </StyledLink>
        <PostDelete onClick={onDeleteBtnClick}>DELELE</PostDelete>
        <PostUpdate onClick={onToggleBtnClick}>UPDATE</PostUpdate>
        <UpdateSubmitBtn visiblity={toggle} onClick={onToggleBtnClick}>확인</UpdateSubmitBtn>
      </PostLi>
    );
  };
  
  //store에 접근한 컴포넌트가 store의 상태를 바꾸기 위해 dispatch를 사용할수 있게 만들어줌
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      onDeleteBtnClick: () => dispatch(actionCreators.post_deleteData(ownProps.id)),
      onUpdateBtnClick: () => dispatch()
    };
  };

//(mapStateToProps,mapDispatchToProps) 
//순서라서 앞에 null없이 mapDispatchToProps만 사용시 오류뜸 단, 반대의 경우는 문제없음
export default connect(null,mapDispatchToProps)(PostData);
