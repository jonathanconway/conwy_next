import Image from "next/image";
import Link from "next/link";

import {
  ProjectListItem as ProjectListItemModel,
  getMainImageUrl,
} from "@/framework";

import { Date } from "../../date";
import { SocialLinks } from "../../social-links";

import * as styles from "./project-list-item.styles";

export type ProjectListItemProps = ProjectListItemModel;

export function ProjectListItem(props: ProjectListItemProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.mainColumn} href={`projects/${props.slug}`}>
        <div className={styles.date}>
          <Date>{props.date}</Date>
        </div>

        <div className={styles.title}>{props.title}</div>

        <p className={styles.blurb}>{props.blurb}</p>
      </Link>
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
    </div>
  );
}
