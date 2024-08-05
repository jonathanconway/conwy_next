import { site } from "@/content";

import * as styles from "./footer.styles";

export function Footer() {
  return (
    <div className={styles.container()}>
      <div className={styles.row()}>
        © {site.copyrightYear} {site.owner}
      </div>
      <div className={styles.row()}>
        <a className={styles.link()} href={site.sourceUrl} target="_blank">
          Source
        </a>
        <a
          className={styles.link()}
          href={`https://wave.webaim.org/report#/${site.url}`}
          target="_blank"
        >
          WCAG
        </a>
      </div>
    </div>
  );
}
