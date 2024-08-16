import { ContactDetails, PageLayout, TwoColLayout } from "@/components";
import { site } from "@/content";
import { ContactFragment } from "@/content/fragments/contact";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <TwoColLayout>
          <div>
            <ContactFragment />

            <ContactDetails />
          </div>
          <div data-tf-live="01J5CTN8SVZAQS11N9ZXMN3RRQ"></div>
        </TwoColLayout>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
