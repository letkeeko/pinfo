import styled from "styled-components";
import { COLOR } from "../../variables";

const Wrapper = styled.nav`
  background-color: ${COLOR.white};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;

  .menu-list {
    width: 100%;
    display: flex;
    padding: 0 0 0 64px;

    &__each {
      padding: 0;

      padding: 0 34px;

      position: relative;
      display: block;

      &--active {
        &::after {
          content: "";
          background-color: ${COLOR.blue};
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: -6px;
        }
      }

      .btn {
        cursor: pointer;
        color: ${COLOR.blue};
        background-color: transparent;
        border: 0;
        font-size: 0.775rem;
        line-height: 30px;
      }
    }

    .col {
      width: 50%;
      display: flex;
      height: 42px;
      align-items: center;

      &--one {
      }

      &--two {
        justify-content: flex-end;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

export default Wrapper;
