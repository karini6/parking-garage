import type { ButtonVariant, Direction as DirectionType } from "./types";

export const Variant: ButtonVariant = {
  primary: "primary",
  secondary: "secondary",
} as const;
export type VariantType = (typeof Variant)[keyof typeof Variant];

export const Direction: DirectionType = {
  column: "column",
  row: "row",
} as const;
