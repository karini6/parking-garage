import { NavLink } from "react-router";
import "./NavButton.css";

type Variant = "primary" | "secondary" | "tertiary";


type NavButtonProps = {
  variant?: Variant;
  text: string;
  navTo: string;
}

const NavButton = ({ text, variant = "secondary", navTo, }: NavButtonProps) => {
  return (
    <NavLink to={navTo} className={`${variant}-btn nav-btn`}>
      {text}
    </NavLink>
  );
};

export default NavButton;