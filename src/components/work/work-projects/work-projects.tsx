import { Icon, IconTypes } from "@/components";

import * as styles from "./work-projects.styles";
import { WorkProjectsProps } from "./work-projects.types";

export function WorkProjects(props: WorkProjectsProps) {
  return (
    <ul className={styles.container}>
      {props.projects.map((project) => (
        <li key={project.title} className={styles.item}>
          <Icon icon={IconTypes.CheckBox} />
          <span className={styles.title}>{project.title}</span>
        </li>
      ))}
    </ul>
  );
}
