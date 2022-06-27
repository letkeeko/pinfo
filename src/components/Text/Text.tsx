import React from "react";
import Wrapper from "./Text.style";

type TextProps = {
  children: React.ReactNode;
};

const Text = (props: TextProps) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default Text;
