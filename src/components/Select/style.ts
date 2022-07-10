import styled from "styled-components";
import { COLOR } from "../variables";

const SelectWrapper = styled.div`
  position: relative;
  .select {
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
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .label {
    font-size: 0.675rem;
    margin: 0 0 5px 0;
    display: block;
  }

  .icon {
    position: absolute;
    right: 14px;
    bottom: 8px;
    font-size: 1.65rem;
    pointer-events: none;
  }
`;

export default SelectWrapper;
