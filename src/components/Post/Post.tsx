import { FC } from "react";
import styled from "styled-components";

const PostContainer = styled.div`
margin: 10px 0;
padding: 15px 10px;
border-radius: 5px;
background-color: #dce1e6;
font-size: 14px;
line-height: 16px;
font-weight: normal;
`;

export interface IPost {
    text: string,
    likesCount: number,
}

export const Post: FC<IPost> = ({ text, likesCount }) => {
    return (
        <PostContainer>
            <div>  {text}</div>
            <div>
                likes {likesCount}
            </div>
        </PostContainer>
    )
}