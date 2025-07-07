import { useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { DataContext } from "./context/DataContext.tsx";
import {
  floorData as floorDataMock,
  garageData as garageDataMock,
} from "./mockData/garage";
import Admin from "./pages/Admin/Admin.tsx";
import Arrival from "./pages/Arrival/Arrival.tsx";
import Confirmation from "./pages/Confirmation/Confirmation.tsx";
import Exit from "./pages/Exit/Exit.tsx";
import App from "./pages/Home/Home.tsx";
import NoAvailability from "./pages/NoAvailability/NoAvailability.tsx";
import paths from "./paths";
import type { Floor, Garage } from "./types/types.ts";

const RouteDefs = () => {
  const [garageData, setGarageData] = useState<Garage | null>(garageDataMock);
  const [floorData, setFloorData] = useState<Floor[] | []>(floorDataMock);

    const value = useMemo(
      () => ({ garageData, setGarageData, floorData, setFloorData }),
      [garageData, floorData]
    );

  return (
    <DataContext value={value}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
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

export default RouteDefs;
