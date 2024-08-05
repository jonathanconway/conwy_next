import {
  cn,
  flex,
  flex_col,
  font_bold,
  gap_1,
  gap_4,
  list_none,
  overflow_hidden,
  text_ellipsis,
  text_sm,
  whitespace_nowrap,
} from "tailwindjs";

import * as labelStyles from "../../label/label.styles";
import * as linkStyles from "../../link/link.styles";
import * as textStyles from "../../text/text.styles";

export const container = cn(flex, flex_col, gap_4);

export const label = labelStyles.label;

export const list = cn(list_none, flex, flex_col, gap_1);

export const listItem = cn(flex);

export const link = (selected: boolean) =>
  cn(
    selected ? cn(textStyles.text, font_bold) : linkStyles.link,
    whitespace_nowrap,
    text_ellipsis,
    overflow_hidden,
    text_sm,
  );
