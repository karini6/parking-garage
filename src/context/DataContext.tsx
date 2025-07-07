/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  useMemo,
  type ReactNode
} from "react";
import {
  floorData as floorDataMock,
  garageData as garageDataMock,
} from "../mockData/garage";
import type { Floor, Garage } from "../types/types";


type DataProviderType = {
  children: ReactNode;
};

type DataContextType = {
  garageData: Garage | null;
  setGarageData: React.Dispatch<React.SetStateAction<Garage | null>>;
  floorData: Floor[];
  setFloorData: React.Dispatch<React.SetStateAction<Floor[]>>;
};


const DataContext = createContext<DataContextType>({
  garageData: garageDataMock,
  setGarageData: () => {},
  floorData: floorDataMock,
  setFloorData: () => {},
});



const DataProvider = ({ children }: DataProviderType) => {

  const value = useMemo(
    () => ({ garageData: null, setGarageData: () => {}, floorData: [], setFloorData: () => {} }),
    []
  );

  return <DataContext value={value}>{children}</DataContext>;
};

export { DataContext, DataProvider };
