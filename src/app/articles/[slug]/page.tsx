import { FrontEndObservability } from "@/articles/front-end-observability/front-end-observability";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      My Post: {params.slug} <FrontEndObservability />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = [{ slug: "one" }, { slug: "two" }];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
