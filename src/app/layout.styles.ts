import {
  bg_stone_100,
  bg_stone_900,
  bg_white,
  dark,
  flex,
  gap_8,
  gap_16,
  h_screen,
  overflow_y_visible,
  relative,
  scroll_m_10,
} from "@jonathanconway/tailwindjs";

import { cn } from "@/framework";

import * as textStyles from "../components/text/text.styles";

export const html = cn(bg_stone_900, dark(bg_white), h_screen);

export const body = cn(
  textStyles.text,

  relative,
  overflow_y_visible,

  h_screen,

  flex,
  gap_16,

  bg_stone_100,
  dark(bg_stone_900),
);
