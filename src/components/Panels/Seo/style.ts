import styled from "styled-components";
import { COLOR } from "../../variables";

export const SeoWrapper = styled.div`
  .card {
    background-color: ${COLOR.white};
    box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.075)};
    border-radius: 8px;
    margin: 18px 0 0 0;
    padding: 36px 36px 45px 36px;
  }
`;

export const SeoPreviewWrapper = styled.div`
  background-color: ${COLOR.white};
  margin: 18px auto 0 auto;
  height: 690px;
  width: 356px;
  border: 20px solid black;
  border-radius: 20px;

  .subwrapper {
    background-color: ${COLOR.white};
    border-radius: 15px;
    padding: 24px 16px;
    height: calc(100% + 12px);
    width: calc(100% + 12px);
    margin: -6px;
  }

  .input-wrap {
    pointer-events: none;
    position: relative;

    &__icon {
      color: #9aa0a6;
      position: absolute;
      left: 14px;
      top: 12px;
      font-size: 1.25rem;
    }

    &__input {
      background-color: ${COLOR.white};
      height: 44px;
      box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
      border-radius: 24px;
      width: 100%;
      display: block;
      border: 1px solid transparent;
      color: rgba(0, 0, 0, 0.87);
      font-family: Arial, Helvetica, sans-serif;
      padding: 0 4px 0 44px;
    }
  }

  .txt {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.3;

    &--count {
      color: #70757a;
      line-height: 43px;
      font-size: 0.875rem;
    }

    &--url {
      color: #202124;
      font-size: 0.875rem;
      font-style: normal;
      padding: 18px 0 0 0;

      svg {
        margin: 0 0 -2px 10px;
      }
    }

    &--title {
      color: #1a0dab;
      font-size: 1.25rem;
      padding: 5px 0 3px 0;
    }

    &--description {
      color: #4d5156;
      font-size: 0.875rem;
      line-height: 1.58;
    }
  }
`;
