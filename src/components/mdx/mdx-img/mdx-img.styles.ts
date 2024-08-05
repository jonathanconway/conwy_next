import {
  bg_white,
  border,
  border_black,
  border_white,
  cn,
  dark,
  invert,
  max_h_80,
  mt_4,
  p_2,
  px_8,
  py_12,
  text_xs,
  w_full,
} from "tailwindjs";

export const container = cn(px_8, py_12);

export const img = cn(
  w_full,
  max_h_80,

  p_2,

  border,
  bg_white,
  border_black,
  dark(border_white),
  dark(invert),
);

export const figCaption = cn(mt_4, text_xs);
