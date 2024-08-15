import { Icon, IconTypes } from "@/components/icon";
import { MicroMeta } from "@/framework/client";

import { Date } from "../../date";
import { SocialLinks } from "../../social-links";

import * as styles from "./micro-list-item.styles";

export type MicroListItemProps = MicroMeta;

export function MicroListItem(props: MicroListItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.mainColumn}>
        <div className={styles.date}>
          <Date>{props.date}</Date>
        </div>

        <div className={styles.blurb}>{props.blurb}</div>
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
