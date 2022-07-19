import styled from "styled-components";
import { COLOR } from "../../variables";

const SlidesWrapper = styled.div`
  position: relative;

  margin: 0 auto;
  max-width: max-content;

  .slides {
    position: relative;
    margin: 0 auto;
    max-width: max-content;
    overflow: hidden;
    padding-bottom: 2%;

    &__each {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;

      &--hidden {
        opacity: 0;
        position: static;
      }

      &--upcoming {
        top: 10%;
        z-index: 1;
        transform: scale(0.925);
      }
    }
  }

  .indicator {
    max-width: 278px;
    margin: 72px auto 0 auto;
    display: flex;
    height: 6px;
    border-radius: 2px;
    overflow: hidden;

    &__each {
      width: 11.11%;
      display: block;
      background-color: ${COLOR.getBlack(0.05)};
      border-radius: 2px;
      &--active {
        background-color: ${COLOR.getBlack(0.25)};
      }
    }
  }

  .arrow {
    background-color: transparent;
    position: absolute;
    border: 0;
    padding: 0;
    cursor: pointer;
    top: 36%;

    .icon {
      display: block;
      svg {
        display: block;
        line-height: 30px;
        font-size: 2.8rem;
        color: ${COLOR.black};
      }
    }

    &--prev {
      left: -75px;
    }

    &--next {
      right: -75px;
    }
  }
`;

export default SlidesWrapper;
