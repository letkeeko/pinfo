import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  max-width: 610px;
  margin: 0 auto;

  .quill {
    .ql-toolbar {
      .ql-formats {
        .ql-picker {
          .ql-picker-label {
            svg {
            }
          }

          .ql-picker-options {
            .ql-picker-item {
            }
          }
        }
        .ql-header {
        }

        .ql-bold {
        }

        .ql-active {
        }

        .ql-italic {
          svg {
          }
        }

        .ql-underline {
          svg {
          }
        }

        .ql-link {
          svg {
          }
        }

        .ql-list {
          svg {
          }
        }

        .ql-image {
          svg {
          }
        }

        .ql-video {
          svg {
          }
        }
      }
    }

    .ql-container {
      .ql-editor {
      }
    }

    .ql-clipboard {
      left: 0 !important;
    }

    .ql-tooltip {
      left: 0 !important;
    }
  }

  .quill > .ql-toolbar:first-child {
    display: none !important;
  }
`;

export default Wrapper;
