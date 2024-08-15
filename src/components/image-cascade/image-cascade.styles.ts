import {
  absolute,
  bg_black,
  bg_white,
  border,
  border_black,
  border_blue_500,
  border_gray_600,
  bottom_0,
  cn,
  cursor_pointer,
  dark,
  flex,
  gap_2,
  h_6,
  h_40,
  h_arbitrary,
  hover,
  inline_block,
  inline_flex,
  items_center,
  justify_center,
  leading_6,
  left_0,
  left_arbitrary,
  order_1,
  overflow_hidden,
  relative,
  rounded,
  rounded_lg,
  text_black,
  text_blue_500,
  text_sm,
  top_0,
  top_arbitrary,
  w_6,
  w_arbitrary,
} from "@jonathanconway/tailwindjs";

export const imageCascade = cn(rounded_lg, border, border_gray_600);

export const container = cn(relative, h_40);

export const imageBase = cn(
  absolute,
  w_arbitrary("40%"),
  h_arbitrary("70%"),
  bg_white,
  dark(bg_black),
  border,
  border_gray_600,
  rounded,
  flex,
  items_center,
  justify_center,
  overflow_hidden,
  cursor_pointer,
);

export const image1 = cn(imageBase, left_0, top_0);

export const image2 = cn(
  imageBase,
  left_arbitrary("20%"),
  top_arbitrary("10%"),
);

export const image3 = cn(
  imageBase,
  left_arbitrary("40%"),
  top_arbitrary("20%"),
);

export const image4 = cn(
  imageBase,
  left_arbitrary("60%"),
  top_arbitrary("30%"),
  order_1,
);

export const images = [image1, image2, image3, image4];

export const imagesNav = cn(absolute, left_0, bottom_0, inline_flex, gap_2);

export const imagesNavButton = cn(
  rounded,
  inline_block,
  w_6,
  h_6,
  leading_6,
  text_sm,
  border,
  border_black,
  text_black,
  hover(border_blue_500),
  hover(text_blue_500),
);
