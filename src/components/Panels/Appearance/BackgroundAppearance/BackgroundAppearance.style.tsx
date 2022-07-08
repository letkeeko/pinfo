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
        width: 25%;
        margin: 0 18px;
        position: relative;

        .content {
          height: 8vw;
          border-radius: 6px;
          margin: 0 0 9px 0;
          cursor: pointer;

          &--flat {
            background-color: ${COLOR.getBlue(0.3)};
          }

          &--gradient {
            background-image: linear-gradient(
              to top,
              ${COLOR.white},
              ${COLOR.getBlue(0.3)}
            );
          }

          &--grainy {
            background-color: ${COLOR.getBlue(0.3)};
            background-image: url("/grainy-bg.png");
          }

          &--image {
            border: ${COLOR.blue} dashed 1px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              background-color: ${COLOR.getBlue(0.3)};
              color: ${COLOR.white};
              font-size: 3rem;
              border-radius: 9px;
            }
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
