import { PageLayout, Works } from "@/components";
import { site } from "@/content";
import { WorkFragment } from "@/content/fragments";
import * as works from "@/content/works";
import { pickWorkHistories } from "@/framework";

export default function Page() {
  const worksMetas = Object.values(works).map((work) => work.meta);
  // const workHistoryListItems = pickWorkHistories(worksMetas);

  return (
    <PageLayout
      selectedNavPath="/work"
      main={
        <>
          <div>
            <WorkFragment />
          </div>

          <Works workHistories={worksMetas} />
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - work`,
};
