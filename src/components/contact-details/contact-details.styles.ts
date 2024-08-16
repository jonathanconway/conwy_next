import {
  cn,
  flex,
  flex_col,
  flex_row,
  gap_1,
  gap_3,
  inline_flex,
  items_center,
  mt_4,
  text_sm,
} from "@jonathanconway/tailwindjs";

export const container = cn(mt_4, flex, flex_col, gap_3, text_sm);

export const link = cn(inline_flex, flex_row, items_center, gap_1);
