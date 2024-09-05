import { max, startCase } from "lodash";
import Image from "next/image";

import * as works from "@/content/works";
import { WorkMeta, getMainImageUrl, getWorkMetas, isNotNil } from "@/framework";

// import {Image} from "../../image"
import { Link } from "../../link";
import { WorkMainImage } from "../work-main-image";

import * as styles from "./work-navigation.styles";

interface WorkNavigationProps {
  readonly workMeta: WorkMeta;
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

export function WorkNavigation(props: WorkNavigationProps) {
  const workMetas = getWorkMetas(works);

  const workMetaPrevious = getPrevious(workMetas, props.workMeta);
  const workMetaNext = getNext(workMetas, props.workMeta);
  const workMetasNavsPreviousNext = [
    {
      type: "previous",
      workMeta: workMetaPrevious,
    },
    {
      type: "next",
      workMeta: workMetaNext,
    },
  ] as readonly {
    readonly type: "previous" | "next";
    readonly workMeta: WorkMeta;
  }[];
  // .filter(({ workMeta }) => workMeta)

  return (
    <div className={styles.workNavigationContainer}>
      {workMetasNavsPreviousNext.map(({ type, workMeta }) =>
        workMeta ? (
          <Link key={type} className={styles.container} href={workMeta.slug}>
            <div className={styles.mainColumn}>
              <div className={styles.label}>
                {type === "previous" && "< "}
                {startCase(type)}
                {type === "next" && " >"}
              </div>
              <div className={styles.title}>{workMeta.client}</div>
            </div>
            <div className={styles.asideColumn}>
              <WorkMainImage workMeta={workMeta} />
            </div>
          </Link>
        ) : (
          <div key={type} className={styles.containerEmpty}></div>
        ),
      )}
    </div>
  );
}
