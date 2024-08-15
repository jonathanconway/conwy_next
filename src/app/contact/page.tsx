import { PageLayout } from "@/components";
import { site } from "@/content";
import { ContactFragment } from "@/content/fragments/contact";

export default function Contact() {
  return (
    <PageLayout
      selectedNavPath="/contact"
      main={
        <div>
          <ContactFragment />
        </div>
      }
    />
  );
}

export const metadata = {
  title: `${site.title} - contact`,
};
