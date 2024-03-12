export const container = () => `
  relative
  font-nav
  lowercase
  py-2
  group
`;

export const cursor = (active: boolean) => `
  absolute
  inline-block
  bottom-0
  left-0
  w-full
  h-1.5
  rounded
  bg-stone-300
  dark:bg-stone-600

  ${
    active
      ? `
    opacity-100
  `
      : `
    opacity-0
    group-hover:opacity-35
  `
  }
`;
