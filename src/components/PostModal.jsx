import React from 'react';
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

const Viewer = styled.div`
    background: white;
    position: fixed;
    height: auto;
    z-index: 15;

    padding: 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

const PostModal = ({visibile, title ,body, onChange,onUpdate,onClose})=>{
    //visible이 아닐 경우 아무것도 로드하지 않음
    if(!visibile) return null;

    return (
        <div>
            <Dimmed onClick={onClose}/>
            <Viewer>
                <input value={title}onChange={onChange}/>
                <input value ={body} onChange={onChange} />
                <button onClick={onUpdate}>확인</button>
            </Viewer>
        </div>
    );
}

const mapDispatchToProps = (dispatch,ownProps) =>{

    return {
        onClose: () => dispatch(actionCreators.modal_close(false))
    }
}

export default connect(null,mapDispatchToProps) (PostModal)