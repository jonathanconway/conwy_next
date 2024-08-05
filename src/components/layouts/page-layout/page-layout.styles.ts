import {
  bg_stone_100,
  bg_stone_900,
  cn,
  dark,
  h_full,
  m_auto,
  max_w_full,
  min_h_screen,
  pb_6,
  px_8,
  py_10,
  w,
  w_arbitrary,
} from "tailwindjs";

export const container = cn(
  m_auto,

  max_w_full,
  h_full,
  min_h_screen,
  w_arbitrary("65rem"),

  pb_6,
  px_8,

  bg_stone_100,
  dark(bg_stone_900),
);

export const footerWrapper = py_10;
