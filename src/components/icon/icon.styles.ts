import {
  cn,
  dark,
  pointer_events_none,
  text_stone_50,
  text_stone_950,
} from "@jonathanconway/tailwindjs";

export const iconSvgBase = cn(pointer_events_none);

export const iconSvg = cn(iconSvgBase, text_stone_950, dark(text_stone_50));
