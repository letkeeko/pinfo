import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  right: 0;
  background-color: ${COLOR.white};
  /* box-shadow: 0 5px 12px -2px rgba(60, 60, 60, 0.1);
  box-shadow: 5px 5px 5px 5px rgba(60, 60, 60, 0.075); */
  border: 1px solid rgba(15, 99, 147, 0.25);

  width: 156px;
  bottom: 0;
  border-radius: 6px;
  max-height: 50px;

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

export default Wrapper;
