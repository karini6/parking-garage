import "./Input.css";

type TextInputProps = {
  id: string;
  name: string;
  label: string;
  ariaLabel?: string;
  placeholder?: string;
  direction?: "column" | "row";
  type?: "text" | "password" | "email" | "number";
  required?: boolean;
  disabled?: boolean;
}

const TextInput = ({
  id,
  name,
  placeholder,
  label,
  ariaLabel,
  type,
  direction = "column",
  required = false,
  disabled = false,
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
        placeholder={placeholder}
        name={name}
        aria-label={ariaLabel ?? label}
        id={id}
        required={required}
        disabled={disabled}
        className="input-field"
        aria-labelledby={`${id}-label`}
      />
    </div>
  );
};

export default TextInput;