import styled from "styled-components"

const HeaderContainer = styled.div`
width: 100%;
padding: 10px 15px;
margin: 10px 0;
background-color: #fff;
grid-column: 1/3;
`;

export const Header = () => {
    return (
        <HeaderContainer>
            HEADER
        </HeaderContainer>
    )
}