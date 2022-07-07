import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.div`
  color: ${COLOR.blue};
  margin: 0 auto;

  .flex-row {
    display: flex;
    position: relative;
    padding: 0 0 0 70px;

    .col {
      &--edit-panel {
        background-color: ${COLOR.ice};
        width: 50%;
        padding: 140px 35px;
        height: 100vh;
        overflow: scroll;
      }

      &--preview {
        width: 50%;
        border-left: 1px solid rgba(60, 60, 60, 0.125);
        padding: 242px 0 0 0;
      }
    }
  }
`;

export default Wrapper;
