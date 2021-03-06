import styled from "styled-components";
import { COLOR } from "../../variables";

type LinkFieldWrapperProps = {
  isInvalidUrl: boolean;
};

export const LinkFieldWrapper = styled.div<LinkFieldWrapperProps>`
  background-color: ${COLOR.white};
  border: ${({ isInvalidUrl }) =>
    isInvalidUrl ? `1px solid ${COLOR.red}` : `1px solid ${COLOR.white}`};

  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.075)};
  position: relative;

  .platform {
    border-right: 1px solid ${COLOR.getBlack(0.125)};
    padding: 6px 20px;
    line-height: 30px;
    min-width: 125px;
    max-width: 125px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &__label {
      font-weight: 300;
      font-size: 0.9rem;
    }
  }

  .input {
    background-color: ${COLOR.white};
    color: ${COLOR.getBlack(0.5)};
    border: 0;
    border-radius: 5px;
    padding: 10px 12px 10px 18px;
    line-height: 30px;
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: 300;
    outline: none;

    &::placeholder {
      color: ${COLOR.getBlack(0.35)};
    }

    &:focus {
      color: ${COLOR.black};
    }
  }

  .delete-btn {
    color: ${COLOR.blue};
    cursor: pointer;
    background-color: transparent;
    border: 0;
    line-height: 30px;
    font-size: 1rem;
    margin: 0 18px 0 0;
    padding: 0;
  }
`;
