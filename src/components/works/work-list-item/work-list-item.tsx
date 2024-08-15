import Image from "next/image";
import { useState } from "react";

import { Date, Fragment, ImageCascade, Link, MdxH2 } from "@/components";
import { WorkMeta } from "@/framework";

import * as styles from "./work-list-item.styles";

interface WorkListItemProps {
  readonly workHistory: WorkMeta;
}

function workHistoryItemImageFullPath(client: string) {
  return (imageUrl: string) => {
    return `/images/works/${client}/${imageUrl}`;
  };
}

export function WorkListItem({
  workHistory: {
    client,
    jobTitle,
    blurbShort,
    images,
    techs,
    feedbacks,
    slug,
    startDate,
    endDate,
  },
}: WorkListItemProps) {
  return (
    <div className={styles.container}>
      <Link className={styles.mainColumn} href={`work/${slug}`} target="">
        {/* <div className={styles.date}>
          <Date format="MMM yyyy">{startDate}</Date>
          <span> - </span>
          <Date format="MMM yyyy">{endDate}</Date>
        </div> */}

        <div className={styles.title}>{client}</div>

        <p className={styles.blurb}>{blurbShort}</p>
      </Link>
      <div className={styles.asideColumn}>
        <Image
          className={styles.image}
          src={`/images/works/${slug}/thumbnail.png`}
          alt={`Work thumbnail image for ${client}`}
          priority
          unoptimized={true}
          width={96}
          height={64}
        />

        {/* {socialLinks && <SocialLinks socialLinks={socialLinks} />} */}

        {/* <span className={styles.type}>{type}</span> */}
      </div>
    </div>
  );
}
