import { BrowserRouter, Route, Routes } from "react-router";
import Admin from "./pages/Admin/Admin.tsx";
import Arrival from "./pages/Arrival/Arrival.tsx";
import Confirmation from "./pages/Confirmation/Confirmation.tsx";
import Exit from "./pages/Exit/Exit.tsx";
import App from "./pages/Home/Home.tsx";
import NoAvailability from "./pages/NoAvailability/NoAvailability.tsx";
import paths from "./paths";



const RouteDefs = () => {
  return (
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
  );
};

export default RouteDefs;