
import styled from 'styled-components';
import { Users } from './Users/Users';
import { Messages } from './Messages/Messages';
import { FC } from 'react';
import { addPost } from './../../redux/state';

const DialogsContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 4fr;
    width: 100%;
    background-color: #fff;
    padding: 15px;
`

interface IDialogsPage{
    state: {[key:string]: Array<any>},
}


export const DialogsPage:FC<IDialogsPage> = ({state}) => {
    console.log(state);
    return (
        <DialogsContainer>
            <Users dialogsData={state.dialogs}/>
            <Messages messageData={state.messages}/>
        </DialogsContainer>
    )
}