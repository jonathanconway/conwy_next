import { ImageCascade, MdxH2 } from "@/components";
import { WorkMeta, Work as Work_ } from "@/framework";

import { WorkImagesSwitcher } from "./work-images-switcher";
import * as styles from "./work.styles";
import { workImageFullPath } from "./work.utils";

interface WorkProps {
  readonly work: Work_;
}

export function Work({ work }: WorkProps) {
  const {
    meta: { client, jobTitle, images, techs, feedbacks },
    content: Content,
  } = work;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <MdxH2 className={styles.client}>{client}</MdxH2>

        <div className={styles.jobTitle}>{jobTitle}</div>
      </div>

      <div className={styles.main}>
        <div className={styles.blurb}>
          <div>
            <span className={styles.label}>Duties + Achievements</span>
          </div>
          {Content && <Content />}
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <div className={styles.techContainer}>
              <span className={styles.label}>Tech</span>
              <div>
                <ul>
                  {techs.map((tech) => (
                    <li key={tech.categoryName} className="mt-2 text-sm">
                      {tech.categoryName}

                      <ul className="ml-2">
                        {tech.items.map((item) => (
                          <li
                            key={item.itemName}
                            className="text-xs inline-block mr-2"
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

            <div className={styles.feedbackContainer}>
              <span className={styles.label}>Feedback</span>

              {feedbacks.map((feedback) => (
                <div key={feedback.quote} className={styles.feedbackItem}>
                  <div className={styles.feedbackItemQuote}>
                    {feedback.quote}
                  </div>

                  {feedback.author && (
                    <div className={styles.feedbackItemAuthor}>
                      – {feedback.author}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <WorkImagesSwitcher work={work.meta} />
      </div>
    </div>
  );
}
