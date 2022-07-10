import styled from "styled-components";
import { COLOR } from "../variables";

const DeletePromptWrapper = styled.div`
  background-color: ${COLOR.white};
  border: 1px solid ${COLOR.getBlue(0.25)};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  right: 0;
  width: 156px;
  bottom: -1px;
  right: -1px;
  border-radius: 6px;
  max-height: 52px;

  .prompt-btn {
    color: ${COLOR.blue};
    background-color: transparent;
    cursor: pointer;
    border: 0;
    line-height: 30px;
    font-size: 0.775rem;
    padding: 0;

    &--danger {
      color: ${COLOR.red};
    }
  }
`;

export default DeletePromptWrapper;
