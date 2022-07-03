import styled from "styled-components";
import { COLOR } from "../../variables";

const Wrapper = styled.nav`
  background-color: ${COLOR.white};
  border-bottom: 1px solid rgba(60, 60, 60, 0.125);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;

  .menu-list {
    width: 100%;
    display: flex;
    padding: 0 0 0 70px; // this padding-left is based on left bar width

    &__each {
      position: relative;
      display: block;

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

      .btn {
        color: ${COLOR.blue};
        cursor: pointer;
        background-color: transparent;
        border: 0;
        font-size: 0.925rem;
        line-height: 30px;
        padding: 0 48px;
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
        justify-content: flex-end;
        border-left: 1px solid rgba(60, 60, 60, 0.125);
        width: 50%;
      }
    }
  }
`;

export default Wrapper;
