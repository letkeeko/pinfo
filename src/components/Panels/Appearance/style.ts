import styled, { css } from "styled-components";
import { COLOR } from "../../variables";

const settingsCss = css`
  .settings {
    border-top: 1px solid ${COLOR.getBlack(0.125)};
    padding: 27px 0 0 0;
  }
`;

export const BackgroundWrapper = styled.div`
  .option-list {
    display: flex;
    margin: 0 -18px 36px -18px;

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

  ${settingsCss};
`;

export const ButtonsWrapper = styled.div`
  .option-list {
    display: flex;
    margin: 0 -18px 36px -18px;

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

  ${settingsCss};
`;

export const FontsWrapper = styled.div`
  .option-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -18px;

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

  ${settingsCss};
`;
