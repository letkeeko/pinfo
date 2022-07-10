import React from "react";
import TextWrapper from "./style";

export type TextProps = {
  children: React.ReactNode;
  align?: string;
  weight?: number;
};

const Text = (props: TextProps) => {
  const { children, align, weight } = props;

  return (
    <TextWrapper align={align || "left"} weight={weight || 300}>
      {children}
    </TextWrapper>
  );
};

export default Text;
