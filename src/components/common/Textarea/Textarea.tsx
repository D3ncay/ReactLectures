import styled from "styled-components";
import { PrimaryWrapper } from "../Buttons/PrimaryButton";

export const Textarea = styled.label`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  margin-top: 16px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  textarea {
    border-radius: 5px;
    outline: none;
    grid-column: 1/2;
    margin-top: 10px;
    height: 50px;
    resize: none;
    padding: 5px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    border: 2px solid #000;
    &:focus {
      border-color: #1b4acc;
    }
  }
  ${PrimaryWrapper} {
    grid-column: 1/2;
  }
`;
