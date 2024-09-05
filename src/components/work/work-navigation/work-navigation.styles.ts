import {
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_300,
  border_stone_700,
  cn,
  dark,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_bold,
  gap_1,
  gap_2,
  gap_4,
  group_name,
  hover,
  justify_center,
  opacity_50,
  overflow_hidden,
  p_1,
  relative,
  rounded_md,
  text_sm,
  text_stone_50,
  text_stone_950,
  underline,
  w_52,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../../label/label.styles";
import * as listItemStyles from "../../list-item/list-item.styles";

export const workNavigationContainer = cn(flex, flex_row, gap_2);

export const containerEmpty = cn(
  rounded_md,

  w_52,

  p_1,

  bg_stone_200,
  dark(bg_stone_800),
  opacity_50,
);

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
