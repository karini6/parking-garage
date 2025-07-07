import { use } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/Input";
import { DataContext } from "../../context/DataContext";
import paths from "../../paths";
import { Direction, Variant } from "../../types/enums";

const Exit = () => {  
    const navigate = useNavigate();
    const { setFloorData } = use(DataContext);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const currentFloor = 2;
      setFloorData((prevFloorData) =>
        prevFloorData.map((floor) =>
          floor.floorNumber === currentFloor
            ? {
                ...floor,
                availableSpots: floor.availableSpots + 1,
                occupiedSpots: floor.occupiedSpots - 1,
              }
            : floor
        )
      );
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { from: "exiting" } }
      );
    };
  return (
    <>
      <form
        className="exit-form"
        onSubmit={handleSubmit}
        aria-label="Close parking form"
      >
        <h1>Close parking</h1>
        <TextInput
          id="regNumber"
          name="registration number"
          label="Registration number"
          ariaLabel="Registration number"
          placeholder="AB12345"
          type="text"
          direction={Direction.column}
          required
        />
        <Button text="End parking" type="submit" variant={Variant.primary} />
      </form>
    </>
  );
};

export default Exit;
