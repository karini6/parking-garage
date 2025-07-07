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
