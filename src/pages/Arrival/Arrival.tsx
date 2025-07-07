import { use, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import Select from "../../components/Select/Select";
import TextInput from "../../components/TextInput/Input";
import { DataContext } from "../../context/DataContext";
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
  const { setFloorData } = use(DataContext);
    const navigate = useNavigate();
    const [form, setForm] = useState<ArrivalForm>(formInitialState);

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
        registrationNumber: event.target.value,
      }));
    };

    const handleClick = (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const currentFloor = Number(form.floor);
      setFloorData((prevFloorData) =>
        prevFloorData.map((floor) =>
          floor.floorNumber === currentFloor
            ? {
                ...floor,
                availableSpots: floor.availableSpots - 1,
                occupiedSpots: floor.occupiedSpots + 1,
              }
            : floor
        )
      );
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