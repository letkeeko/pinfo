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

type ModalMediaLibraryWrapperProps = {
  isGlobal: boolean;
};

export const ModalMediaLibraryWrapper = styled.div<ModalMediaLibraryWrapperProps>`
  background-color: ${COLOR.white};
  border-radius: 8px;
  max-width: 1000px;
  max-height: 750px;
  width: 100%;
  z-index: 5;
  padding: 36px 36px 0 36px;
  overflow: scroll;

  .img-list {
    display: flex;
    flex-wrap: wrap;
    margin: 36px -9px 18px -9px;

    &__each {
      cursor: ${({ isGlobal }) => (isGlobal ? "auto" : "pointer")};
      width: calc(20% - 18px);
      margin: 0 9px 18px 9px;
      overflow: hidden;
      padding: 9px;
      border: 1px solid ${COLOR.getBlack(0.125)};
      position: relative;

      .img-wrap {
        background-image: url("/transparent-bg.png");
        background-size: 27px;
        position: relative;

        &__preview-bg {
          background-size: contain;
          background-repeat: no-repeat;
          background-position: 50%;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        &:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
      }

      .txt-wrap {
        margin: 9px 0 0 0;
        position: relative;
      }

      .label {
        font-weight: 300;
        font-size: 0.7rem;
        display: block;

        &--absolute {
          background-color: ${COLOR.getBlack(0.075)};
          position: absolute;
          text-transform: uppercase;
          right: 0;
          bottom: 0;
          font-size: 0.525rem;
          padding: 2px 4px;
          border-radius: 2px;
        }
      }

      .overlay {
        background-color: ${COLOR.getWhite(0.8)};
        color: ${COLOR.black};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;

        svg {
          font-size: 2rem;
          margin: 9px 0 0 0;
        }
      }

      &:hover .overlay {
        opacity: 1;
      }
    }
  }

  .btn-wrap {
    position: sticky;
    background-color: ${COLOR.white};
    bottom: 0;
    padding: 36px 0;
  }
`;
