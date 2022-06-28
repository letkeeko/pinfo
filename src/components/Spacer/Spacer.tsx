import React from "react";
import Wrapper from "./style.Spacer";

export type SpacerProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};

const Spacer = (props: SpacerProps) => {
  const { mt, mr, mb, ml } = props;

  return (
    <Wrapper mt={mt} mr={mr} mb={mb} ml={ml} role="presentation"></Wrapper>
  );
};

export default Spacer;
