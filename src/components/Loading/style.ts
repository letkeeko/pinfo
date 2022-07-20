import styled, { keyframes } from "styled-components";
import { COLOR } from "../variables";

const bounce = keyframes`
from, to {
    transform: translateY(0) scale(1,1);
	animation-timing-function: ease-in;
}

45% {
    transform: translateY(45px) scale(1,1);
    animation-timing-function: linear;
}

50% {
    transform: translateY(45px) scale(1.5,0.5);
    animation-timing-function: linear;
}

55% {
    transform: translateY(45px) scale(1,1);
	animation-timing-function: ease-out;
}
`;

const LoadingWrapper = styled.div`
  position: fixed;
  background-color: ${COLOR.getWhite(0.96)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  display: flex;

  .circles {
    display: flex;
    justify-content: space-between;
    width: 100px;
    margin: auto;

    .circle {
      border-radius: 50%;
      width: 10px;
      height: 10px;
      transform-origin: 50% 100%;

      &--one {
        background-color: ${COLOR.purple};
        animation: ${bounce} 0.625s linear infinite;
      }

      &--two {
        background-color: ${COLOR.green};
        animation: ${bounce} 0.625s 0.05s linear infinite;
      }

      &--three {
        background-color: ${COLOR.yellow};
        animation: ${bounce} 0.625s 0.025s linear infinite;
      }

      &--four {
        background-color: ${COLOR.red};
        animation: ${bounce} 0.625s 0.05s linear infinite;
      }

      &--five {
        background-color: ${COLOR.blue};
        animation: ${bounce} 0.625s linear infinite;
      }
    }
  }
`;

export default LoadingWrapper;
