import styled from "styled-components";
import { SpacerProps } from "./Spacer";

const Wrapper = styled.div<SpacerProps>`
  margin-top: ${({ mt }) => (mt ? `${mt}px` : 0)};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : 0)};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : 0)};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : 0)};
`;

export default Wrapper;
