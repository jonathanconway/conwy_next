import {
  border,
  border_red_100,
  cn,
  flex_1,
  inline_flex,
  items_center,
  justify_center,
  p_2,
  z_50,
} from "@jonathanconway/tailwindjs";

export const childrenContainer = cn(
  inline_flex,
  flex_1,
  justify_center,
  items_center,
  border,
  border_red_100,
);

export const tooltip = cn(p_2, z_50);
