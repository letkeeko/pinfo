import styled from "styled-components";
import { COLOR } from "../variables";
import { TextProps } from "./Text";

export const TextWrapper = styled.p<TextProps>`
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  margin: ${({ align }) => (align === "center" ? "0 auto" : "0")};
  font-size: 1rem;

  a {
    color: ${COLOR.black};
    text-decoration: underline;

    &:hover {
      color: ${COLOR.blue};
    }
  }
`;

export default TextWrapper;
