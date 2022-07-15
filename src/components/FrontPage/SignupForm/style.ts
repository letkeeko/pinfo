import styled from "styled-components";
import { COLOR } from "../../variables";

const SignupFormWrapper = styled.div`
  max-width: 370px;
  width: 100%;

  .username-input-wrap {
    position: relative;

    .absolute-txt {
      position: absolute;
      top: 30px;
      left: 13px;
      color: ${COLOR.getBlack(0.35)};
      pointer-events: none;
    }

    input {
      padding-left: 72px;
    }
  }

  .checkbox-wrap {
    display: flex;
    align-items: flex-start;

    input {
      margin: 2px 0 0 0;
    }

    label {
      font-size: 0.675rem;
      margin: 0 0 0 5px;
      line-height: 1.5;
      max-width: 270px;

      a {
        color: ${COLOR.black};
        text-decoration: underline;
      }
    }
  }
`;

export default SignupFormWrapper;
