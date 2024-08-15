import Image from "next/image";
import Link from "next/link";

import { ArticleMeta } from "@/framework";

import { Date } from "../../date";
import { SocialLinks } from "../../social-links";

import * as styles from "./article-list-item.styles";

export type ArticleListItemProps = ArticleMeta;

export function ArticleListItem({
  date,
  slug,
  title,
  blurb,
  shortBlurb,
  socialLinks,
  type,
}: ArticleListItemProps) {
  return (
    <Link className={styles.container} href={`articles/${slug}`}>
      <div className={styles.mainColumn}>
        <div className={styles.date}>
          <Date>{date}</Date>
        </div>

        <div className={styles.title}>{title}</div>

        <p className={styles.blurb}>{shortBlurb ?? blurb}</p>
      </div>
      <div className={styles.asideColumn}>
        <Image
          className={styles.image}
          src={`/images/articles/${slug}/main.jpg`}
          alt="Article main image"
          priority
          unoptimized={true}
          width={100}
          height={75}
        />

        {socialLinks && <SocialLinks socialLinks={socialLinks} />}

        <span className={styles.type}>{type}</span>
      </div>
    </Link>
  );
}
