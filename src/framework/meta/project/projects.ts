import { Project, ProjectMeta } from "..";

import { orderBy } from "lodash";

export function sortProjectMetas(ProjectMetas: readonly ProjectMeta[]) {
  return orderBy(ProjectMetas, "endDate", "desc");
}

export function getProjectMetas(Projects: Record<string, Project>) {
  return sortProjectMetas(
    Object.values(Projects).map((Project) => Project.meta),
  );
}
