import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.div`
  position: relative;

  .color-picker-wrap {
    position: absolute;
    left: 60px;
    z-index: 11;
    top: 0;
  }

  .swatch-input {
    display: flex;

    &__preview-box {
      border: 1px solid ${COLOR.getBlack(0.125)};
      width: 48px;
      height: 48px;
      margin: 0 14px 0 0;
      cursor: pointer;
      border-radius: 6px;
    }

    input {
      color: ${COLOR.black};
      border-radius: 6px;
      border: 1px solid ${COLOR.getBlack(0.25)};
      padding: 0 10px;
    }
  }

  .blank-overlay {
    position: fixed;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
`;

export default Wrapper;
