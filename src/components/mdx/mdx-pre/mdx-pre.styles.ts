import {
  all,
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  cn,
  dark,
  my_4,
  p_4,
  rounded_md,
  text_sm,
  whitespace_pre_wrap,
} from "@jonathanconway/tailwindjs";

export const pre_group_name = "pre";

export const pre = cn(
  my_4,
  p_4,
  bg_stone_200,
  dark(bg_stone_800),
  border,
  border_stone_400,
  rounded_md,
  `group/${pre_group_name}`,
  all(whitespace_pre_wrap),
  all(text_sm),
);

export const preInline = { marginTop: "2rem", marginBottom: "2rem" };
