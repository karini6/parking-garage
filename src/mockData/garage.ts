import type { Floor, Garage } from "../types/types";

export const floorData: Floor[] = [
  {
    id: "floor-1",
    garageId: "garage-1",
    floorNumber: 1,
    totalSpots: 200,
    availableSpots: 0,
    occupiedSpots: 200,
  },
  {
    id: "floor-2",
    garageId: "garage-1",
    floorNumber: 2,
    totalSpots: 200,
    availableSpots: 20,
    occupiedSpots: 180,
  },
  {
    id: "floor-3",
    garageId: "garage-1",
    floorNumber: 3,
    totalSpots: 200,
    availableSpots: 30,
    occupiedSpots: 170,
  },
  {
    id: "floor-4",
    garageId: "garage-1",
    floorNumber: 4,
    totalSpots: 200,
    availableSpots: 40,
    occupiedSpots: 160,
  },
  {
    id: "floor-5",
    garageId: "garage-1",
    floorNumber: 5,
    totalSpots: 200,
    availableSpots: 50,
    occupiedSpots: 150,
  },
];

export const garageData: Garage = {
  id: "garage-1",
  name: "DNB Parking Garage",
  address: "Dronning Eufemias gate 1, 0191 Oslo, Norway",
  floorsAmount: 5,
  floors: floorData,
  totalSpots: 1000,
  availableSpots: 850,
  occupiedSpots: 150,
  firstHourRate: 2.0,
  secondHourRate: 1.5,
  additionalHoursRate: 1.0,
  currency: "NOK",
} as const;
