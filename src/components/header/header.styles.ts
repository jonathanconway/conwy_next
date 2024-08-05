import {
  cn,
  flex,
  flex_row,
  gap_6,
  items_center,
  justify_between,
  py_8,
  w_arb,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  flex,
  flex_row,
  py_8,
  items_center,
  justify_between,
);

export const navsContainer = cn(flex, flex_row, gap_6);
