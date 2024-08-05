import {
  absolute,
  bottom_0,
  cn,
  flex,
  font_semibold,
  group,
  hover,
  invisible,
  items_center,
  left_4,
  left_6,
  left_7,
  neg,
  pl_2,
  pt_2,
  pt_5,
  relative,
  text_3xl,
  text_sky_500,
  text_sm,
  text_stone_500,
  text_xl,
  top_0,
  visible,
} from "tailwindjs";

import * as headingStyles from "../../heading/heading.styles";

// export const h3 = cn(headingStyles.h3, relative);

export const link = cn(
  group,
  relative,
  hover(text_sky_500),
  text_xl,
  font_semibold,
);

export const linkHoverHash = cn(
  absolute,
  flex,
  top_0,
  items_center,
  neg(left_4),
  bottom_0,

  text_stone_500,
  invisible,
  group(hover, visible),
  // pl_2,
  text_sm,
);
