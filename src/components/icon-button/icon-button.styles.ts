import {
  all,
  bg_gradient_to_b,
  bg_gradient_to_t,
  border,
  border_stone_300,
  border_stone_400,
  border_stone_600,
  border_stone_700,
  cn,
  content_center,
  dark,
  from_stone_100,
  from_stone_200,
  from_stone_400,
  from_stone_500,
  h_6,
  h_full,
  hover,
  inline_flex,
  items_center,
  rounded,
  text_white,
  to_stone_300,
  to_stone_400,
  to_stone_600,
  to_stone_700,
  w_6,
  w_full,
} from "@jonathanconway/tailwindjs";

export const iconButton = (isSelected = false) =>
  cn(
    inline_flex,
    items_center,
    content_center,

    ...(isSelected
      ? [
          dark(from_stone_100),
          dark(to_stone_300),

          from_stone_500,
          to_stone_700,

          bg_gradient_to_t,

          border_stone_700,
          dark(border_stone_300),
        ]
      : [
          bg_gradient_to_b,

          from_stone_100,
          to_stone_300,

          hover(from_stone_200),
          hover(to_stone_400),

          dark(from_stone_500),
          dark(to_stone_700),

          hover(dark(from_stone_400)),
          hover(dark(to_stone_600)),

          border_stone_300,
          hover(border_stone_400),

          dark(border_stone_700),
          hover(dark(border_stone_600)),
        ]),

    rounded,
    border,
    w_6,
    h_6,

    all(w_full),
    all(h_full),

    dark(text_white),
  );
