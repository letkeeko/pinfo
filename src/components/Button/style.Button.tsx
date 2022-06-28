import styled from "styled-components";
import { COLOR, SCREEN } from "../variables";

const Wrapper = styled.button`
  border: 1px ${COLOR.blue} solid;
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border-radius: 7px;
  line-height: 30px;
  padding: 3px 22px 3px 40px;
  position: relative;
  @media ${SCREEN.cursor} {
    &:hover {
      background-color: ${COLOR.yellow};
    }
  }

  .label {
    color: ${COLOR.blue};
    font-size: 0.95rem;
  }

  .icon {
    position: absolute;
    font-size: 0.9rem;

    &--circle {
      color: ${COLOR.yellow};
      left: 13px;
      top: 14px;
    }

    &--triangle {
      color: ${COLOR.blue};
      transform: rotate(90deg);
      left: 17px;
      top: 11px;
    }
  }
`;

export default Wrapper;
