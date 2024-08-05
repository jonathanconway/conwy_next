import { max_w_52, max_w_96 } from "@jonathanconway/tailwindjs";

export const container = () => `
  mt-10
  pt-10
  
  border-t
  border-stone-300
  dark:border-stone-700

  flex
  flex-row
  gap-6
  items-start
`;

export const fragmentWrapper = () => `
  w-4/5
  md:w-3/5
  ${max_w_96}
`;

export const face = () => `
  w-14
  rounded-full
  border-2
  border-stone-900
  dark:border-stone-700
`;
