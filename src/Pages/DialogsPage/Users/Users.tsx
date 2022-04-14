import styled from "styled-components"
import { User } from "./User"


const Wrapper = styled.div`
display: grid;
grid-template-columns: auto;
row-gap: 16px;
margin-right: 32px;
padding: 16px;
border-right: 2px solid #ccc;
a.active{
    color: red;
}
`




export const Users = ({dialogsData}:{dialogsData:Array<any>}) => {
    return (
        <Wrapper>
            { dialogsData.map((item, index) => <User key={index} {...item}/>)}
        </Wrapper>
    )
}