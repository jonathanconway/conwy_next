import Image from "next/image";

import { Link, Tooltip } from "@/components";
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
  const techNames = techs.map((tech) => tech.categoryName).join(", ");

  return (
    <Link
      className={styles.container}
      classNameOverride
      href={`work/${slug}`}
      target=""
    >
      <div className={styles.mainColumn}>
        {/* <div className={styles.date}>
          <Date format="MMM yyyy">{startDate}</Date>
          <span> - </span>
          <Date format="MMM yyyy">{endDate}</Date>
        </div> */}

        <div className={styles.title}>{client}</div>

        {/* <div className={styles.subTitle}>{jobTitle}</div> */}

        <p className={styles.blurb}>{blurbShort}</p>

        <Tooltip
          contents={
            <ul>
              {techs.map((tech) => (
                <li key={tech.categoryName}>{tech.categoryName}</li>
              ))}
            </ul>
          }
        >
          <p className={styles.techs}>Tech: {techNames}</p>
        </Tooltip>
      </div>
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
    </Link>
  );
}
