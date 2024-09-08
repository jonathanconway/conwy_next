import {
  bg_blue_100,
  bg_stone_100,
  bg_stone_700,
  bg_stone_900,
  bg_white,
  cn,
  dark,
  flex,
  flex_col,
  flex_row,
  gap_16,
  h_screen,
  overflow_y_visible,
  relative,
  selection,
  sm,
} from "@jonathanconway/tailwindjs";

import * as textStyles from "../../text/text.mixin.styles";

export const html = cn(bg_stone_900, dark(bg_white), h_screen);

export const bodyBackground = cn(bg_stone_100, dark(bg_stone_900));

export const body = cn(
  textStyles.text,

  relative,
  overflow_y_visible,

  h_screen,

  flex,
  flex_col,
  sm(flex_row),
  gap_16,

  bodyBackground,

  selection(bg_blue_100),
  dark(selection(bg_stone_700)),
);
