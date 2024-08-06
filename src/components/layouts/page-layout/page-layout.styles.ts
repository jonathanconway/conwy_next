import {
  cn,
  flex,
  flex_1,
  flex_col,
  gap_8,
  h_full,
  m_auto,
  max_w_full,
  min_h_screen,
  pb_6,
  px_8,
  py_10,
  w_arbitrary,
} from "@jonathanconway/tailwindjs";

import { appContainer } from "@/components/app-container/app-container.styles";

export const container = cn(
  flex,
  flex_col,

  m_auto,
  max_w_full,
  h_full,
  min_h_screen,
  w_arbitrary("65rem"),

  pb_6,
  px_8,

  appContainer,
);

export const mainWrapper = cn(flex, flex_col, flex_1, gap_8);

export const footerWrapper = py_10;
