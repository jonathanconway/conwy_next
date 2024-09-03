import {
  absolute,
  cn,
  invisible,
  leading_6,
  mt_4,
  neg,
  text_sm,
  top_0,
} from "@jonathanconway/tailwindjs";

export const container = cn(mt_4);

export const topHeading = cn(absolute, neg(top_0), invisible);

export const content = cn(leading_6, text_sm);
