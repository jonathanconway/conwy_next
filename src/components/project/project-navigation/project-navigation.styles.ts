import {
  absolute,
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_300,
  border_stone_700,
  bottom_3,
  cn,
  dark,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_bold,
  font_medium,
  gap_1,
  gap_2,
  gap_4,
  group_name,
  hover,
  inline_block,
  justify_center,
  leading_5,
  overflow_hidden,
  p_1,
  relative,
  right_3,
  rounded_md,
  text_ellipsis,
  text_stone_50,
  text_stone_400,
  text_stone_500,
  text_stone_950,
  text_xs,
  underline,
  uppercase,
  w_40,
  w_52,
  w_72,
  whitespace_nowrap,
} from "@jonathanconway/tailwindjs";
import { text_sm } from "@jonathanconway/tailwindjs";

import * as labelStyles from "../../label/label.styles";
import * as linkStyles from "../../link/link.styles";
import * as listItemStyles from "../../list-item/list-item.styles";

export const projectNavigationContainer = cn(flex, flex_row, gap_2);

export const container = cn(
  rounded_md,
  border,
  border_stone_300,
  dark(border_stone_700),
  relative,

  w_52,

  flex,
  flex_row,
  gap_4,

  hover(bg_stone_200),
  hover(dark(bg_stone_800)),

  p_1,

  text_stone_950,
  dark(text_stone_50),
  hover(text_stone_950),
  hover(dark(text_stone_50)),
);

export const mainColumn = cn(
  flex,
  flex_col,
  flex_1,
  gap_1,
  justify_center,
  overflow_hidden,
);

export const asideColumn = listItemStyles.asideColumn;

export const label = labelStyles.label;

// export const image = cn(rounded_md);

export const title = cn(font_bold, group_name(hover.name, underline), text_sm);

// export const subTitle = cn(
//   text_xs,
//   font_bold,
//   group_name(hover.name, underline),
// );

// export const date = text_xs;

// export const blurb = cn(text_sm, leading_5);

// export const techs = cn(
//   text_xs,
//   leading_5,
//   whitespace_nowrap,
//   overflow_hidden,
//   text_ellipsis,
// );

// export const type = cn(
//   absolute,

//   inline_block,

//   bottom_3,
//   right_3,

//   text_xs,
//   text_stone_400,
//   dark(text_stone_500),
//   font_medium,
//   uppercase,
// );
