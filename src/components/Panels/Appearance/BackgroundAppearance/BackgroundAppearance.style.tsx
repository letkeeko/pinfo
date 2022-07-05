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
        width: 25%;
        margin: 0 18px;

        .content {
          height: 8vw;
          border-radius: 6px;
          margin: 0 0 9px 0;
          cursor: pointer;
          opacity: 0.25;

          &--flat {
            background-color: ${COLOR.blue};
          }

          &--gradient {
            background-image: linear-gradient(
              to top,
              ${COLOR.blue},
              ${COLOR.white}
            );
          }

          &--grainy {
            background-color: ${COLOR.blue};
            background-image: url("/grainy-bg.png");
          }

          &--image {
            border: ${COLOR.blue} dashed 1px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              font-size: 3rem;
              background-color: ${COLOR.blue};
              color: ${COLOR.white};
              border-radius: 8px;
            }
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
