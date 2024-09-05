import {
  cn,
  dark,
  flex,
  flex_row,
  gap_2,
  hover,
  items_start,
  justify_end,
  size_4,
  text_stone_300,
  text_stone_400,
  text_stone_500,
  text_stone_600,
} from "@jonathanconway/tailwindjs";

export const container = cn(flex, items_start, flex_row, gap_2, justify_end);

export const icon = cn(
  size_4,

  text_stone_400,
  hover(text_stone_600),

  dark(text_stone_500),
  hover(dark(text_stone_300)),
);
