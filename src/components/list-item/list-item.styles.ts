import {
  bg_stone_200,
  bg_stone_800,
  cn,
  dark,
  flex,
  flex_1,
  flex_col,
  flex_row,
  gap_1_5,
  gap_3,
  gap_4,
  hidden,
  hover,
  mb_3,
  md,
  min_h_40,
  overflow_hidden,
  relative,
  w_24,
  w_44,
  w_72,
  w_arb,
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

export const mainColumn = cn(flex, flex_col, flex_1, gap_1_5, overflow_hidden);

export const asideColumn = cn(flex, w_arb("4rem"), flex_col, gap_3);
