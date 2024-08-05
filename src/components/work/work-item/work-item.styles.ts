import {
  absolute,
  bg_black,
  bg_white,
  border,
  cn,
  dark,
  flex,
  flex_col,
  flex_row,
  font_semibold,
  gap_2,
  gap_4,
  gap_10,
  grow,
  h_40,
  h_arbitrary,
  items_center,
  justify_center,
  left_0,
  left_arbitrary,
  mt_0,
  mt_1,
  mt_2,
  relative,
  rounded,
  text_sm,
  text_xs,
  top_0,
  top_arbitrary,
  w_1_2nd,
  w_arbitrary,
  whitespace_pre_line,
} from "tailwindjs";

import * as boxStyles from "../../box/box.styles";
import * as labelStyles from "../../label/label.styles";

export const container = cn(
  boxStyles.container,
  relative,
  flex,
  flex_row,
  gap_10,
);

export const main = cn(flex, flex_col, gap_4, w_1_2nd);

export const header = cn(flex, flex_col, gap_2);

export const client = mt_0;

export const jobTitle = cn(text_sm, font_semibold);

export const blurb = "";

export const aside = cn(w_1_2nd, flex, flex_col, gap_4);

export const asideImagesContainer = cn(relative, h_40);

export const asideImageBase = cn(
  absolute,
  w_arbitrary("40%"),
  h_arbitrary("70%"),
  bg_white,
  dark(bg_black),
  border,
  rounded,
  flex,
  items_center,
  justify_center,
);

export const asideImage1 = cn(asideImageBase, left_0, top_0);

export const asideImage2 = cn(
  asideImageBase,
  left_arbitrary("20%"),
  top_arbitrary("10%"),
);

export const asideImage3 = cn(
  asideImageBase,
  left_arbitrary("40%"),
  top_arbitrary("20%"),
);

export const asideImage4 = cn(
  asideImageBase,
  left_arbitrary("60%"),
  top_arbitrary("30%"),
);

export const techAndFeedbackContainer = cn(flex, flex_row, gap_4);

export const techContainer = cn(grow, w_1_2nd);

export const techCategory = "";

export const techItem = "";

export const feedbackContainer = cn(grow, w_1_2nd);

export const feedbackItem = mt_2;

export const feedbackItemQuote = cn(text_sm, whitespace_pre_line);

export const feedbackItemAuthor = cn(mt_1, text_xs);

export const label = labelStyles.label();
