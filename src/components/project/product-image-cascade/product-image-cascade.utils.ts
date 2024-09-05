import { Project, ProjectImage, ProjectMeta } from "@/framework";

export function projectImageFullPath({ slug }: ProjectMeta) {
  return ({ imageUrl }: ProjectImage) => {
    return `/images/projects/${slug}/${imageUrl}`;
  };
}

export function generateProjectImages(projectMeta: ProjectMeta) {
  const projectImages = projectMeta.images.map((image, imageIndex) => ({
    ...image,
    imageUrl: projectImageFullPath(projectMeta)(image),
    title: image.title ?? `${projectMeta.title} image #${imageIndex + 1}`,
  }));
  return projectImages;
}
