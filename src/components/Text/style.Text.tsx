import styled from "styled-components";
import { COLOR } from "../variables";
import { TextProps } from "./Text";

const Wrapper = styled.p<TextProps>`
  font-weight: 300;
  font-size: 1rem;
  text-align: ${({ align }) => align};

  a {
    color: ${COLOR.blue};
    text-decoration: underline;
  }
`;

export default Wrapper;
