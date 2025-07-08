import type { ButtonVariant, Direction as DirectionType } from "./types";

export const Variant: ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
} as const;

export const Direction: DirectionType = {
  column: "column",
  row: "row",
} as const;
