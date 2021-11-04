import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostForm from "../components/PostForm";
import PostData from "../components/PostData";

const FeedContainer = styled.div`
    padding : 20px;
`

const FeedHeaderTitle = styled.h1`
    color: white;
`

const FeedContents = styled.div`
    display: flex;
    flex-direction: column;
`

const PostList = styled.ul`
    list-style: none;
    padding: 0;
`

const PostMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Feed = ({data}) => {

    return (
        <FeedContainer>    
            <FeedHeaderTitle>Feed</FeedHeaderTitle>  
            <PostMain>
                <PostForm/>
                <FeedContents>
                    <PostList>
                        {data.map((post)=>(
                            <PostData key={post.id} {...post}/>
                        ))}
                    </PostList>
                </FeedContents>
            </PostMain>
        </FeedContainer>
    )
}

//connect함수에 첫번째 인수로 들어가는 함수 or 객체
//기본적으로 store가 업데이트가 될때마다 자동적으로 호출이 됨
const mapStateToProps = (state) =>{
    return {data:state.postData};
}

//connect 함수는 Provider 컴포넌트 하위에 존재하는 컴포넌트들이 Store에 접근하게 만드는 역할
export default connect(mapStateToProps)(Feed);