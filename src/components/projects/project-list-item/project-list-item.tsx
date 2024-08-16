import Image from "next/image";
import Link from "next/link";

import { REDIRECTS } from "@/content";
import {
  ProjectListItem as ProjectListItemModel,
  getMainImageUrl,
} from "@/framework";

import { SocialLinks } from "../../social-links";

import * as styles from "./project-list-item.styles";

export type ProjectListItemProps = ProjectListItemModel;

export function ProjectListItem(props: ProjectListItemProps) {
  const href = props.redirectUrl
    ? REDIRECTS[props.redirectUrl]
    : `projects/${props.slug}`;

  const target = props.redirectUrl ? "_blank" : undefined;

  return (
    <Link className={styles.container} href={href} target={target}>
      <div className={styles.mainColumn}>
        <div className={styles.title}>{props.title}</div>

        <p className={styles.blurb}>{props.blurb}</p>
      </div>
      <div className={styles.asideColumn}>
        <Image
          className={styles.image}
          src={getMainImageUrl(props)}
          alt="Project main image"
          priority
          unoptimized={true}
          width={96}
          height={64}
        />

        {props.socialLinks && <SocialLinks socialLinks={props.socialLinks} />}

        <span className={styles.type}>{props.subType}</span>
      </div>
    </Link>
  );
}
