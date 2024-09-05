import * as projects from "@/content/projects";
import { ProjectMeta, getProjectMetas } from "@/framework";

import { ItemNavigation } from "../../item";

interface ProjectNavigationProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectNavigation(props: ProjectNavigationProps) {
  const projectMetas = getProjectMetas(projects);
  return (
    <ItemNavigation<ProjectMeta>
      itemMeta={props.projectMeta}
      itemMetas={projectMetas}
      titleKey="title"
    />
  );
}
