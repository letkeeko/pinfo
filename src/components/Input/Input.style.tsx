import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.div`
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
  }

  .label {
    font-size: 0.675rem;
    margin: 0 0 5px 0;
    display: block;
  }
`;

export default Wrapper;
