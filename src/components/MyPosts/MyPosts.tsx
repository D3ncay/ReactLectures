import { FC, useRef } from "react";
import styled from "styled-components";
import { IPost, Post } from './../Post/Post';
import { Textarea } from './../common/Textarea/Textarea';
import { PrimaryButton } from "../common/Buttons/PrimaryButton";
import React from "react";

const MyPostsContainer = styled.div`
    margin-top: 16px;
    display: grid;

`;

const Title = styled.div`
       font-size: 20px;
    line-height: 115%;
    font-weight: bold;
    color: #232197;
`

const Posts = styled.div`
display: grid;
grid-template-columns: 50%;
`;

interface IMyPosts {
    postsInfo: IPost[],
    addPost: any,
    updateNewPostText: any,
    newPostText?: string
}


export const MyPosts: FC<IMyPosts> = ({ postsInfo, addPost, newPostText,updateNewPostText }) => {

    let posts = postsInfo.map((text, index) => <Post key={index} {...text} />)
    const textarea = useRef<HTMLTextAreaElement>(null);

    const addNewPost = () => {
        if (textarea.current){
            addPost();
        }
    }

    let onPostChange = () => {
        if (textarea.current &&  textarea.current.value !== ''){
            updateNewPostText(textarea.current.value)
        }
    }
    
    return (
        <MyPostsContainer>
            <Title>Мои посты</Title>
            <Textarea> Опубликовать пост
                <textarea onChange={onPostChange} ref={textarea} name="textarea" id="" placeholder="Ваши мысли..." value={newPostText}  />
                <PrimaryButton onclick={addNewPost} text="Опубликовать" />
            </Textarea>
            <Posts className="posts">
                {posts}
            </Posts>
        </MyPostsContainer>
    )
}