import { SocialLink } from "../../framework/client";
import { Icon } from "../icon";
import { Link } from "../link";

import { SOCIAL_LINK_DETAILS_BY_TYPE } from "./social-link-details-by-type";
import * as styles from "./social-links.styles";

export interface SocialLinksProps {
  readonly socialLinks: readonly SocialLink[];
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className={styles.container}>
      {socialLinks.map((socialLink) => (
        <Link
          key={socialLink.url}
          href={socialLink.url}
          target="_blank"
          showOpenInNew={false}
        >
          <Icon
            className={styles.icon}
            icon={SOCIAL_LINK_DETAILS_BY_TYPE[socialLink.type].iconType}
            tooltip={{
              contents: SOCIAL_LINK_DETAILS_BY_TYPE[socialLink.type].title,
            }}
          />
        </Link>
      ))}
    </div>
  );
}
