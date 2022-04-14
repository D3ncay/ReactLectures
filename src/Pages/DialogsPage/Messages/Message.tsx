import styled from "styled-components"


const Wrapper = styled.div`
    padding: 8px;

`



export const Message = ({ message }: { message: string }) => {
    return (
        <Wrapper>
            {message}
        </Wrapper>
    )
}