import React,{useState} from "react";
import { connect } from "react-redux";
import styled from 'styled-components';
import { actionCreators } from "../store";

const FormContainer = styled.div`
  border: 1px solid;
  border-radius: 8px;
  padding: 5px 10px;
  background-color: #23AAF2;
`

const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Titleinput = styled.input`
    width: 400px;
    border:1px solid ;
    border-radius: 8px;
    margin-bottom: 10px;
`

const Bodyinput = styled.textarea`
    width: 400px;
    border:1px solid ;
    border-radius: 8px;
    resize: none;
`

const FormBtn = styled.button`
    margin-top: 10px;
    width: 200px;
    border-radius: 8px;
`

const PostForm = ({addData}) => {
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
      };

      const onBodyChange = (e) => {
        setBody(e.target.value);
      };

      const onSubmit = (e) => {
        e.preventDefault();
        addData({ title, body });
        setTitle("");
        setBody("");
      };

    return (
      <FormContainer>
        <div>새 글 입력</div>
          <Form onSubmit={onSubmit}>
                  <Titleinput value={title} placeholder="제목을 입력해주세요" onChange={onTitleChange}/>
                  <Bodyinput value={body} placeholder="내용을 입력하세요" onChange={onBodyChange}></Bodyinput> 
                  <FormBtn>ADD</FormBtn>
          </Form>
        </FormContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      //text를 prop으로 가지는 fucntion , 실행시 dispatch (actionCreators.createData)  호출
      addData: (text) => dispatch(actionCreators.createPost(text)),
    };
  };

export default connect(null,mapDispatchToProps)(PostForm);