import { ProjectMeta } from "@/framework";

import * as styles from "./project-platforms.styles";

interface ProjectPlatformsProps {
  readonly projectMeta: ProjectMeta;
}

export function ProjectPlatforms(props: ProjectPlatformsProps) {
  if (props.projectMeta.platforms.length === 0) {
    return null;
  }

  return (
    <ul>
      {props.projectMeta.platforms.map((platform) => (
        <li key={platform} className={styles.platformText}>
          {platform}
        </li>
      ))}
    </ul>
  );
}
