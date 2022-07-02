import React from "react";
import Wrapper from "./style.Spacer";

const Spacer = (props: SpacerProps) => {
  const { mt, mr, mb, ml } = props;

  return (
    <Wrapper
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
      aria-hidden="true"
      role="presentation"
    ></Wrapper>
  );
};

export type SpacerProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};

export default Spacer;
