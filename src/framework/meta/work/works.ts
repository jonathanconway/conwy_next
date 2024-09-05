import { Work, WorkMeta } from "..";

import { orderBy } from "lodash";

export function sortWorkMetas(workMetas: readonly WorkMeta[]) {
  return orderBy(workMetas, "endDate", "desc");
}

export function getWorkMetas(works: Record<string, Work>) {
  return sortWorkMetas(Object.values(works).map((work) => work.meta));
}
