import React from "react";
import Wrapper from "./style.Text";

const Text = (props: TextProps) => {
  const { children, align } = props;

  return <Wrapper align={align || "left"}>{children}</Wrapper>;
};

export type TextProps = {
  children: React.ReactNode;
  align?: string;
};

export default Text;
