import styled from "styled-components";
import { COLOR, SCREEN } from "../variables";
import { ButtonProps } from "./Button";

const Wrapper = styled.button<ButtonProps>`
  background-color: ${({ variant }) =>
    variant === "solid" ? COLOR.blue : "transparent"};
  display: ${({ align }) => (align === "center" ? "block" : "inline-block")};
  margin: ${({ align }) => (align === "center" ? "0 auto" : "0")};
  border: 1px ${COLOR.blue} solid;
  cursor: pointer;
  padding: 0;
  border-radius: 7px;
  line-height: 30px;
  padding: 3px 22px 3px 40px;
  position: relative;

  @media ${SCREEN.cursor} {
    &:hover {
      background-color: ${COLOR.yellow};
    }

    &:hover .label {
      color: ${({ variant }) => variant === "solid" && COLOR.blue};
    }
    &:hover .icon--triangle {
      color: ${({ variant }) => variant === "solid" && COLOR.blue};
    }
  }

  .label {
    color: ${({ variant }) => (variant === "solid" ? COLOR.white : COLOR.blue)};
    font-size: 0.95rem;
  }

  .icon {
    position: absolute;
    font-size: 0.9rem;

    &--behind {
      color: ${COLOR.yellow};
      left: 13px;
      top: 14px;
    }

    &--front {
      color: ${({ variant }) =>
        variant === "solid" ? COLOR.white : COLOR.blue};

      transform: rotate(90deg);
      left: 17px;
      top: 11px;
    }
  }
`;

export default Wrapper;
