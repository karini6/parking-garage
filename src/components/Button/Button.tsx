import type { FormEvent } from "react";
import "./Button.css";

type Variant = "primary" | "secondary";

type ButtonProps = {
  variant?: Variant;
  text: string;
  type: "button" | "submit";
  handleClick?: (e: FormEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button = ({ text, type, handleClick, disabled, variant = "secondary" }: ButtonProps) => {
  return (
    <button
      className={`${variant}-btn btn`}
      type={type}
      onClick={handleClick}
      disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
