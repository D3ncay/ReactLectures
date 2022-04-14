import styled from "styled-components"
import { Message } from "./Message"

const Wrapper = styled.div`
    display: grid;
    grid-template-rows:repeat(auto-fill, minmax(30px, max-content));
    row-gap: 8px;
    padding: 16px;
`


export const Messages = ({messageData}: {messageData: Array<any>}) => {
    return (
        <Wrapper>
           {messageData.map((item, index) => <Message key={index} {...item}/>)}
        </Wrapper>
    )
}