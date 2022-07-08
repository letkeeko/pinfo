import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    position: relative;
    padding: 0 0 0 70px;
    z-index: 2;

    .col {
      &--edit-panel {
        background-color: ${COLOR.ice};
        width: 50%;
        padding: 140px 35px;
        height: 100vh;
        overflow: scroll;
      }

      &--preview {
        border-left: 1px solid ${COLOR.getBlack(0.125)};
        width: 50%;
        padding: 242px 0 0 0;
      }
    }
  }
`;

export default Wrapper;
