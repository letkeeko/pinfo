import React from "react";
import { BsTriangleFill, BsCircleFill } from "react-icons/bs";
import {
  FillButtonWrapper,
  OutlineButtonWrapper,
  DangerButtonWrapper,
  SpecialButtonWrapper,
} from "./style";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: string;
  align?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { children, variant, align, onClick, disabled } = props;

  if (variant === "special") {
    return (
      <SpecialButtonWrapper align={align} onClick={onClick} disabled={disabled}>
        <BsCircleFill className="icon icon--behind" role="presentation" />
        <BsTriangleFill className="icon icon--front" role="presentation" />
        <span className="label">{children}</span>
      </SpecialButtonWrapper>
    );
  }

  if (variant === "outline") {
    return (
      <OutlineButtonWrapper align={align} onClick={onClick} disabled={disabled}>
        <span className="label">{children}</span>
      </OutlineButtonWrapper>
    );
  }

  if (variant === "danger") {
    return (
      <DangerButtonWrapper align={align} onClick={onClick} disabled={disabled}>
        <span className="label">{children}</span>
      </DangerButtonWrapper>
    );
  }

  return (
    <FillButtonWrapper align={align} onClick={onClick} disabled={disabled}>
      <span className="label">{children}</span>
    </FillButtonWrapper>
  );
};

export default Button;
