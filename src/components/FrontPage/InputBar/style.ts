import styled from "styled-components";
import { COLOR } from "../../variables";

const InputBarWrapper = styled.div`
  border: 1px ${COLOR.blue} solid;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 7px 7px 7px 21px;

  .url {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 30px;
    display: block;
  }

  .form {
    .input {
      color: ${COLOR.blue};
      border: 0;
      outline: none;
      border-radius: none;
      font-size: 1.1rem;
      line-height: 30px;
      width: 140px;

      &::placeholder {
        color: ${COLOR.blue};
        font-weight: 300;
      }
    }
  }
`;

export default InputBarWrapper;
