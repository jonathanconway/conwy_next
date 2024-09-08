import { Fragment, PageLayout } from "@/components";
import { site } from "@/content";
import { Speaking } from "@/content/fragments/speaking";

export default function Page() {
  return (
    <PageLayout
      selectedNavPath="/speaking"
      main={
        <>
          <Fragment>
            <Speaking />
          </Fragment>
        </>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - speaking`,
};
