import styled from "styled-components";
import { COLOR } from "../../variables";

const LoginFormWrapper = styled.div`
  max-width: 370px;
  width: 100%;

  .btn-text {
    color: ${COLOR.blue};
    display: block;
    background-color: transparent;
    cursor: pointer;
    margin: 0 0 0 auto;
    border: 0;
    border-radius: none;
    font-size: 0.675rem;
  }
`;

export default LoginFormWrapper;
