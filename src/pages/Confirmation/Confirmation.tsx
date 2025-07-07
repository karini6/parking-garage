import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import NavButton from "../../components/NavButton/NavButton";
import paths from "../../paths";

type ConfirmationProps = {
  arrivingFrom: "arriving" | "leaving"; 
}

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { arrivingFrom } = (location.state as ConfirmationProps) || {
    arrivingFrom: "arriving",
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      void navigate(`${paths.home}`);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  const paymentText =
    arrivingFrom === "arriving"
      ? "Your parking is registered."
      : "Parking successfully closed.";
  
  const explanationText =
    arrivingFrom === "arriving"
      ? "Come back to this screen when you are ready to leave to leave."
      : "Your parking is registered.";
  return (
    <>
      <h1>Thank you!</h1>
      <h2>{paymentText}</h2>
      <p>{explanationText}</p>
      <NavButton
        variant="primary"
        navTo={`/${paths.arrival}`}
        text="New parking"
      />
      <NavButton
        variant="primary"
        navTo={`/${paths.exit}`}
        text="Close parking"
      />
    </>
  );
};

export default Confirmation;
