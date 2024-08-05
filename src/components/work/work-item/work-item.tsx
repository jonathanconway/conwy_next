import { Fragment, MdxH2 } from "@/components";
import { WorkMeta } from "@/framework";

import * as styles from "./work-item.styles";

interface WorkHistoryProps {
  readonly workHistory: WorkMeta;
}

export function WorkHistoryItem({
  workHistory: { client, jobTitle, blurbShort: BlurbShort, techs, feedbacks },
}: WorkHistoryProps) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.header}>
          <MdxH2 className={styles.client}>{client}</MdxH2>

          <div className={styles.jobTitle}>{jobTitle}</div>
        </div>

        <div className={styles.blurb}>
          <Fragment>
            <BlurbShort />
          </Fragment>
        </div>
      </div>
      <div className={styles.aside}>
        <div className={styles.asideImagesContainer}>
          <div className={styles.asideImage1}>image</div>
          <div className={styles.asideImage2}>image</div>
          <div className={styles.asideImage3}>image</div>
          <div className={styles.asideImage4}>image</div>
        </div>

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
                <div className={styles.feedbackItemQuote}>{feedback.quote}</div>

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
  );
}
