import styled from "styled-components";
import { COLOR } from "../variables";

export const LayoutWrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    position: relative;
    padding: 0 0 0 70px;
    z-index: 2;

    .col {
      &--edit-panel {
        background-color: ${COLOR.ice};
        width: 50%;
        padding: 140px 35px;
        height: 100vh;
        overflow: scroll;
      }

      &--preview {
        border-left: 1px solid ${COLOR.getBlack(0.125)};
        width: 50%;
        padding: 140px 0 0 0;
      }
    }
  }
`;

export const TopBarWrapper = styled.nav`
  background-color: ${COLOR.white};
  border-bottom: 1px solid ${COLOR.getBlack(0.125)};
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 3;

  .menu-list {
    width: 100%;
    display: flex;
    padding: 0 0 0 70px; // this padding-left is based on left bar width

    &__each {
      position: relative;
      display: block;

      .btn {
        color: ${COLOR.blue};
        cursor: pointer;
        background-color: transparent;
        border: 0;
        font-size: 0.925rem;
        line-height: 30px;
        padding: 0 48px;
      }

      &--active {
        &::after {
          background-color: ${COLOR.blue};
          content: "";
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: -20px;
        }
      }

      &--share {
        padding: 0 48px 0 0;

        .btn {
          border: 1px solid ${COLOR.getBlack(0.125)};
          position: relative;
          padding: 3px 24px;
          border-radius: 5px;
        }
      }
    }

    .col {
      display: flex;
      height: 70px;
      align-items: center;

      &--one {
        width: 50%;
      }

      &--two {
        border-left: 1px solid ${COLOR.getBlack(0.125)};
        justify-content: flex-end;
        width: 50%;
      }
    }
  }
`;

export const LeftBarWrapper = styled.aside`
  background-color: ${COLOR.white};
  border-right: 1px solid ${COLOR.getBlack(0.125)};
  position: fixed;
  left: 0;
  height: 100%;
  padding: 20px 0 25px 0;
  display: flex;
  flex-direction: column;
  min-width: 70px;
  z-index: 4;

  .logo {
    width: 28px;
    display: block;
    margin: 0 auto;
  }

  .avatar {
    margin: auto auto 0 auto;
    position: relative;
    z-index: 2;

    &__btn {
      border: 1px solid ${COLOR.blue};
      background-color: ${COLOR.white};
      color: ${COLOR.blue};
      font-size: 1.18rem;

      cursor: pointer;
      text-align: center;
      display: flex;
      line-height: 30px;
      width: 45px;
      height: 45px;
      border-radius: 50%;

      .label {
        margin: auto;
        pointer-events: none;
      }
    }
  }
`;
