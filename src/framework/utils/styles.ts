import { trim, uniq } from "lodash";

import { isNotNil } from "./typing";

export function convertClassStringToClassList(...inputs: string[]) {
  return inputs.join("\n").split("\n").map(trim).filter(Boolean);
}

export function cn(...inputs: any[]) {
  return (
    uniq(inputs?.filter(isNotNil).map(String).join(" ").split(" ")).join(" ") ??
    ""
  );
}
