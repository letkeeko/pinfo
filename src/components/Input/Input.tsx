import React from "react";
import Wrapper from "./style.Input";

type InputProps = {
  type: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
};

const Input = (props: InputProps) => {
  const { type, label, placeholder, required } = props;

  return (
    <Wrapper>
      {!!label && <label className="label">{label}</label>}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </Wrapper>
  );
};

export default Input;
