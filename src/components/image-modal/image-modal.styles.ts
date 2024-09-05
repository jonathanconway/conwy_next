import {
  absolute,
  before,
  bg_black,
  bg_stone_500,
  bg_stone_700,
  bg_white,
  border,
  border_2,
  border_4,
  border_black,
  border_gray_600,
  border_stone_300,
  border_stone_700,
  border_yellow_200,
  border_yellow_400,
  bottom_0,
  cn,
  content_arb,
  dark,
  fixed,
  flex,
  flex_col,
  flex_row,
  font_bold,
  gap_2,
  gap_4,
  gap_6,
  gap_8,
  h_5,
  h_6,
  h_7,
  h_8,
  inline_block,
  inline_flex,
  items_center,
  justify_center,
  leading_6,
  left_0,
  left_2,
  left_3,
  left_4,
  left_5,
  left_6,
  left_7,
  left_8,
  list_decimal,
  m_4,
  m_auto,
  marker,
  mt_4,
  neg,
  p_1_5,
  p_4,
  pl_2,
  pl_4,
  pt_0_5,
  pt_1,
  relative,
  right_0,
  rounded,
  rounded_full,
  rounded_lg,
  shadow,
  shadow_md,
  text_black,
  text_sm,
  text_white,
  text_xl,
  top_0,
  top_0_5,
  top_1,
  top_2,
  w_5,
  w_6,
  w_7,
  w_8,
  w_60,
  w_arb,
  z_0,
  z_10,
} from "@jonathanconway/tailwindjs";

export const imageModalBackdrop = cn(
  fixed,
  flex,
  top_0,
  bottom_0,
  left_0,
  right_0,
  z_0,
  `bg-black/50`,
  // `${bg_black}/${_25}`, // todo : add _25 to tailwindjs
);

export const imageModal = cn(
  relative,

  flex,
  flex_col,
  gap_4,

  z_10,
  m_auto,
  p_4,

  rounded_lg,
  bg_white,
  dark(bg_black),
  border,
  border_gray_600,
);

export const imageModalHeader = cn();

export const imageModalTitle = cn(text_xl, font_bold);

export const imageModalButtonsContainer = cn(
  absolute,

  m_4,
  top_0,
  right_0,

  flex,
  gap_2,
);

export const imageModalCloseButton = cn(
  rounded,
  inline_block,
  w_6,
  h_6,
  leading_6,
  text_sm,
  border,
  border_black,
  text_black,
);

export const imageModalMain = cn(flex, flex_row, gap_8);

export const imageContainer = cn(relative);

export const image = cn(
  w_arb("600px"),

  p_1_5,

  rounded_lg,
  border_2,
  border_stone_300,
  dark(border_stone_700),
  bg_white,
  dark(bg_black),
);

export const noteHotspot = cn(
  text_sm,
  absolute,

  bg_stone_700,
  border_yellow_400,
  border_2,
  shadow,
  shadow_md,

  w_6,
  h_6,
  rounded_full,
  inline_flex,
  items_center,
  justify_center,

  text_white,
  font_bold,
);

export const notesContainer = cn(pl_4, flex, flex_col, gap_4, w_60);

export const noteText = cn(text_sm, pl_2, relative, pt_0_5);

export const noteNumber = cn(
  absolute,
  neg(left_7),
  neg(top_0_5),

  bg_stone_700,
  border_yellow_400,
  border_2,
  shadow,
  shadow_md,

  w_6,
  h_6,
  rounded_full,
  inline_flex,
  items_center,
  justify_center,

  font_bold,
  text_white,
  text_sm,
);
