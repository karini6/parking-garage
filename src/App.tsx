import { useCallback, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { DataContext } from "./context/DataContext.tsx";
import usePaymentData from "./hooks/usePaymentData.ts";
import {
  floorData as floorDataMock,
  garageData as garageDataMock,
  parkedVehiclesData as parkedVehiclesDataMock,
  priceData as priceDataMock,
} from "./mockData/garage.ts";
import Admin from "./pages/Admin/Admin.tsx";
import Arrival from "./pages/Arrival/Arrival.tsx";
import Confirmation from "./pages/Confirmation/Confirmation.tsx";
import Exit from "./pages/Exit/Exit.tsx";
import Home from "./pages/Home/Home.tsx";
import NoAvailability from "./pages/NoAvailability/NoAvailability.tsx";
import paths from "./paths.ts";
import type { Floor, Garage, ParkingSession } from "./types/types.ts";

const App = () => {
  const [garageData, setGarageData] = useState<Garage | null>(garageDataMock);
  const [floorData, setFloorData] = useState<Floor[] | []>(floorDataMock);
  const [parkedVehiclesData, setParkedVehiclesData] = useState<
    ParkingSession[]
  >(parkedVehiclesDataMock);
  const { getTotalCost } = usePaymentData();


  const handleNewParking = useCallback(
    (currentFloor: number, regNumber: string) => {
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
      setParkedVehiclesData((prevVehiclesData) => [
        ...prevVehiclesData,
        {
          id: `session-${prevVehiclesData.length + 1}`,
          vehicleRegistration: regNumber,
          startTime: new Date(),
          floorId: currentFloor,
        },
      ]);
      setGarageData((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          availableSpots: prevState.availableSpots--,
          occupiedSpots: prevState.occupiedSpots++,
        };
      });
    },
    []
  );
    

  const handleParkingEnd = useCallback(
    (floorId: number, regNumber: string) => {
      const endTime = new Date();
      setFloorData((prevFloorData) =>
        prevFloorData.map((floor) =>
          floor.floorNumber === floorId
            ? {
                ...floor,
                availableSpots: floor.availableSpots + 1,
                occupiedSpots: floor.occupiedSpots - 1,
              }
            : floor
        )
      );
      setParkedVehiclesData((prevVehiclesData) =>
        prevVehiclesData.map((session) =>
          session.vehicleRegistration === regNumber
            ? {
                ...session,
                endTime,
                totalCost: getTotalCost(session.startTime, endTime),
              }
            : session
        )
      );
      setGarageData((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          availableSpots: prevState.availableSpots++,
          occupiedSpots: prevState.occupiedSpots--
        };
      });
    },
    [getTotalCost]
  );

    const value = useMemo(
      () => ({
        garageData,
        floorData,
        parkedVehiclesData,
        priceData: priceDataMock,
        handleNewParking,
        handleParkingEnd,
      }),
      [garageData, floorData, parkedVehiclesData, handleNewParking, handleParkingEnd]
    );

  return (
    <DataContext value={value}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path={paths.arrival} element={<Arrival />} />
          <Route path={paths.exit} element={<Exit />} />
          <Route path={paths.admin} element={<Admin />} />
          <Route path={paths.confirmation} element={<Confirmation />} />
          <Route path={paths.NoAvailability} element={<NoAvailability />} />
        </Routes>
      </BrowserRouter>
    </DataContext>
  );
};

export default App;
