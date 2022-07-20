import React from "react";
import { InputWrapper } from "./style";
import Warning from "./Warning";

type InputProps = {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  warning?: string;
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
    warning,
  } = props;

  return (
    <>
      <InputWrapper>
        {!!label && (
          <label className="label" htmlFor={name}>
            {label}
          </label>
        )}

        {type !== "textarea" && (
          <input
            defaultValue={defaultValue}
            value={value}
            name={name}
            id={name}
            type={type}
            placeholder={placeholder}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input"
          />
        )}

        {type === "textarea" && (
          <textarea
            defaultValue={defaultValue}
            value={value}
            name={name}
            id={name}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className="input input--textarea"
          />
        )}
      </InputWrapper>

      {!!warning && <Warning warning={warning} />}
    </>
  );
};

export default Input;
