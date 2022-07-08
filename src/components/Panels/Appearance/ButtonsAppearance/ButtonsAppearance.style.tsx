import styled from "styled-components";
import { COLOR } from "../../../variables";

const Wrapper = styled.div`
  .card {
    background-color: ${COLOR.white};
    box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.075)};
    border-radius: 8px;
    margin: 18px 0 0 0;

    .option-list {
      display: flex;
      padding: 36px 18px 18px 18px;

      &__each {
        width: 33.33%;
        margin: 0 18px;

        .content {
          background-color: ${COLOR.getBlue(0.3)};
          height: 3vw;
          cursor: pointer;

          &--round {
            border-radius: 8px;
          }

          &--box {
          }

          &--circular {
            border-radius: 100px;
          }

          &--active {
            border: 3px solid ${COLOR.yellow};
          }
        }
      }
    }

    .settings {
      border-top: 1px solid ${COLOR.getBlack(0.125)};
      padding: 27px 36px 36px 36px;
      margin: 36px 0 0 0;
    }
  }
`;

export default Wrapper;
