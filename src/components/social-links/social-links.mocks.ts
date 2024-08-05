import { SocialLinkTypes } from "../../framework";

import { SocialLinksProps } from "./social-links";

export function createSocialLinksPropsMock(): SocialLinksProps {
  return {
    socialLinks: [
      {
        type: SocialLinkTypes.LinkedIn,
        url: "https://linkedin.com/in/jonathanconway",
      },
      {
        type: SocialLinkTypes.Github,
        url: "https://linkedin.com/in/jonathanconway",
      },
    ],
  };
}
