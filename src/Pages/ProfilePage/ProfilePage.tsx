import { FC } from "react";
import styled from "styled-components"
import { MyPosts } from "../../components/MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo';


const ProfileContainer = styled.div`

`;

interface IProfilePage{
    profilePage:any,
    addPost: () => void,
    updateNewPostText: () => void
}


export const ProfilePage:FC<IProfilePage> = ({profilePage, updateNewPostText , addPost}) => {
    return (
        <ProfileContainer>
            <ProfileInfo name='Денис Баженов' avatarImg="./images/avatar.jpg" />
            <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} postsInfo={profilePage.posts} newPostText={profilePage.newPostText} />
        </ProfileContainer>
    )
}