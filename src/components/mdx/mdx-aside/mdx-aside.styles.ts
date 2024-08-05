import {
  bg_stone_200,
  bg_stone_800,
  border,
  border_stone_400,
  cn,
  dark,
  font_semibold,
  m_4,
  my_4,
  p_4,
  rounded,
  rounded_md,
  text_base,
} from "@jonathanconway/tailwindjs";

export const aside = () =>
  cn(
    p_4,
    m_4,
    my_4,
    rounded,
    rounded_md,
    border,
    border_stone_400,
    bg_stone_200,
    dark(bg_stone_800),
  );

export const asideHeading = () => cn(text_base, font_semibold);
