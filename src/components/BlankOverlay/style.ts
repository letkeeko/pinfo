import styled from "styled-components";
import { COLOR } from "../variables";

const BlankOverlayWrapper = styled.div`
  background-color: ${COLOR.getBlack(0.55)};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
`;

export default BlankOverlayWrapper;
