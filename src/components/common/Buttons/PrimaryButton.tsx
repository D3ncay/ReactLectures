import { FC } from "react"
import styled from "styled-components"

export const PrimaryWrapper = styled.button`
    padding: 5px 10px;
    background-color: #1b4acc;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: #fff;
    border-radius: 5px;
`
interface IPrimaryButton {
    text: string,
    onclick: () => void
}

export const PrimaryButton: FC<IPrimaryButton> = ({ text, onclick }) => {
    return (
        <PrimaryWrapper onClick={onclick}>{text}</PrimaryWrapper>
    )
}