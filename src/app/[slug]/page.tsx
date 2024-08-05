import { Fragment, PageLayout } from "@/components";
import { Redirect as RedirectComponent } from "@/components";
import { REDIRECTS } from "@/content";
import { RedirectFragment } from "@/content/fragments";

interface RedirectProps {
  readonly params: { readonly slug: string };
}

export default async function Redirect({ params: { slug } }: RedirectProps) {
  const redirectUrl = REDIRECTS[slug];

  return (
    <PageLayout
      main={
        <div className="flex flex-col gap-8">
          <Fragment>
            <RedirectFragment />
            <RedirectComponent redirectUrl={redirectUrl} />
          </Fragment>
        </div>
      }
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(REDIRECTS).map((slug) => ({ slug }));
}
