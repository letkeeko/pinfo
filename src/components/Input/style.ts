import styled from "styled-components";
import { COLOR } from "../variables";

export const InputWrapper = styled.div`
  .input {
    border: 1px ${COLOR.black} solid;
    color: ${COLOR.black};
    background-color: transparent;
    border-radius: 8px;
    padding: 6px 13px;
    border-radius: none;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    display: block;

    &::placeholder {
      color: ${COLOR.getBlack(0.475)};
    }

    &--textarea {
      resize: none;
      height: 144px;
    }
  }

  .label {
    font-size: 0.675rem;
    margin: 0 0 7px 0;
    display: block;
  }
`;

export const WarningWrapper = styled.div`
  background-color: ${COLOR.purple};
  color: ${COLOR.white};
  margin: 3px 0 0 0;
  max-width: max-content;
  border-radius: 5px;

  p {
    font-weight: 300;
    font-size: 0.725rem;

    display: table;
    padding: 9px 10px;
  }
`;
