import { MicroMeta } from "@/framework/client";

import { Date } from "../../date";
import { Icon, IconTypes } from "../../icon";
import { Link } from "../../link";
import { SocialLinks } from "../../social-links";
import { TextExpandable } from "../../text";

import * as styles from "./micro-list-item.styles";

export type MicroListItemProps = MicroMeta;

export function MicroListItem(props: MicroListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>
        <div className={styles.date}>
          <Date>{props.date}</Date>
        </div>

        <TextExpandable height="5rem">
          <div className={styles.blurb}>{props.blurb}</div>

          {props.mainLink && (
            <Link
              className={styles.mainLink}
              href={props.mainLink}
              target="_blank"
            >
              {props.mainLink}
            </Link>
          )}
        </TextExpandable>
      </div>
      <div className={styles.asideColumn}>
        <div className={styles.image}>
          <Icon icon={IconTypes.Quote} className={styles.iconQuote} />
        </div>

        {props.socialLinks && <SocialLinks socialLinks={props.socialLinks} />}

        <span className={styles.type}>{props.type}</span>
      </div>
    </div>
  );
}
