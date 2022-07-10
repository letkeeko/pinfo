import styled from "styled-components";
import { COLOR } from "../variables";

const InputWrapper = styled.div`
  .input {
    border: 1px ${COLOR.blue} solid;
    background-color: transparent;
    border-radius: 8px;
    padding: 6px 13px;
    color: ${COLOR.blue};
    border-radius: none;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    display: block;

    &::placeholder {
      color: ${COLOR.getBlack(0.35)};
    }

    &--textarea {
      resize: none;
      height: 144px;
    }
  }

  .label {
    font-size: 0.675rem;
    margin: 0 0 5px 0;
    display: block;
  }
`;

export default InputWrapper;
