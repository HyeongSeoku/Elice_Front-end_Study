import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'; 
import { actionCreators } from '../store';

// 화면을 불투명하게 해줍니다.
const Dimmed = styled.div`
    background: white;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    position: fixed;
    z-index: 10;
    opacity: 0.5;
`;

const ModalContainer=`
    
`

const Viewer = styled.div`
    background: white;
    position: fixed;
    height: 300px;
    z-index: 15;
    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;



const PostModal = ({visibile, data,onUpdate,onClose,onTitleChange,onBodyChange})=>{

    //visible이 아닐 경우 아무것도 로드하지 않음
    if(!visibile) return null;

    return (
        <div>
            <Dimmed onClick={onClose}/>
            <Viewer>
                <h2>{data.id}</h2>
                {/*onChange 함수 작성해야함 (두개)*/}
                <input value={data.title} onChange={(e)=>{onTitleChange(e.target.value)}}/>
                <input value={data.body} onChange={(e)=>{onBodyChange(e.target.value)}} />
                <button onClick={onUpdate}>확인</button>
            </Viewer>
        </div>
    );
}

const mapStateToProps  = (state,ownProps) =>{
    console.log(ownProps);
    return {data: state.postData.find((item) => item.id === parseInt(state.modal.id)) }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        onClose: () => dispatch(actionCreators.modalClose(false)),
        onTitleChange:(value) => dispatch(actionCreators.changeTitle({id:ownProps.id,title:value})),
        onBodyChange:(value)=>dispatch(actionCreators.changeBody({id:ownProps.id,body:value})),
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (PostModal)