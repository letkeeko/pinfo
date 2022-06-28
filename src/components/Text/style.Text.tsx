import styled from "styled-components";
import { COLOR } from "../variables";

const Wrapper = styled.p`
  font-weight: 300;
  font-size: 1rem;

  a {
    color: ${COLOR.blue};
    text-decoration: underline;
  }
`;

export default Wrapper;
