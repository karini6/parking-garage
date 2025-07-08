 
 
import { use, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Message from "../../components/Message/Message";
import TextInput from "../../components/TextInput/Input";
import { DataContext } from "../../context/DataContext";
import useCurrentSession from "../../hooks/useCurrentSession";
import paths from "../../paths";
import { Direction, Variant } from "../../types/enums";

type InfoMessage = {
  text: string;
  variant?: "info" | "warning" | "error" | "success";
  action?: ReactNode;
}

const initialInfoMessage: InfoMessage = {
  text: "",
  variant: undefined,
  action: undefined,
};

const Exit = () => {  
    const navigate = useNavigate();
    const { handleParkingEnd } = use(DataContext);
    const [regNumber, setRegNumber] = useState<string>("");
    const [infoMessage, setInfoMessage] =
          useState<InfoMessage>(initialInfoMessage);
    const { currentParkingSession } = useCurrentSession(regNumber);
    const handleRegNumberChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRegNumber(event.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setInfoMessage({text: ""})
      if (!currentParkingSession) {
        setInfoMessage({
          text: "Could not find a parking under this registration number.",
          variant: "info",
        });
        return;
      }
      handleParkingEnd(currentParkingSession?.floorId,
        currentParkingSession?.vehicleRegistration
      );
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { arrivingFrom: "leaving", regNumber: regNumber } }
      );
    };
  return (
    <>
      <div style={{ minHeight: "20rem", boxSizing: "border-box" }}>
        <h1>Close parking</h1>
        {infoMessage?.text && <Message text={infoMessage?.text} />}
      </div>
      <form
        className="exit-form"
        onSubmit={handleSubmit}
        aria-label="Close parking form"
      >
        <TextInput
          id="regNumber"
          name="registration number"
          label="Registration number"
          ariaLabel="Registration number"
          placeholder="AB12345"
          type="text"
          direction={Direction.column}
          required
          onChange={handleRegNumberChange}
        />
        <Button text="End parking" type="submit" variant={Variant.primary} />
      </form>
    </>
  );
};

export default Exit;
