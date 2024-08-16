import {
  bg_stone_200,
  bg_stone_800,
  cn,
  dark,
  flex,
  flex_col,
  flex_row,
  gap_1_5,
  gap_3,
  gap_4,
  hidden,
  hover,
  md,
  min_h_40,
  relative,
  w_24,
  w_44,
  w_72,
} from "@jonathanconway/tailwindjs";

import * as boxStyles from "../box/box.styles";

export const container = cn(
  relative,

  w_72,

  boxStyles.container,

  flex,
  flex_row,
  gap_4,

  hover(bg_stone_200),
  hover(dark(bg_stone_800)),
);

export const mainColumn = cn(w_44, flex, flex_col, gap_1_5);

export const asideColumn = cn(flex, w_24, flex_col, gap_3);
