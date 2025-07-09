import type { Floor, Garage, ParkingSession, PriceModel } from "../types/types";

export const parkedVehiclesData: ParkingSession[] = [
  {
    id: "session-1",
    slotId: "slot-1",
    vehicleRegistration: "AB12345",
    startTime: new Date("2025-07-09T09:12:58Z"),
    floorId: 1,
  },
  {
    id: "session-2",
    slotId: "slot-2",
    vehicleRegistration: "CD12345",
    startTime: new Date("2025-07-09T08:00:00Z"),
    floorId: 2,
  },
  {
    id: "session-3",
    slotId: "slot-3",
    vehicleRegistration: "EF12345",
    startTime: new Date("2025-07-09T09:30:00Z"),
    floorId: 3,
  },
  {
    id: "session-4",
    slotId: "slot-4",
    vehicleRegistration: "GH12345",
    startTime: new Date("2025-07-09T10:00:00Z"),
    floorId: 4,
  },
  {
    id: "session-5",
    slotId: "slot-5",
    vehicleRegistration: "DE12345",
    startTime: new Date("2025-07-09T10:00:00Z"),
    floorId: 5,
  },
];

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
export const priceData: PriceModel = {
  firstHourRate: 50,
  secondHourRate: 30,
  additionalHoursRate: 10,
  firstHourMinuteRate: 0.9,
  secondHourMinuteRate: 0.5,
  additionalMinutesRate: 0.2,
  currency: "NOK",
};

export const garageData: Garage = {
  id: "garage-1",
  name: "DNB Parking Garage",
  address: "Dronning Eufemias gate 1, 0191 Oslo, Norway",
  floorsAmount: 5,
  floors: floorData,
  totalSpots: 1000,
  availableSpots: 860,
  occupiedSpots: 140,
  prices: priceData,
} as const;
