import { useState } from "react";
import Select from "../../components/Select/Select";
import { floorOptions } from "../../mockData/floorOptions";
import { floorData, garageData } from "../../mockData/garage";
import { Direction } from "../../types/enums";
import type { Floor } from "../../types/types";

import "./Admin.css";

const Admin = () => {
    const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = Number(event.target.value)
      const newFloor = floorData.find((floor) => floor.floorNumber === newValue) ?? null;
      setSelectedFloor(newFloor);
    };

    return (
      <>
        <h1>Availability overview</h1>
        <div className="admin-container">
          <div className="info-wrapper garage-info">
            <h2>Garage Information</h2>
            <div className="data-item-wrapper">
              <p>
                Total available spots:{" "}
                <p className="data-item">{garageData?.availableSpots}</p>
              </p>
            </div>
            <div className="data-item-wrapper">
              <p>
                Total occupied spots:{" "}
                <p className="data-item">{garageData?.occupiedSpots}</p>
              </p>
            </div>
          </div>
          <div className="info-wrapper">
            <h2>Floor {selectedFloor?.floorNumber} Information</h2>
            <Select
              name="Floor"
              label="Select floor"
              options={floorOptions}
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
                  <p>
                    Available spots:{" "}
                    <p className="data-item">{selectedFloor?.availableSpots}</p>
                  </p>
                </div>
                <div className="data-item-wrapper">
                  <p>
                    Occupied spots:{" "}
                    <p className="data-item">{selectedFloor?.occupiedSpots}</p>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
}

export default Admin;
