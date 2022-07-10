import styled from "styled-components";
import { COLOR } from "../variables";

export const ModalContainerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalGuideWrapper = styled.div`
  background-color: ${COLOR.white};
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  height: calc(100% - 25vh);
  overflow: scroll;
`;

export const ModalLinksWrapper = styled.div`
  background-color: ${COLOR.white};
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  height: calc(100% - 25vh);
  overflow: scroll;
  z-index: 5;

  .search-input-wrap {
    background-color: ${COLOR.white};
    display: flex;
    align-items: center;
    padding: 18px 0;
    position: sticky;
    top: 0;
    padding: 60px 36px 0 36px;
    z-index: 2;

    &__icon {
      font-size: 1.2rem;
      margin: 0 9px 0 0;
      position: absolute;
      bottom: 12px;
      left: 55px;
    }

    &__input {
      background-color: ${COLOR.ice};
      color: ${COLOR.black};
      border: 0;
      border-radius: 5px;
      padding: 6px 10px 6px 52px;
      line-height: 30px;
      display: block;
      width: 100%;
      font-size: 16px;
      font-weight: 300;
    }

    &__close-btn {
      color: ${COLOR.blue};
      background-color: transparent;
      border: 0;
      font-size: 1.4rem;
      position: absolute;
      top: 18px;
      right: 27px;
      cursor: pointer;
    }
  }

  .option-list {
    display: flex;
    flex-wrap: wrap;
    padding: 36px 18px 18px 18px;

    &__each {
      border: 1px solid ${COLOR.getBlack(0.125)};
      color: ${COLOR.blue};
      background-color: transparent;
      width: calc(50% - 36px);
      margin: 0 18px 36px 18px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      line-height: 30px;
      position: relative;

      svg {
        font-size: 1.2rem;
        margin: 0 18px 0 0;
      }

      span {
        font-size: 0.9rem;
        font-weight: 300;
      }

      .active-indicator {
        color: ${COLOR.green};
        position: absolute;
        right: 0;
        font-size: 1.2rem;
      }

      &--active {
        pointer-events: none;
      }
    }
  }
`;
