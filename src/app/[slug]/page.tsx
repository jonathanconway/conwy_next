import { PageLayout, Redirect as RedirectComponent } from "@/components";
import { REDIRECTS, site } from "@/content";
import { RedirectFragment } from "@/content/fragments";

interface RedirectProps {
  readonly params: { readonly slug: string };
}

export default async function Redirect({ params: { slug } }: RedirectProps) {
  const redirectUrl = REDIRECTS[slug];

  return (
    <PageLayout
      main={
        <div>
          <RedirectFragment />

          <RedirectComponent redirectUrl={redirectUrl} />
        </div>
      }
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(REDIRECTS).map((slug) => ({ slug }));
}

export const metadata = {
  title: `${site.title} - redirect`,
};
