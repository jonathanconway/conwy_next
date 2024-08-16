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
  text_stone_50,
  text_stone_400,
  text_stone_500,
  text_stone_950,
  text_xs,
  underline,
  uppercase,
} from "@jonathanconway/tailwindjs";

import { text } from "@/components/text/text.styles";

import * as listItemStyles from "../../list-item/list-item.styles";

export const container = cn(
  listItemStyles.container,
  text_stone_950,
  dark(text_stone_50),
  hover(text_stone_950),
  hover(dark(text_stone_50)),
);

export const mainColumn = listItemStyles.mainColumn;

export const asideColumn = listItemStyles.asideColumn;

export const image = cn(rounded_md, h_14);

export const title = cn(font_bold, group(hover.name, underline));

export const subTitle = cn(text_xs, font_bold, group(hover.name, underline));

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
