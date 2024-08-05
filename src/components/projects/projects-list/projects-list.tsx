import { ProjectListItem as ProjectListItemModel } from "@/framework/client";

import { ProjectListItem } from "../project-list-item";

import * as styles from "./projects-list.styles";

export interface ProjectsListProps {
  readonly items: readonly ProjectListItemModel[];
}

export function ProjectsList({ items }: ProjectsListProps) {
  return (
    <div className={styles.container()}>
      {items.map((item) => (
        <ProjectListItem key={item.slug} {...item} />
      ))}
    </div>
  );
}
