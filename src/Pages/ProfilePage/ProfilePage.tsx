import { FC } from "react";
import styled from "styled-components"
import { MyPosts } from "../../components/MyPosts/MyPosts";
import { ProfileInfo } from './ProfileInfo';


const ProfileContainer = styled.div`

`;

interface IProfilePage{
    profilePage:any,
    dispatch: any
}


export const ProfilePage:FC<IProfilePage> = ({profilePage,dispatch}) => {
    return (
        <ProfileContainer>
            <ProfileInfo name='Денис Баженов' avatarImg="./images/avatar.jpg" />
            <MyPosts dispatch={dispatch}  postsInfo={profilePage.posts} newPostText={profilePage.newPostText} />
        </ProfileContainer>
    )
}