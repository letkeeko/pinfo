import styled from "styled-components";
import { COLOR } from "../variables";

const CardWrapper = styled.div`
  background-color: ${COLOR.white};
  box-shadow: 0 5px 12px -2px ${COLOR.getBlack(0.075)};
  border-radius: 8px;
  padding: 36px 36px 45px 36px;
`;

export default CardWrapper;
