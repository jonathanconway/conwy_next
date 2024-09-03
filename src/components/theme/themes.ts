import { TypeOfConst } from "@/framework";

export const THEMES = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type Theme = TypeOfConst<typeof THEMES>;
