import {
  bg_left,
  bg_right,
  cn,
  flex,
  flex_1,
  h_2,
  w_full,
} from "@jonathanconway/tailwindjs";

export const container = () => `
  relative
  lowercase
  py-2
  group
`;

export const text = () => `
  text-lg
  px-2
`;

export const activeIndicator = cn(w_full, flex, h_2);

export const activeIndicatorLeft = cn(flex_1, bg_left, h_2);

export const activeIndicatorRight = cn(flex_1, bg_right, h_2);
