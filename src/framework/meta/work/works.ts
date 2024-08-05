import { WorkMeta } from "..";

import { orderBy } from "lodash";

export function pickWorkHistories(workHistories: Record<string, WorkMeta>) {
  return Object.values(workHistories);
}

export function sortWorkHistories(workHistories: readonly WorkMeta[]) {
  return orderBy(workHistories, "date", "desc");
}
