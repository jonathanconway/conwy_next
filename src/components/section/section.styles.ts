import {
  cn,
  flex,
  flex_col,
  gap_2,
  grow,
  w_full,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../label/label.styles";

export const container = cn(w_full, flex, flex_col, gap_2);

export const label = labelStyles.label;
