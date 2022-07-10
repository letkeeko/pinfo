import styled from "styled-components";
import { COLOR } from "../variables";

export const PopoverAccountWrapper = styled.div`
  box-shadow: 0 0 12px 0 ${COLOR.getBlack(0.125)};
  position: absolute;
  background-color: ${COLOR.white};
  bottom: 62px;
  left: 50px;
  border-radius: 8px;
  z-index: 5;

  .nav-item {
    padding: 25px 75px 25px 25px;

    &__btn {
      display: flex;
      align-items: center;
      line-height: 30px;
      background-color: transparent;
      border: 0;
      color: ${COLOR.blue};
      white-space: pre;
      cursor: pointer;

      .icon {
        margin: 0 20px 0 0;
        font-size: 1.2rem;
      }

      &--active {
        color: ${COLOR.yellow};
      }
    }

    &--border {
      border-top: 1px solid ${COLOR.getBlack(0.125)};
    }
  }
`;

export const PopoverShareWrapper = styled.div`
  box-shadow: 0 0 12px 0 ${COLOR.getBlack(0.125)};
  position: absolute;
  background-color: ${COLOR.white};
  top: 58px;
  right: 48px;
  border-radius: 8px;
  z-index: 5;
  max-width: 300px;

  .nav-item {
    padding: 25px 75px 25px 25px;

    &__tip-txt {
      color: ${COLOR.getBlue(0.7)};
      font-weight: 300;
      font-size: 0.825rem;
      line-height: 1.4;
    }

    &__btn {
      display: flex;
      align-items: center;
      line-height: 30px;
      background-color: transparent;
      border: 0;
      color: ${COLOR.blue};
      white-space: pre;
      cursor: pointer;

      .icon {
        margin: 0 20px 0 0;
        font-size: 1.2rem;
      }

      &--active {
        color: ${COLOR.yellow};
      }
    }

    &:last-child {
      border-bottom: none;
    }

    &--tip {
      padding: 25px 50px 0 25px;
    }

    &--border {
      border-top: 1px solid ${COLOR.getBlack(0.125)};
    }
  }
`;
