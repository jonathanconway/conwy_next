import * as works from "@/content/works";
import { WorkMeta, getWorkMetas } from "@/framework/client";

import { ItemNavigation } from "../../item";

interface WorkNavigationProps {
  readonly workMeta: WorkMeta;
}

export function WorkNavigation(props: WorkNavigationProps) {
  const workMetas = getWorkMetas(works);
  return (
    <ItemNavigation<WorkMeta>
      itemMeta={props.workMeta}
      itemMetas={workMetas}
      titleKey="client"
    />
  );
}
