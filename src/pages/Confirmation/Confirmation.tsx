import { useLocation } from "react-router";

interface ConfirmationProps {
  arrivingFrom: "arriving" | "leaving"; 
}


const Confirmation = () => {
  const location = useLocation();
  const arrivingFrom = (location.state as ConfirmationProps)?.arrivingFrom
  const explanationText =
    arrivingFrom === "arriving"
      ? "Your parking is registered."
      : "Your payment is registered.";
  return (
    <>
      <h1>Thank you!</h1>
      <h2>{explanationText}</h2>
    </>
  );
};

export default Confirmation;
