import React from "react";
import CardWrapper from "./style";

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  const { children } = props;

  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
