import styled from "styled-components";
import { COLOR } from "../variables";

const HelpTextWrapper = styled.div`
  display: flex;
  align-items: center;

  .help-btn {
    padding: 0;
    border: 0;
    background-color: transparent;
    color: ${COLOR.blue};
    margin: 0 0 -3px 10px;
    cursor: pointer;
  }
`;

export default HelpTextWrapper;
