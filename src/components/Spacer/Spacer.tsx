import React from "react";
import Wrapper from "./Spacer.style";

export type SpacerProps = {
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
};

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

export default Spacer;
