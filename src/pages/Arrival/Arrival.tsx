import { use, useState, type FormEvent, type ReactNode } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Message from "../../components/Message/Message";
import NavButton from "../../components/NavButton/NavButton";
import Select from "../../components/Select/Select";
import TextInput from "../../components/TextInput/Input";
import { DataContext } from "../../context/DataContext";
import useFloorOptions from "../../hooks/useFloorOptions";
import { garageData } from "../../mockData/garage";
import paths from "../../paths";
import { Direction, Variant } from "../../types/enums";
import "./Arrival.css";

type ArrivalForm = {
  floor: string;
  registrationNumber: string;
}

const formInitialState: ArrivalForm = {
  floor: "0",
  registrationNumber: "",
};

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

const Arrival = () => {
  const {
    handleNewParking,
    parkedVehiclesData,
  } = use(DataContext);
    const { floorSelectOptions } = useFloorOptions();
    const navigate = useNavigate();
    const [form, setForm] = useState<ArrivalForm>(formInitialState);
    const [infoMessage, setInfoMessage] =
      useState<InfoMessage>(initialInfoMessage);
      
    const handleFloorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setForm((prevForm) => ({
        ...prevForm,
        floor: event.target.value,
      }));
    };

    const handleRegNumberChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setForm((prevForm) => ({
        ...prevForm,
        registrationNumber: event.target.value.toUpperCase(),
      }));
      setInfoMessage({text: ""})
    };

   

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const regNumberRegEx = /^[A-Z]{2}\d{5}$/;
      const currentRegNumbers = parkedVehiclesData.map(
        (session) => session.vehicleRegistration
      );

      if (!regNumberRegEx.test(form?.registrationNumber)) {
        setInfoMessage({
          text: "Please enter a valid registration number.",
          variant: "info",
        });
        return;
      }

      if(currentRegNumbers.includes(form?.registrationNumber)) {
        setInfoMessage({text: "This vehicle is already parked.", action: 
          <NavButton
            variant="tertiary"
            text={`End parking for ${form.registrationNumber}`}
            navTo={`/${paths.exit}`}
          />
        });
        return;
      }

      if(!form.registrationNumber || !form.floor) {
        setInfoMessage({ text: "Please fill in all fields."});
        return;
      }
      setInfoMessage({text: ""});
      handleNewParking(Number(form.floor), form.registrationNumber);
      setForm(formInitialState);
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { arrivingFrom: "arriving", regNumber: form.registrationNumber } }
      );
    };

    return (
      <>
        <div style={{ minHeight: "15rem", boxSizing: "border-box" }}>
          <h1>Register new parking</h1>

          {infoMessage?.text && (
            <Message text={infoMessage?.text} action={infoMessage?.action} />
          )}
        </div>
        <form className="arrival-form">
          <div className="arrival-form__input-group">
            {/** In a real world scenario, the app would know which floor it is on, no need for user to provide this info  */}
            <Select
              name="Floor"
              label="Which floor are you on?"
              options={floorSelectOptions}
              direction={Direction.column}
              required
              id="floor-select"
              aria-label="Select floor"
              // value={form.floor}
              onChange={handleFloorChange}
            />
          </div>
          <div className="arrival-form__input-group">
            <TextInput
              id="regNumber"
              name="registration number"
              label="Registration number"
              ariaLabel="Registration number"
              placeholder="Enter registration number"
              type="text"
              direction={Direction.column}
              onChange={handleRegNumberChange}
              required
              value={form.registrationNumber}
            />
          </div>
          <div className="arrival-form__button-group">
            <Button
              text="Start parking"
              type="submit"
              variant={Variant.primary}
              handleClick={handleClick}
            />
          </div>
        </form>
        <div>
          <h2>Pricing</h2>
          <p>
            {`First hour: ${garageData.prices.firstHourRate} ${garageData.prices.currency}`}
          </p>
          <p>
            {`Second hour: ${garageData.prices.secondHourRate} ${garageData.prices.currency}`}
          </p>
          <p>{`Additional hours: ${garageData.prices.additionalHoursRate} ${garageData.prices.currency}`}</p>
        </div>
      </>
    );}

export default Arrival;