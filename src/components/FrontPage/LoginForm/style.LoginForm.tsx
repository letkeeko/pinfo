import styled from "styled-components";
import { COLOR } from "../../variables";

const Wrapper = styled.div`
  max-width: 370px;
  width: 100%;

  input {
    margin: 0 0 25px 0;
  }

  button {
    margin: 35px auto 0 auto;
    max-width: max-content;
    display: block;
  }

  .btn-text {
    color: ${COLOR.blue};
    background-color: transparent;
    cursor: pointer;
    margin: -10px 0 0 auto;
    border: 0;
    border-radius: none;
    font-size: 0.675rem;
  }
`;

export default Wrapper;
