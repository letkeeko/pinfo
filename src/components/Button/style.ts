import styled, { css } from "styled-components";
import { COLOR, SCREEN } from "../variables";
import { ButtonProps } from "./Button";

const disabledCss = css`
  opacity: 0.5;
  pointer-events: none;
`;

const alignCss = css<ButtonProps>`
  display: ${({ align }) => (align === "center" ? "block" : "inline-block")};
  margin: ${({ align }) => (align === "center" ? "0 auto" : "0")};
`;

export const FillButtonWrapper = styled.button<ButtonProps>`
  ${alignCss}
  ${({ disabled }) => disabled && disabledCss}
  background-color: ${COLOR.blue};
  border: 1px ${COLOR.blue} solid;
  cursor: pointer;
  padding: 0;
  border-radius: 7px;
  line-height: 30px;
  padding: 3px 36px 3px 36px;
  position: relative;

  &:hover {
    background-color: transparent;
  }

  &:hover .label {
    color: ${COLOR.blue};
  }

  .label {
    color: ${COLOR.white};
    font-size: 0.95rem;
  }
`;

export const OutlineButtonWrapper = styled.button<ButtonProps>`
  ${alignCss}
  ${({ disabled }) => disabled && disabledCss}
  background-color: transparent;
  border: 1px ${COLOR.blue} solid;
  cursor: pointer;
  padding: 0;
  border-radius: 7px;
  line-height: 30px;
  padding: 3px 36px 3px 36px;
  position: relative;

  &:hover {
    background-color: ${COLOR.blue};
  }

  &:hover .label {
    color: ${COLOR.white};
  }

  .label {
    color: ${COLOR.blue};
    font-size: 0.95rem;
  }
`;

export const DangerButtonWrapper = styled.button<ButtonProps>`
  ${alignCss}
  ${({ disabled }) => disabled && disabledCss}
  background-color: ${COLOR.red};
  border: 1px ${COLOR.red} solid;
  cursor: pointer;
  padding: 0;
  border-radius: 7px;
  line-height: 30px;
  padding: 3px 36px 3px 36px;
  position: relative;

  &:hover {
    background-color: transparent;
  }

  &:hover .label {
    color: ${COLOR.red};
  }

  .label {
    color: ${COLOR.white};
    font-size: 0.95rem;
  }
`;

export const SpecialButtonWrapper = styled.button<ButtonProps>`
  ${alignCss}
  ${({ disabled }) => disabled && disabledCss}
  background-color: ${COLOR.white};
  border: 1px ${COLOR.black} solid;
  cursor: pointer;
  padding: 0;
  border-radius: 7px;
  line-height: 30px;
  padding: 6px 22px 6px 44px;
  position: relative;

  &:hover {
    background-color: ${COLOR.yellow};
  }

  &:hover .label {
    color: ${COLOR.black};
  }

  &:hover .icon--front {
    color: ${COLOR.black};
  }

  .label {
    color: ${COLOR.black};
    font-size: 0.95rem;
  }

  .icon {
    position: absolute;
    font-size: 1rem;

    &--behind {
      color: ${COLOR.yellow};
      left: 16px;
      top: 16px;
    }

    &--front {
      color: ${COLOR.black};
      transform: rotate(90deg);
      left: 20px;
      top: 13px;
    }
  }
`;
