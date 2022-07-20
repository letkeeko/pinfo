import styled from "styled-components";
import { SCREEN, COLOR } from "../../variables";

const FeaturedWrapper = styled.section`
  padding: 300px 0 150px 0;
  margin: 0 auto;

  .flex-row {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    @media ${SCREEN.tablet} {
      padding: 0 48px;
    }
    @media ${SCREEN.desktop} {
      padding: 0;
    }

    .col {
      width: 50%;
      position: relative;

      .img-wrap {
        width: calc(100px + 22vw);
        max-width: 400px;
        position: relative;

        .img {
          position: relative;
          z-index: 2;

          img {
            border-radius: 50%;
          }
        }

        .decoration {
          position: absolute;
          background-color: blue;
          height: 100%;
          width: 130%;
          left: -80%;
          top: 50%;
          border-radius: 0 999px 999px 0;
          z-index: 1;
          @media ${SCREEN.desktop} {
            width: 280%;
            left: -230%;
          }
        }

        &__absolute-number {
          position: absolute;
          font-size: 5.9rem;
          font-weight: 400;
          line-height: 30px;
          top: -16%;
          left: -8%;

          .label {
            display: block;
          }
        }

        &--1 {
          color: ${COLOR.purple};

          .decoration {
            background-color: ${COLOR.purple};
          }
        }

        &--2 {
          color: ${COLOR.green};

          .decoration {
            background-color: ${COLOR.green};
          }
        }

        &--3 {
          color: ${COLOR.yellow};

          .decoration {
            background-color: ${COLOR.yellow};
          }
        }

        &--4 {
          color: ${COLOR.red};

          .decoration {
            background-color: ${COLOR.red};
          }
        }

        &--5 {
          color: ${COLOR.blue};

          .decoration {
            background-color: ${COLOR.blue};
          }
        }
      }

      &--two {
        .heading {
          font-size: 2.6rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .description {
          font-weight: 300;
          font-size: 1.1rem;
          margin: 27px 0 54px 0;
          max-width: 550px;
        }

        .link {
          color: ${COLOR.black};
          font-size: 2.6rem;
          font-weight: 300;
          display: flex;
          align-items: center;
          max-width: max-content;

          span {
            position: relative;

            &::after {
              content: "";
              background-color: ${COLOR.black};
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: -9px;
              left: 0;
              transform: scaleX(0);
              transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1);
              transform-origin: left;
            }
          }

          svg {
            margin: 0 0 0 18px;
          }

          &:hover span::after {
            transform: scaleX(1);
          }
        }
      }
    }
  }

  &:nth-child(even) {
    .col {
      &--one {
        display: flex;
        justify-content: flex-end;
        padding: 0 50px 0 0;

        @media ${SCREEN.desktop} {
          padding: 0;
        }

        .img-wrap {
          .decoration {
            left: auto;
            border-radius: 999px 0 0 999px;
            right: -80%;
            @media ${SCREEN.desktop} {
              padding: 0;
              right: -230%;
            }
          }

          &__absolute-number {
            left: auto;
            right: -8%;
          }
        }
      }

      &--two {
        order: -1;
      }
    }
  }

  &:nth-child(odd) {
    .col {
      width: 50%;

      &--one {
      }

      &--two {
      }
    }
  }
`;

export default FeaturedWrapper;
