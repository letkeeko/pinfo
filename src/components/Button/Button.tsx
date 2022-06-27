import React from "react";
import { BsTriangleFill, BsCircleFill } from "react-icons/bs";
import Wrapper from "./Button.style";

type ButtonTypes = {
  children: string;
};

const Button = (props: ButtonTypes) => {
  const { children } = props;

  return (
    <Wrapper>
      <BsCircleFill className="icon icon--circle" role="presentation" />
      <BsTriangleFill className="icon icon--triangle" role="presentation" />
      <span className="label">{children}</span>
    </Wrapper>
  );
};

export default Button;
