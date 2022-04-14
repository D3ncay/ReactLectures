
import { FC } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
`
const Avatar = styled.div`
       max-width: 200px;
    img{
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
`

const Name = styled.div`
    font-size: 22px;
    line-height: 110%;
    font-weight: normal;
`

interface IProfileInfo {
    name: string,
    avatarImg: string
}

export const ProfileInfo: FC<IProfileInfo> = ({ name, avatarImg }) => {
    return (
        <Wrapper>
            <Avatar>
                <img src={avatarImg} alt="avatar" />
            </Avatar>
            <Name>
                Баженов Денис
            </Name>
        </Wrapper>
    )
}