import {
  cn,
  flex,
  flex_row,
  gap_6,
  items_center,
  justify_between,
  pt_8,
  py_8,
  w_arb,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  flex,
  flex_row,
  pt_8,
  items_center,
  justify_between,
);

export const navsContainer = cn(flex, flex_row, gap_6);
