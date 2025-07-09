import { use, useState } from "react";
import Select from "../../components/Select/Select";
import { Direction } from "../../types/enums";
import type { Floor } from "../../types/types";

import NavButton from "../../components/NavButton/NavButton";
import { DataContext } from "../../context/DataContext";
import useFloorOptions from "../../hooks/useFloorOptions";
import paths from "../../paths";
import "./Admin.css";

const Admin = () => {
  const {floorData, garageData} = use(DataContext)
    const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
    const { floorSelectOptions } = useFloorOptions();

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = Number(event.target.value)
      const newFloor = floorData.find((floor) => floor.floorNumber === newValue) ?? null;
      setSelectedFloor(newFloor);
    };

    return (
      <>
        <NavButton text="Go back" navTo={paths.home} variant="tertiary" />
        <h1>Availability</h1>
        <div className="admin-container">
          <div className="info-wrapper garage-info">
            <h2>Garage in total</h2>
            <div className="data-item-wrapper">
              <p>Total available spots: </p>
              <p className="data-item">{garageData?.availableSpots}</p>
            </div>
            <div className="data-item-wrapper">
              <p>Total occupied spots: </p>
              <p className="data-item">{garageData?.occupiedSpots}</p>
            </div>
          </div>
          <div className="info-wrapper">
            {selectedFloor?.floorNumber ? (
              <h2>Per floor</h2>
            ) : (
              <h3>Floor {selectedFloor?.floorNumber}</h3>
            )}
            <Select
              name="Floor"
              label="Select floor"
              options={floorSelectOptions}
              direction={Direction.column}
              required
              id="floor-select"
              aria-label="Select floor"
              value={selectedFloor?.floorNumber?.toString()}
              onChange={handleSelectChange}
            />
            {selectedFloor && (
              <div className="floor-info">
                <div className="data-item-wrapper">
                  <p>Available spots: </p>
                  <p className="data-item">{selectedFloor?.availableSpots}</p>
                </div>
                <div className="data-item-wrapper">
                  <p>Occupied spots: </p>
                  <p className="data-item">{selectedFloor?.occupiedSpots}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default Admin;
