/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useMemo,
  type ReactNode
} from "react";
import {
  floorData as floorDataMock,
  garageData as garageDataMock,
  priceData as priceDataMock,
} from "../mockData/garage";
import type { Floor, Garage, ParkingSession, PriceModel } from "../types/types";


type DataProviderType = {
  children: ReactNode;
};

type DataContextType = {
  garageData: Garage | null;
  floorData: Floor[];
  parkedVehiclesData: ParkingSession[];
  priceData: PriceModel;
  handleParkingEnd: (currentFloor: number, regNumber: string) => void;
  handleNewParking: (currentFloor: number, regNumber: string) => void;
};


const DataContext = createContext<DataContextType>({
  garageData: garageDataMock,
  floorData: floorDataMock,
  parkedVehiclesData: [],
  priceData: priceDataMock,
  handleParkingEnd: () => {},
  handleNewParking: () => {},
});



const DataProvider = ({ children }: DataProviderType) => {

  const value = useMemo(
    () => ({
      garageData: null,
      floorData: [],
      parkedVehiclesData: [],
      priceData: priceDataMock,
      setPriceData: () => {},
      handleParkingEnd: () => {},
      handleNewParking: () => {},
    }),
    []
  );

  return <DataContext value={value}>{children}</DataContext>;
};

export { DataContext, DataProvider };
