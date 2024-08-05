import {
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  children,
  cn,
  dark,
  my_4,
  p_4,
  rounded_md,
  whitespace_pre_wrap,
} from "tailwindjs";

export const code = cn(whitespace_pre_wrap);

export const pre = cn(
  my_4,
  p_4,
  bg_stone_200,
  dark(bg_stone_800),
  border,
  border_stone_400,
  rounded_md,
  children(whitespace_pre_wrap),
);
