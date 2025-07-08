export type ButtonVariant = {
  primary: "primary";
  secondary: "secondary";
  tertiary: "tertiary";
};
export type Direction = { column: "column"; row: "row" };

export type SelectOption = {
  value: string | number;
  label: string;
  disabled?: boolean;
  disabledText?: string;
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
  prices: PriceModel;
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
  slotId?: string;
  vehicleRegistration: string;
  startTime: Date;
  endTime?: Date;
  totalCost?: number;
  floorId: number;
};

export type Floor = {
  id: string;
  garageId: string;
  floorNumber: number;
  totalSpots: number;
  availableSpots: number;
  occupiedSpots: number;
};

export type PriceModel = {
  firstHourRate: number;
  secondHourRate: number;
  additionalHoursRate: number;
  firstHourMinuteRate?: number;
  secondHourMinuteRate?: number;
  additionalMinutesRate?: number;
  currency: string;
};
