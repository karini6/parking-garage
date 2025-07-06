import { NavLink } from "react-router";
import "./NavButton.css";

type Variant = "primary" | "secondary" | "tertiary";


interface NavButtonProps {
  variant?: Variant;
  size?: "small" | "medium" | "large";
  text: string;
  navTo: string;
}

const NavButton = ({ text, variant = "secondary", navTo, size = "medium" }: NavButtonProps) => {
  return (
    <NavLink to={navTo} className={`${variant}-btn nav-btn ${size}`}>
      {text}
    </NavLink>
  );
};

export default NavButton;