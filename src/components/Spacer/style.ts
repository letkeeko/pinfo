import styled from "styled-components";
import { SpacerProps } from "./Spacer";

export const SpacerWrapper = styled.div<SpacerProps>`
  margin-top: ${({ length }) => `${length}px`};
`;

export default SpacerWrapper;
