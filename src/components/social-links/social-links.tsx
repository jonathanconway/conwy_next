import React from "react";

import {
  SocialLink,
  SocialLinkType,
  SocialLinkTypes,
} from "../../framework/client";
import { Icon, IconTypes } from "../icon";

import * as styles from "./social-links.styles";

export interface SocialLinksProps {
  readonly socialLinks: readonly SocialLink[];
}

const SOCIAL_LINK_PROPS_BY_TYPE: Record<SocialLinkType, any> = {
  [SocialLinkTypes.Dev]: {
    iconType: IconTypes.Dev,
    title: "DEV.to article",
  },
  [SocialLinkTypes.Github]: {
    iconType: IconTypes.Github,
    title: "Github repo",
  },
  [SocialLinkTypes.LinkedIn]: {
    iconType: IconTypes.LinkedIn,
    title: "LinkedIn article",
  },
  [SocialLinkTypes.Mastodon]: {
    iconType: IconTypes.Mastodon,
    title: "Mastodon post",
  },
  [SocialLinkTypes.Medium]: {
    iconType: IconTypes.Medium,
    title: "Medium post",
  },
  [SocialLinkTypes.Substack]: {
    iconType: IconTypes.Substack,
    title: "Substack article",
  },
  [SocialLinkTypes.Twitter]: {
    iconType: IconTypes.Twitter,
    title: "Tweet",
  },
  [SocialLinkTypes.X]: {
    iconType: IconTypes.X,
    title: "X post",
  },
};

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className={styles.container()}>
      {socialLinks.map(({ type, url }) => (
        <a
          key={url}
          href={url}
          title={SOCIAL_LINK_PROPS_BY_TYPE[type].title}
          target="_blank"
        >
          <Icon
            className={styles.icon()}
            icon={SOCIAL_LINK_PROPS_BY_TYPE[type].iconType}
          />
        </a>
      ))}
    </div>
  );
}
