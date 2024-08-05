import { PageLayout, Work } from "@/components";
import * as workHistories from "@/content/works";
import { pickWorkHistories } from "@/framework";

export default function Page() {
  const workHistoryListItems = pickWorkHistories(workHistories);

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <Work workHistories={workHistoryListItems} />
        </>
      }
    />
  );
}
