import "./Input.css";

type TextInputProps = {
  id: string;
  name: string;
  label: string;
  ariaLabel?: string;
  placeholder?: string;
  value?: string;
  direction?: "column" | "row";
  type?: "text" | "password" | "email" | "number";
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  id,
  name,
  placeholder,
  label,
  ariaLabel,
  type,
  value,
  direction = "column",
  required = false,
  disabled = false,
  onChange,
}: TextInputProps) => {
  return (
    <div className={`input-container ${direction}`}>
      <label
        id={`${id}-label`}
        htmlFor={id}
        className="input-label"
        aria-label={label}
      >
        {label}
      </label>
      <input
        type={type ?? "text"}
        value={value}
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel ?? label}
        id={id}
        required={required}
        disabled={disabled}
        className="input-field"
        aria-labelledby={`${id}-label`}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          }
        }}
      />
    </div>
  );
};

export default TextInput;