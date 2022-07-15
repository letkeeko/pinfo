import SelectWrapper from "./style";

type SelectProps = {
  options: string[];
  label?: string;
  value: string;
  defaultValue: string;
  name: string;
  handleChange: (key: string, value: string) => void;
};

const Select = (props: SelectProps) => {
  const { options, value, label, name, handleChange } = props;

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
        value={value}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        required
      >
        <option value="">Select a category</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

export default Select;
