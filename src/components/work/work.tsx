import { MdxH2, WorkMainImage } from "@/components";
import { Work as Work_ } from "@/framework";

import { WorkBody } from "./work-body";
import { WorkFeedbackCarousel } from "./work-feedback-carousel";
import { WorkImageCascade } from "./work-image-cascade";
import { WorkNavigation } from "./work-navigation";
import { WorkProjects } from "./work-projects";
import { WorkTechs } from "./work-techs";
import * as styles from "./work.styles";

interface WorkProps {
  readonly work: Work_;
}

export function Work({ work }: WorkProps) {
  const { meta: workMeta } = work;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLeftImage}>
            <WorkMainImage workMeta={workMeta} />
          </div>
          <div className={styles.headerLeftTitle}>
            <MdxH2 className={styles.client}>{workMeta.client}</MdxH2>

            <div className={styles.jobTitle}>{workMeta.jobTitle}</div>
          </div>
        </div>

        <div className={styles.headerRight}>
          <WorkNavigation workMeta={workMeta} />
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
            <WorkTechs workMeta={workMeta} />

            <div className={styles.otherContainer}>
              <WorkFeedbackCarousel workFeedbacks={workMeta.feedbacks} />

              <WorkProjects projects={workMeta.projects} />
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
