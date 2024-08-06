import {
  bg_blue_100,
  bg_stone_100,
  bg_stone_700,
  bg_stone_900,
  cn,
  dark,
  selection,
} from "@jonathanconway/tailwindjs";

export const appContainer = cn(
  bg_stone_100,
  dark(bg_stone_900),

  selection(bg_blue_100),
  dark(selection(bg_stone_700)),
);
