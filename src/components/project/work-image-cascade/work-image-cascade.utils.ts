import { Work, WorkImage, WorkMeta } from "@/framework";

export function workImageFullPath({ client }: WorkMeta) {
  return ({ imageUrl }: WorkImage) => {
    return `/images/works/${client.toLowerCase()}/${imageUrl}`;
  };
}

export function generateWorkImages(work: Work) {
  const workImages = work.meta.images.map((image, imageIndex) => ({
    ...image,
    imageUrl: workImageFullPath(work.meta)(image),
    title: image.title ?? `${work.meta.client} image #${imageIndex + 1}`,
  }));
  return workImages;
}
