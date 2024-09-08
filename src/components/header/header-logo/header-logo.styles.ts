import {
  brightness_125,
  cn,
  dark,
  flex,
  flex_row,
  gap_4,
  h_6,
  items_center,
  ml_1_5,
  neg,
  sm,
  w_20,
  w_32,
  w_40,
} from "@jonathanconway/tailwindjs";

export const faceAndLogoContainer = cn(flex, flex_row, gap_4, items_center);

export const logoContainer = cn(h_6);

export const logo = cn(sm(neg(ml_1_5)), dark(brightness_125), w_32, sm(w_40));
