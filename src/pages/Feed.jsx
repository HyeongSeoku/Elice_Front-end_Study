import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostForm from "../components/PostForm";
import PostData from "../components/PostData";

const FeedContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const PostList = styled.ul`
      list-style: none;
`

const Feed = ({data}) => {

    return (
        <>
            <h2>Feed</h2>
            <div>wow</div>
            <PostForm/>
            <FeedContainer>
                <PostList>
                    {data.map((post)=>(
                        <PostData key={post.id} {...post}/>
                    ))}
                </PostList>
            </FeedContainer>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {data:state.postData};
}

export default connect(mapStateToProps)(Feed);