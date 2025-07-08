import { use } from "react";
import { DataContext } from "../context/DataContext";

const useFloorOptions = () => {
  const { floorData } = use(DataContext);

  const defaultOption = {
    value: "0",
    label: "None selected",
  };

  const floors = floorData.map((opt, idx) => ({
    value: opt.floorNumber,
    label: `Floor ${opt.floorNumber}`,
    disabled: floorData[idx].availableSpots === 0 ? true : false,
    disabledText: floorData[idx].availableSpots === 0 ? "Full" : "",
  }));
  const floorSelectOptions = [defaultOption, ...floors];
  return { floorSelectOptions };
};

export default useFloorOptions;
