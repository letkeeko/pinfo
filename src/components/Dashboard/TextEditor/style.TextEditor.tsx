import styled from "styled-components";
import { COLOR } from "../../variables";

type WrapperProps = {
  isExpand: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  background-color: ${COLOR.white};
  border-radius: 8px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  box-shadow: 0 5px 12px -2px rgba(60, 60, 60, 0.075);

  .title-wrap {
    display: flex;
    align-items: center;
    padding: 15px 17px;
    border-bottom: 1px solid rgba(60, 60, 60, 0.125);

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
        color: rgba(60, 60, 60, 0.35);
        font-weight: 300;
      }
    }
  }

  .quill {
    height: ${({ isExpand }) => (isExpand ? "0" : "auto")};
    overflow: ${({ isExpand }) => (isExpand ? "hidden" : "visible")};

    .ql-toolbar {
      border-bottom: 1px solid rgba(60, 60, 60, 0.125) !important;
      padding: 0;

      .ql-formats {
        border-right: 1px solid rgba(60, 60, 60, 0.125);
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
          background-color: rgba(15, 99, 147, 0.1);
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
          font-size: 0.95rem;
          font-style: normal;
          font-weight: 300;
          color: rgba(60, 60, 60, 0.35);
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

      &:focus {
        background-color: rgba(15, 99, 147, 0.075);
      }

      &--lg {
        font-size: 1.3rem;
        margin: 0 0 -5px 0;
      }
    }

    .delete-confirmation {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 18px 0 0;
      left: 0;
      background-color: ${COLOR.blue};
      width: 100%;
      bottom: 0;
      height: 100%;

      &__label {
        color: ${COLOR.white};
        font-size: 0.775rem;
        margin: 0 10px 0 0;
      }

      &__trigger {
        color: ${COLOR.white};
        background-color: transparent;

        cursor: pointer;
        border: 0;
        line-height: 30px;
        font-size: 0.775rem;
        padding: 0;
        margin: 0 0 0 18px;
        padding: 0 9px;

        &--underline {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default Wrapper;
