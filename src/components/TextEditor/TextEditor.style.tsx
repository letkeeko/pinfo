import styled from "styled-components";
import { COLOR } from "../variables";

type WrapperProps = {
  isExpand: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  background-color: ${COLOR.white};
  box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.075)};
  border-radius: 8px;
  position: relative;
  margin: 0 auto;
  z-index: 4;

  .title-wrap {
    border-bottom: 1px solid ${COLOR.getBlack(0.125)};
    display: flex;
    align-items: center;
    padding: 15px 17px;

    &__icon {
      display: block;
      width: 24px;
      margin: 0 10px 0 0;
    }

    &__input {
      display: block;
      border: 0;
      outline: none;
      width: 100%;
      line-height: 1.4;
      font-size: 1.05rem;
      color: ${COLOR.black};

      &::placeholder {
        color: ${COLOR.getBlack(0.35)};
        font-weight: 300;
      }
    }
  }

  .quill {
    height: ${({ isExpand }) => (isExpand ? "0" : "auto")};
    overflow: ${({ isExpand }) => (isExpand ? "hidden" : "visible")};

    .ql-toolbar {
      border-bottom: 1px solid ${COLOR.getBlack(0.125)} !important;
      padding: 0;

      .ql-formats {
        border-right: 1px solid ${COLOR.getBlack(0.125)};
        padding: 4px 8px;
        margin: 0;

        svg {
          display: none;
        }

        .ql-picker {
          position: relative;
          color: ${COLOR.black};
          font-size: 0.8rem;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-arrow.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 9px;
            height: 100%;
            display: block;
            position: absolute;
            right: -2px;
            top: 0.5px;
            width: 28px;
          }

          .ql-picker-label {
            svg {
            }
          }

          .ql-picker-options {
            .ql-picker-item {
            }
          }
        }

        .ql-picker-options {
          .ql-picker-item {
            color: ${COLOR.black};

            &::before {
              font-size: 0.8rem;
            }
          }
        }
        .ql-header {
        }

        .ql-bold {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-bold.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 9px;
            height: 100%;
            display: block;
          }
        }

        .ql-active {
          background-color: ${COLOR.getBlue(0.1)};
          color: ${COLOR.black};
        }

        .ql-italic {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-italic.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 9px;
            height: 100%;
            display: block;
          }
        }

        .ql-link {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-link.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 16px;
            height: 100%;
            display: block;
          }
        }

        .ql-list[value="ordered"] {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-ol.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px;
            height: 100%;
            display: block;
          }
        }

        .ql-list[value="bullet"] {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-ul.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 15px;
            height: 100%;
            display: block;
          }
        }

        .ql-image {
          width: 28px;

          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-image.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 14px;
            height: 100%;
            display: block;
          }
        }

        .ql-video {
          &::before {
            content: "";
            width: 100%;
            background-image: url("/icon-youtube.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 18px;
            height: 100%;
            display: block;
          }
        }
      }
    }

    .ql-snow {
      border: 0;
    }

    .ql-container {
      .ql-editor {
        color: ${COLOR.black};
        padding: 15px 18px;
        min-height: 100px;
        font-family: "Poppins", sans-serif;

        p {
          font-size: 0.95rem;
        }

        ul,
        ol {
          margin: 5px 0 10px 0;
        }

        li {
          font-size: 0.95rem;
        }

        h1 {
          font-size: 2.2rem;
        }

        h2 {
          font-size: 1.7rem;
        }

        h3 {
          font-size: 1.3rem;
        }

        &::before {
          color: ${COLOR.getBlack(0.35)};
          font-size: 0.95rem;
          font-style: normal;
          font-weight: 300;
          left: 18px;
        }
      }
    }

    .ql-clipboard {
      left: 0 !important;
    }

    .ql-tooltip {
      left: 18px !important;
      box-shadow: none;

      .ql-action {
        color: ${COLOR.blue};
      }
    }

    .ql-editing[data-mode="link"] {
      &::before {
        content: "Link URL";
      }
    }

    .ql-editing[data-mode="video"] {
      &::before {
        content: "Video URL";
      }
    }

    input {
      ::placeholder {
        opacity: 0;
      }
    }
  }

  .quill > .ql-toolbar:first-child {
    display: none !important;
  }

  .controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 6px 18px 6px 0;
    position: relative;

    &__btn {
      color: ${COLOR.blue};
      cursor: pointer;
      background-color: transparent;
      border: 0;
      line-height: 30px;
      font-size: 1rem;
      margin: 0 0 0 18px;
      padding: 0;
      position: relative;

      &--lg {
        font-size: 1.3rem;
        margin: 0 0 -5px 0;
      }
    }
  }
`;

export default Wrapper;
