import {
  absolute,
  bottom_3,
  cn,
  dark,
  font_bold,
  font_medium,
  group,
  h_14,
  hover,
  inline_block,
  leading_5,
  right_3,
  rounded_md,
  text_sm,
  text_stone_400,
  text_stone_500,
  text_xs,
  underline,
  uppercase,
} from "@jonathanconway/tailwindjs";

import * as listItemStyles from "../../list-item/list-item.styles";

export const container = cn(listItemStyles.container);

export const mainColumn = listItemStyles.mainColumn;

export const asideColumn = listItemStyles.asideColumn;

export const image = cn(rounded_md, h_14);

export const title = cn(font_bold, group(hover.name, underline));

export const date = text_xs;

export const blurb = cn(text_xs, leading_5);

export const type = cn(
  absolute,

  inline_block,

  bottom_3,
  right_3,

  text_xs,
  text_stone_400,
  dark(text_stone_500),
  font_medium,
  uppercase,
);
