import {
  cn,
  flex,
  flex_col,
  gap_4,
  grow,
  w_1_on_2,
} from "@jonathanconway/tailwindjs";

import * as labelStyles from "../label/label.styles";

export const container = cn(grow, w_1_on_2, flex, flex_col, gap_4);

export const label = labelStyles.label;
