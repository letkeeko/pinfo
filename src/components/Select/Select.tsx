import SelectWrapper from "./style";
import { VscChevronDown } from "react-icons/vsc";

type SelectProps = {
  options: string[];
  label: string;
  value: string;
  defaultValue: string;
  name: string;
  handleChange: any;
};

const Select = (props: SelectProps) => {
  const { options, value, defaultValue, label, name, handleChange } = props;

  return (
    <SelectWrapper>
      {!!label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className="select"
        name={name}
        id={name}
        // value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <VscChevronDown className="icon" />
    </SelectWrapper>
  );
};

export default Select;
