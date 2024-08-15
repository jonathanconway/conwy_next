import {
  border_2,
  border_b,
  border_stone_300,
  border_stone_700,
  border_stone_900,
  cn,
  dark,
  flex,
  flex_row,
  gap_6,
  items_start,
  leading_8,
  max_w_96,
  md,
  mt_4,
  my_10,
  pb_10,
  rounded_full,
  w_3_on_5,
  w_4_on_5,
  w_14,
} from "@jonathanconway/tailwindjs";

export const container = cn(
  my_10,

  flex,
  flex_row,
  gap_6,
  items_start,
  pb_10,

  border_b,
  border_stone_300,
  dark(border_stone_700),
);

export const fragmentWrapper = cn(w_4_on_5, md(w_3_on_5), max_w_96, leading_8);

export const face = cn(
  w_14,
  rounded_full,
  border_2,
  border_stone_900,
  dark(border_stone_700),
  mt_4,
);
