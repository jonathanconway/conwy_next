import {
  cn,
  dark,
  flex,
  flex_row,
  gap_2,
  hover,
  justify_end,
  size_4,
  text_stone_300,
  text_stone_400,
  text_stone_500,
  text_stone_600,
} from "@jonathanconway/tailwindjs";

import * as iconStyles from "../icon/icon.styles";

export const container = () => cn(flex, flex_row, gap_2, justify_end);

export const icon = () =>
  cn(
    iconStyles.iconSvgBase,
    size_4,
    text_stone_400,
    dark(text_stone_500),
    hover(text_stone_600),
    hover(dark(text_stone_300)),
  );
