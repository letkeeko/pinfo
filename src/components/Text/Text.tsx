import React from "react";
import Wrapper from "./style.Text";

export type TextProps = {
  children: React.ReactNode;
  align?: string;
};

const Text = (props: TextProps) => {
  const { children, align } = props;

  return <Wrapper align={align || "left"}>{children}</Wrapper>;
};

export default Text;
