import { ItemTechs } from "@/components/item";
import { ProjectMeta } from "@/framework/client";

interface ProjectTechsProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectTechs(props: ProjectTechsProps) {
  return <ItemTechs itemMeta={props.projectMeta} />;
}
