import React from "react";
import SpacerWrapper from "./style";

export type SpacerProps = {
  length: number;
};

const Spacer = (props: SpacerProps) => {
  const { length } = props;

  return (
    <SpacerWrapper
      length={length}
      aria-hidden="true"
      role="presentation"
    ></SpacerWrapper>
  );
};

export default Spacer;
