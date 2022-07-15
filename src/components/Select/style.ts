import styled from "styled-components";
import { COLOR } from "../variables";

const SelectWrapper = styled.div`
  .select {
    border: 1px ${COLOR.black} solid;
    color: ${COLOR.black};
    background-color: transparent;
    border-radius: 8px;
    border-radius: none;
    font-size: 16px;
    line-height: 30px;
    width: 100%;
    display: block;
    background-image: url("/icon-arrow.svg");
    background-size: 15px;
    background-position: calc(100% - 14px) center;
    background-repeat: no-repeat;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding: 6px 13px;

    :invalid {
      color: ${COLOR.getBlack(0.475)};
    }
  }

  .label {
    font-size: 0.675rem;
    margin: 0 0 7px 0;
    display: block;
  }
`;

export default SelectWrapper;
