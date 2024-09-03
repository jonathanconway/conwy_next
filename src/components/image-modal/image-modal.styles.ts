import {
  absolute,
  bg_black,
  bg_white,
  border,
  border_2,
  border_black,
  border_gray_600,
  border_stone_300,
  border_stone_700,
  bottom_0,
  cn,
  dark,
  fixed,
  flex,
  flex_col,
  flex_row,
  font_bold,
  gap_2,
  gap_4,
  h_6,
  inline_block,
  leading_6,
  left_0,
  m_4,
  m_auto,
  p_1_5,
  p_4,
  relative,
  right_0,
  rounded,
  rounded_lg,
  text_black,
  text_sm,
  text_xl,
  top_0,
  w_6,
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

export const imageModalMain = cn(flex, flex_row, gap_4);

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

export const notesContainer = cn();
