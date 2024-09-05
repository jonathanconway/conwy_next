import { max, startCase } from "lodash";
import Image from "next/image";

import * as projects from "@/content/projects";
import {
  ProjectMeta,
  getMainImageUrl,
  getProjectMetas,
  isNotNil,
} from "@/framework";

// import {Image} from "../../image"
import { Link } from "../../link";
import { ProjectMainImage } from "../project-main-image";

import * as styles from "./project-navigation.styles";

interface ProjectNavigationProps {
  readonly projectMeta: ProjectMeta;
}

function getPrevious<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex <= 0) {
    return undefined;
  }
  return items[itemIndex - 1];
}

function getNext<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex >= items.length - 1) {
    return undefined;
  }
  return items[itemIndex + 1];
}

export function ProjectNavigation(props: ProjectNavigationProps) {
  const projectMetas = getProjectMetas(projects);

  const workMetaPrevious = getPrevious(projectMetas, props.projectMeta);
  const workMetaNext = getNext(projectMetas, props.projectMeta);
  const projectMetasPreviousNext = [workMetaPrevious, workMetaNext].filter(
    isNotNil,
  );
  const projectMetasNavsPreviousNext = [
    {
      type: "previous",

      projectMeta: workMetaPrevious,
    },
    {
      type: "next",
      projectMeta: workMetaNext,
    },
  ].filter(({ projectMeta }) => projectMeta) as readonly {
    readonly type: "previous" | "next";
    readonly projectMeta: ProjectMeta;
  }[];

  return (
    <div className={styles.projectNavigationContainer}>
      {projectMetasNavsPreviousNext.map(({ type, projectMeta }) => (
        <Link key={type} className={styles.container} href={projectMeta.slug}>
          <div className={styles.mainColumn}>
            <div className={styles.label}>
              {type === "previous" && "< "}
              {startCase(type)}
              {type === "next" && " >"}
            </div>
            <div className={styles.title}>{projectMeta.title}</div>
          </div>
          <div className={styles.asideColumn}>
            <ProjectMainImage projectMeta={projectMeta} />
          </div>
        </Link>
      ))}
    </div>
  );
}
