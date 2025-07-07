import "./Select.css";


type SelectProps = {
  id?: string;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  direction?: "column" | "row";
  options: { value: string | number; label: string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  value?: string;
  setValue?: (value: string) => void;
};

const Select = ({
  id,
  name,
  label,
  options,
  onChange,
  onBlur,
  value,
  direction = "column",
  required = false,
  disabled = false,
}: SelectProps) => {


  return (
    <div className={`select-container ${direction}`}>
      <label htmlFor={id} aria-label={label} className="input-label">
        {label}
      </label>
      <select
        name={name}
        id={id}
        required={required}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        aria-label={label}
      >
        {options.length === 0 && <option value="">No options available</option>}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            aria-label={option.label}
          >
            {option.label}
          </option>
        ))}
        <option value="" disabled={!options.length}>
          Please choose an option
        </option>
      </select>
    </div>
  );
};

export default Select;