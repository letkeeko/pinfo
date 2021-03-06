import React from "react";
import { H1, H2 } from "./style";

type HeadingProps = {
  children: React.ReactNode;
  as: string;
};

const Heading = (props: HeadingProps) => {
  const { as, children } = props;

  if (as === "h1") return <H1>{children}</H1>;

  if (as === "h2") return <H2>{children}</H2>;

  return null;
};

export default Heading;
