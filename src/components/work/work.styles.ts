import {
  cn,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_semibold,
  gap_2,
  gap_4,
  gap_5,
  gap_10,
  grow,
  mt_0,
  mt_1,
  mt_2,
  relative,
  text_sm,
  text_xs,
  w_1_on_2,
  whitespace_pre_line,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../label/label.styles";

export const container = cn(relative, flex, flex_col, gap_5);

export const main = cn(flex, flex_1, flex_row, gap_4);

export const header = cn(flex, flex_col, gap_2);

export const client = mt_0;

export const jobTitle = cn(text_sm, font_semibold);

export const blurb = cn(flex_1);

export const aside = cn(w_1_on_2, flex, flex_col, gap_4);

export const techAndFeedbackContainer = cn(flex, flex_row, gap_4);

export const techContainer = cn(grow, w_1_on_2);

export const techCategory = "";

export const techItem = "";

export const feedbackContainer = cn(grow, w_1_on_2);

export const feedbackItem = mt_2;

export const feedbackItemQuote = cn(text_sm, whitespace_pre_line);

export const feedbackItemAuthor = cn(mt_1, text_xs);

export const label = labelStyles.label;
