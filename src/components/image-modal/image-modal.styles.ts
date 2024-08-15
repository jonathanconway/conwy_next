import {
  bg_black,
  bg_white,
  border,
  border_black,
  border_gray_600,
  bottom_0,
  cn,
  fixed,
  flex,
  h_6,
  h_96,
  inline_block,
  leading_6,
  left_0,
  left_2,
  m_auto,
  relative,
  right_0,
  rounded,
  rounded_lg,
  text_black,
  text_sm,
  top_0,
  top_2,
  w_6,
  w_96,
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
  // `${bg_black}/${25}`,
);

export const imageModal = cn(
  relative,
  rounded_lg,
  bg_white,
  border,
  border_gray_600,
  z_10,
  w_96,
  h_96,
  m_auto,
);

export const imageModalCloseButton = cn(
  rounded,
  inline_block,
  top_2,
  left_2,
  w_6,
  h_6,
  leading_6,
  text_sm,
  border,
  border_black,
  text_black,
);
