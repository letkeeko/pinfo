import styled from "styled-components";
import { COLOR } from "../components/variables";

const Wrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    height: 100vh;

    .col {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;

      &--white {
      }

      &--blue {
        background-color: ${COLOR.blue};
        color: ${COLOR.white};
        justify-content: center;
      }
    }
  }
`;

export default Wrapper;
