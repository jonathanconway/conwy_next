import {
  absolute,
  all,
  cn,
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
  w_72,
  w_arbitrary,
  w_full,
} from "@jonathanconway/tailwindjs";

import { appContainer } from "@/components/app-container/app-container.styles";

export const headerWrapper = cn(
  absolute,
  top_0,

  w_full,

  all(m_auto),
  all(w_arbitrary("65rem")),
  all(px_8),
);

export const mainWrapper = cn(
  ml_auto,
  mt_28,

  w_arbitrary("43rem"),

  flex,
  flex_row,
  gap_8,
  px_8,

  appContainer,
);

export const asideWrapper = cn(
  sticky,

  top_0,

  w_72,

  mt_48,
  mr_auto,

  pt_10,
  pr_8,
);

export const footerWrapper = cn(
  absolute,
  left_0,
  right_0,

  mt_28,
  py_10,
  px_8,

  all(m_auto),
  all(w_arbitrary("65rem")),
);
