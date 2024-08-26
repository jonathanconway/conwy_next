import {
  absolute,
  bg_black,
  bg_white,
  border,
  border_2,
  border_black,
  border_gray_600,
  border_stone_300,
  bottom_0,
  cn,
  dark,
  fixed,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_bold,
  gap_2,
  gap_4,
  h_3_on_4,
  h_6,
  h_96,
  inline_block,
  leading_6,
  left_0,
  left_2,
  m_auto,
  max_w_arb,
  p_1_5,
  p_2,
  p_4,
  relative,
  right_0,
  right_1_5,
  right_2,
  rounded,
  rounded_lg,
  text_black,
  text_sm,
  text_xl,
  top_0,
  top_1_5,
  top_2,
  w_3_on_4,
  w_6,
  w_96,
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
  `bg-black/25`,
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
  border,
  border_gray_600,
);

export const imageModalHeader = cn();

export const imageModalTitle = cn(text_xl, font_bold);

export const imageModalCloseButton = cn(
  absolute,
  rounded,
  inline_block,
  top_2,
  right_2,
  w_6,
  h_6,
  leading_6,
  text_sm,
  border,
  border_black,
  text_black,
);

export const imageModalMain = cn(flex, flex_row, gap_4);

export const image = cn(
  rounded_lg,
  p_1_5,
  border_2,
  border_stone_300,
  bg_white,
  dark(bg_black),
);

export const notesContainer = cn();
