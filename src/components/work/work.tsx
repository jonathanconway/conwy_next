import { MdxH2, Section } from "@/components";
import { Work as Work_ } from "@/framework";

import { WorkBody } from "./work-body";
import { WorkFeedbackCarousel } from "./work-feedback-carousel";
import { WorkImageCascade } from "./work-image-cascade";
import { WorkNavigation } from "./work-navigation";
import { WorkProjects } from "./work-projects";
import * as styles from "./work.styles";

interface WorkProps {
  readonly work: Work_;
}

export function Work({ work }: WorkProps) {
  const {
    meta: { client, jobTitle, images, techs, feedbacks, projects },
    content: Content,
  } = work;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <MdxH2 className={styles.client}>{client}</MdxH2>

          <div className={styles.jobTitle}>{jobTitle}</div>
        </div>

        <div className={styles.headerRight}>
          <WorkNavigation workMeta={work.meta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.blurb}>
          {/* todo: change the "label"s to headings */}
          <span className={styles.label}>Duties + Achievements</span>

          <WorkBody work={work} />
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <div className={styles.techContainer}>
              <span className={styles.label}>Tech</span>
              <div>
                <ul>
                  {techs.map((tech) => (
                    <li key={tech.categoryName} className={styles.techListItem}>
                      {tech.categoryName}

                      <ul className={styles.techSubList}>
                        {tech.items.map((item) => (
                          <li
                            key={item.itemName}
                            className={styles.techSubListItem}
                          >
                            {item.itemName}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.otherContainer}>
              {feedbacks.length > 0 ? (
                <Section label="Feedback">
                  <WorkFeedbackCarousel workFeedbacks={work.meta.feedbacks} />
                </Section>
              ) : null}

              {projects.length > 0 ? (
                <Section label="Projects">
                  <WorkProjects projects={work.meta.projects} />
                </Section>
              ) : null}
            </div>
          </div>

          <div className={styles.imageCascadeContainer}>
            <WorkImageCascade work={work} />
          </div>
        </div>
      </div>
    </div>
  );
}
