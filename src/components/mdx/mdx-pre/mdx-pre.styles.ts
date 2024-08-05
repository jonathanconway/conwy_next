import {
  all,
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  cn,
  dark,
  my_4,
  my_6,
  p_4,
  rounded_md,
  whitespace_pre_wrap,
} from "@jonathanconway/tailwindjs";

export const pre = cn(
  my_4,
  p_4,
  bg_stone_200,
  dark(bg_stone_800),
  border,
  border_stone_400,
  rounded_md,
  all(whitespace_pre_wrap),
);

export const preInline = { marginTop: "2rem", marginBottom: "2rem" };
