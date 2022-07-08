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
      flex-wrap: wrap;
      padding: 36px 18px 18px 18px;

      &__each {
        width: calc(20% - 36px);
        margin: 0 18px 36px 18px;
        cursor: pointer;

        .content {
          border: 1px solid ${COLOR.getBlack(0.125)};
          height: 7vw;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;

          .letter {
            font-size: 2.5rem;
            font-weight: 400;
          }
        }

        .label {
          text-align: center;
          display: block;
          font-size: 0.8rem;
          font-weight: 300;
          margin: 9px 0 0 0;
        }

        &--active {
          .content {
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
