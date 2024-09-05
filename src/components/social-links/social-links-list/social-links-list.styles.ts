import {
  cn,
  flex,
  flex_col,
  flex_row,
  gap_1,
  inline_flex,
  items_center,
  text_sm,
  text_xs,
} from "@jonathanconway/tailwindjs";

import * as linkStyles from "../../link/link.styles";

export const container = cn(flex, flex_col, gap_1);

export const link = cn(
  linkStyles.link,

  inline_flex,
  flex_row,
  items_center,
  gap_1,
);

export const linkIcon = cn(linkStyles.linkIcon);

export const linkText = cn(text_sm);
