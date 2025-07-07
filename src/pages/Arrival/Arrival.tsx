import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import TextInput from "../../components/TextInput/Input";
import { floorOptions } from "../../mockData/floorOptions";
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

const Arrival = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState<ArrivalForm>(formInitialState);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      console.log("Selected floor:", event.target.value);
      setForm((prevForm) => ({
        ...prevForm,
        floor: event.target.value,
      }));
    };

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { arrivingFrom: "arriving" } }
      );
    };

    return (
      <>
        <h1>I'm arriving</h1>
        <form className="arrival-form">
          <div className="arrival-form__input-group">
            {/** In a real world scenario, the app would know which floor it is on, no need for user to provide this info  */}
            <Select
              name="Floor"
              label="Which floor are you on?"
              options={floorOptions}
              direction={Direction.column}
              required
              id="floor-select"
              aria-label="Select floor"
              value={form.floor}
              onChange={handleSelectChange}
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
              direction="column"
              required
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
      </>
    );}

export default Arrival;