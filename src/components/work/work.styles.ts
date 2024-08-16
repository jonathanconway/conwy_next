import {
  all,
  cn,
  flex,
  flex_1,
  flex_col,
  flex_row,
  font_semibold,
  gap_2,
  gap_4,
  gap_6,
  gap_8,
  grow,
  inline_block,
  leading_5,
  ml_2,
  mr_2,
  mt_0,
  mt_1,
  mt_2,
  pr_0,
  relative,
  text_sm,
  text_xs,
  w_1_on_2,
  whitespace_pre_line,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../label/label.styles";

export const container = cn(relative, flex, flex_col, gap_8);

export const main = cn(flex, flex_1, flex_row, gap_6);

export const header = cn(flex, flex_col, gap_2);

export const client = mt_0;

export const jobTitle = cn(text_sm, font_semibold);

export const blurb = cn(flex_1);

export const blurbContent = cn(all(mt_2), all(pr_0), all(leading_5));

export const aside = cn(w_1_on_2, flex, flex_col, gap_4);

export const techAndFeedbackContainer = cn(flex, flex_row, gap_4);

export const techContainer = cn(grow, w_1_on_2);

export const techCategory = "";

export const techListItem = cn(mt_2, text_sm);

export const techSubList = cn(ml_2);

export const techSubListItem = cn(text_xs, inline_block, mr_2);

export const feedbackContainer = cn(grow, w_1_on_2, flex, flex_col, gap_4);

export const feedbackItems = cn(flex, flex_col, gap_4);

export const feedbackItem = "";

export const feedbackItemQuote = cn(text_xs, whitespace_pre_line, leading_5);

export const feedbackItemAuthor = cn(mt_1, text_xs);

export const label = labelStyles.label;
