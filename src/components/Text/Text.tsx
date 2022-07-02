import React from "react";
import Wrapper from "./style.Text";

const Text = (props: TextProps) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

type TextProps = {
  children: React.ReactNode;
};

export default Text;
