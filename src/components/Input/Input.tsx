import React from "react";
import InputWrapper from "./style";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  handleChange: (key: string, value: string) => void;
};

const Input = (props: InputProps) => {
  const {
    type,
    name,
    label,
    placeholder,
    required,
    defaultValue,
    value,
    handleChange,
  } = props;

  return (
    <InputWrapper>
      {!!label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}

      {type !== "textarea" && (
        <input
          className="input"
          defaultValue={defaultValue}
          value={value}
          name={name}
          id={name}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      )}

      {type === "textarea" && (
        <textarea
          className="input input--textarea"
          defaultValue={defaultValue}
          value={value}
          name={name}
          id={name}
          placeholder={placeholder}
          required={required}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      )}
    </InputWrapper>
  );
};

export default Input;
