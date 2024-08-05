import {
  absolute,
  bottom_3,
  cn,
  dark,
  flex,
  flex_col,
  font_bold,
  font_medium,
  gap_3,
  group,
  h_14,
  hover,
  inline_block,
  right_3,
  rounded_md,
  text_sm,
  text_stone_400,
  text_stone_500,
  text_xs,
  underline,
  uppercase,
  w_16,
} from "tailwindjs";

import * as listItemStyles from "../../list-item/list-item.styles";

export const container = listItemStyles.container;

export const mainColumn = listItemStyles.mainColumn;

export const asideColumn = cn(w_16, flex, flex_col, gap_3);

export const image = cn(rounded_md, h_14, text_stone_400, dark(text_stone_500));

export const title = cn(font_bold, group(hover, underline));

export const date = cn(text_xs);

export const blurb = cn(text_sm);

export const type = cn(
  absolute,
  inline_block,
  text_xs,
  text_stone_400,
  dark(text_stone_500),
  font_medium,
  uppercase,
  bottom_3,
  right_3,
);
