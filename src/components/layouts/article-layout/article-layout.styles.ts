import {
  absolute,
  applyArbitrary,
  bg_stone_100,
  bg_stone_900,
  children,
  cn,
  dark,
  flex,
  flex_row,
  gap_8,
  left_0,
  m_auto,
  ml_auto,
  mr_auto,
  mt_28,
  mt_48,
  pr_8,
  pt_10,
  px_8,
  py_10,
  right_0,
  sticky,
  top_0,
  w,
  w_72,
  w_arbitrary,
  w_full,
} from "tailwindjs";

export const headerWrapper = cn(
  absolute,
  top_0,

  children(m_auto),

  w_full,
  w_arbitrary("65rem"),

  children(px_8),
);

export const mainWrapper = cn(
  ml_auto,
  mt_28,

  w_arbitrary("43rem"),

  flex,
  flex_row,
  gap_8,
  px_8,

  bg_stone_100,
  dark(bg_stone_900),
);

export const asideWrapper = cn(
  sticky,

  top_0,

  mt_48,
  mr_auto,
  w_72,

  pt_10,
  pr_8,
);

export const footerWrapper = cn(
  absolute,
  left_0,
  right_0,

  mt_28,
  children(m_auto),

  children(w_arbitrary("65rem")),

  py_10,
  px_8,
);
