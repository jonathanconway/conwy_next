import { Fragment, PageLayout } from "@/components";
import { ContactFragment } from "@/content/fragments/contact";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <div className="flex flex-col gap-8">
          <Fragment>
            <ContactFragment />
          </Fragment>
        </div>
      }
    />
  );
}
