import { NavLink } from "react-router-dom";
import styled from "styled-components"


const SidebarContainer = styled.div`
margin: 10px 0;
max-height: 100vh;
padding: 0 15px;
ul{
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 15px;
}
li{
    background-color: transparent;
    padding: 5px 10px;
    border-radius: 10px;
    &:hover{
        background-color: #ccc;
    }
}
a{
    display: block;
    text-transform: uppercase;
    font-size: 20px;
    line-height: 120%;
    font-weight: 500;
    color: #000;
    &.active{
        color: red;
    }
}
`;

export const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/feeds">News</NavLink></li>
            </ul>
        </SidebarContainer>
    )
}