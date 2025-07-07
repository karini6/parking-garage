export type ButtonVariant = {
  primary: "primary";
  secondary: "secondary";
};
export type Direction = { column: "column"; row: "row" };

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
};

export type Garage = {
  id: string;
  name: string;
  address: string;
  floorsAmount: number;
  floors: Floor[];
  totalSpots: number;
  availableSpots: number;
  occupiedSpots: number;
  firstHourRate: number;
  secondHourRate: number;
  additionalHoursRate: number;
  currency: string;
};

export type ParkingSlot = {
  id: string;
  garageId: string;
  floor: number;
  slotNumber: string;
  status: "occupied" | "available";
};

export type ParkingSession = {
  id: string;
  slotId: string;
  vehicleRegistration: string;
  startTime: Date;
  endTime?: Date;
  totalCost?: number;
};

export type Floor = {
  id: string;
  garageId: string;
  floorNumber: number;
  totalSpots: number;
  availableSpots: number;
  occupiedSpots: number;
};
