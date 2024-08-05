import { WorkMeta, sortWorkHistories } from "@/framework";

import { WorkHistoryItem } from "./work-item";
import * as styles from "./work.styles";

interface WorkProps {
  readonly workHistories: readonly WorkMeta[];
}

export function Work({ workHistories }: WorkProps) {
  const sortedWorkHistoryListItems = sortWorkHistories(workHistories);

  return (
    <div className={styles.container()}>
      {sortedWorkHistoryListItems.map((workHistoryListItem) => (
        <WorkHistoryItem
          key={workHistoryListItem.slug}
          workHistory={workHistoryListItem}
        />
      ))}
    </div>
  );
}
