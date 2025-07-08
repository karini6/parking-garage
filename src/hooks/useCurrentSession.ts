import { use } from "react";
import { DataContext } from "../context/DataContext";

const useCurrentSession = (regNumber?: string) => {
  const { parkedVehiclesData } = use(DataContext);

  const currentParkingSession = parkedVehiclesData.find(
    (vehicle) => vehicle.vehicleRegistration === regNumber
  );

  return {
    currentParkingSession,
  };
};

export default useCurrentSession;
