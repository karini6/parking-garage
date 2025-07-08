import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import NavButton from "../../components/NavButton/NavButton";
import useCurrentSession from "../../hooks/useCurrentSession";
import usePaymentData from "../../hooks/usePaymentData";
import paths from "../../paths";

type ConfirmationProps = {
  arrivingFrom: "arriving" | "leaving";
  regNumber: string;
};

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { arrivingFrom, regNumber } = (location.state as ConfirmationProps) || {
    arrivingFrom: "arriving",
  };
  const { currentParkingSession } = useCurrentSession(regNumber);
  const paymentData = usePaymentData(currentParkingSession?.startTime, currentParkingSession?.endTime);
  const totalCost = paymentData?.totalCost;

  useEffect(() => {
    const timer = setTimeout(() => {
      void navigate(`${paths.home}`);
    }, 5000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  const paymentText =
    arrivingFrom === "arriving"
      ? `Your parking for ${regNumber} is registered.`
      : "Parking successfully closed.";
  
  const explanationText =
    arrivingFrom === "arriving"
      ? "Come back to this screen when you are ready to leave to leave."
      : "Your payment is received.";

  const receiptText = totalCost
    ? `Total cost ${totalCost}`
    : "No payment required.";
  return (
    <>
      <h1>Thank you!</h1>
      <h2>{paymentText}</h2>
      <p>{explanationText}</p>
      {arrivingFrom === "leaving" && <p>{receiptText}</p>}
      <NavButton
        variant="primary"
        navTo={`/${paths.arrival}`}
        text="New parking"
      />
      <NavButton
        variant="primary"
        navTo={`/${paths.exit}`}
        text="End parking"
      />
    </>
  );
};

export default Confirmation;
