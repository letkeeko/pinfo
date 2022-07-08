import React from "react";
import { BsTriangleFill, BsCircleFill, BsPlusLg } from "react-icons/bs";
import Wrapper from "./Button.style";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  align?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { children, variant, align, onClick } = props;

  if (variant === "solid") {
    return (
      <Wrapper variant={variant} align={align} onClick={onClick}>
        <BsPlusLg className="icon icon--front" role="presentation" />
        <span className="label">{children}</span>
      </Wrapper>
    );
  }

  return (
    <Wrapper align={align} onClick={onClick}>
      <BsCircleFill className="icon icon--behind" role="presentation" />
      <BsTriangleFill className="icon icon--front" role="presentation" />
      <span className="label">{children}</span>
    </Wrapper>
  );
};

export default Button;
