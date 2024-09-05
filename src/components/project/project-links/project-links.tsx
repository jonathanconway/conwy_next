import { SocialLinksList } from "../../social-links";

import { ProjectLinksProps } from "./project-links.types";

export function ProjectLinks(props: ProjectLinksProps) {
  const { projectMeta } = props;

  if (projectMeta.socialLinks.length === 0) {
    return null;
  }

  return <SocialLinksList socialLinks={props.projectMeta.socialLinks} />;
}
