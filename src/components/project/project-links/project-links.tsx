import { Icon } from "../../icon";
import { Link } from "../../link";
import { SOCIAL_LINK_DETAILS_BY_TYPE } from "../../social-links";

import * as styles from "./project-links.styles";
import { ProjectLinksProps } from "./project-links.types";

export function ProjectLinks(props: ProjectLinksProps) {
  const { projectMeta } = props;

  if (!projectMeta.socialLinks) {
    return null;
  }

  return (
    <div className={styles.container}>
      {projectMeta.socialLinks.map(({ url, type }) => (
        <Link key={url} href={url} className={styles.link} target="_blank">
          <Icon
            className={styles.linkIcon}
            icon={SOCIAL_LINK_DETAILS_BY_TYPE[type].iconType}
          />

          {SOCIAL_LINK_DETAILS_BY_TYPE[type].title}
        </Link>
      ))}
    </div>
  );
}
