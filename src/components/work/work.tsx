import { MdxH2 } from "@/components";
import { Work as Work_ } from "@/framework";

import { WorkImagesSwitcher } from "./work-images-switcher";
import * as styles from "./work.styles";

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
          <span className={styles.label}>Duties + Achievements</span>

          <div className={styles.blurbContent}>{Content && <Content />}</div>
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

            {feedbacks.length > 0 ? (
              <div className={styles.feedbackContainer}>
                <span className={styles.label}>Feedback</span>

                <div className={styles.feedbackItems}>
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
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <WorkImagesSwitcher work={work.meta} />
      </div>
    </div>
  );
}
