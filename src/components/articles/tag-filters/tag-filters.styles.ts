export const container = () => `
  flex
  flex-row
  gap-3
  mb-4
`;

export const tagFilter = () => `
  flex
  flex-row
  gap-1
  items-center
  cursor-pointer
  select-none
`;

export const tagFilterBox = (selected: boolean) => `
  inline-block
  w-3
  h-3
  rounded
  ${selected ? "bg-violet-500" : "bg-stone-500"}
  
`;

export const tagFilterLabel = () => `
  text-sm
`;
