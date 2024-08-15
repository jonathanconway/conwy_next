import { WorkMeta, sortWorkHistories } from "@/framework";

import { WorkListItem } from "./work-list-item";
import * as styles from "./works.styles";

interface WorksProps {
  readonly workHistories: readonly WorkMeta[];
}

export function Works({ workHistories }: WorksProps) {
  const sortedWorkHistoryListItems = sortWorkHistories(workHistories);

  return (
    <div className={styles.container()}>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <WorkListItem
          key={workHistoryListItem.slug}
          workHistory={workHistoryListItem}
        />
      ))}
    </div>
  );
}
