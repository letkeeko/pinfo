import styled from "styled-components";
import { COLOR } from "../../../variables";

const Wrapper = styled.div`
  .card {
    background-color: ${COLOR.white};
    border-radius: 8px;
    margin: 18px 0 0 0;
    box-shadow: 0 5px 12px -2px rgba(60, 60, 60, 0.075);

    .option-list {
      display: flex;
      padding: 36px 18px 18px 18px;

      &__each {
        width: 33.33%;
        margin: 0 18px;

        .content {
          height: 3vw;
          cursor: pointer;
          background-color: ${COLOR.blue};
          opacity: 0.25;

          &--round {
            border-radius: 6px;
          }

          &--box {
          }

          &--circular {
            border-radius: 30px;
          }

          &--active {
            opacity: 1;
          }
        }
      }
    }

    .settings {
      border-top: 1px solid rgba(60, 60, 60, 0.125);
      padding: 27px 36px 36px 36px;
      margin: 36px 0 0 0;
    }
  }
`;

export default Wrapper;
