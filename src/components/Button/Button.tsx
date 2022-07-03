import React from "react";
import {
  BsTriangleFill,
  BsCircleFill,
  BsFillRecordFill,
  BsPlusLg,
  BsPlusCircle,
  BsPlus,
  BsPlusCircleFill,
} from "react-icons/bs";
import Wrapper from "./style.Button";

const Button = (props: ButtonTypes) => {
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

export type ButtonTypes = {
  children: React.ReactNode;
  variant?: string;
  align?: string;
  onClick?: () => void;
};

export default Button;
