"use client";

import { IconTypes } from "@/components/icon";
import { WorkFeedback } from "@/framework";

import { IconButton } from "../../icon-button";

import { useWorkFeedbackCarousel } from "./use-work-feedback-carousel.hook";
import * as styles from "./work-feedback-carousel.styles";

// todo: extract to general Carousel

interface WorkFeedbackCarouselProps {
  readonly workFeedbacks: readonly WorkFeedback[];
}

export function WorkFeedbackCarousel(props: WorkFeedbackCarouselProps) {
  const {
    sortedWorkFeedbacks,
    selectedWorkFeedback,
    handleNextClick,
    handlePreviousClick,
    handleTabClick,
  } = useWorkFeedbackCarousel(props);

  return (
    <div className={styles.feedbackCarouselContainer}>
      <div className={styles.feedbackItems}>
        {sortedWorkFeedbacks.map((feedback) => (
          <div
            key={feedback.quote}
            className={styles.feedbackItem(selectedWorkFeedback === feedback)}
          >
            <div className={styles.feedbackItemQuote}>{feedback.quote}</div>

            {feedback.author && (
              <div className={styles.feedbackItemAuthor}>
                – {feedback.author}
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedWorkFeedbacks.length > 1 && (
        <div className={styles.switchButtonsContainer}>
          <IconButton
            icon={IconTypes.ArrowChevronLeft}
            tooltip={{ key: "previous", contents: "Previous" }}
            onClick={handlePreviousClick}
          />

          {sortedWorkFeedbacks.map((tabFeedback, tabFeedbackIndex) => (
            <IconButton
              isSelected={tabFeedback === selectedWorkFeedback}
              tooltip={{
                key: `tab-${tabFeedbackIndex}`,
                contents: `Feedback #${tabFeedbackIndex + 1}`,
              }}
              onClick={handleTabClick(tabFeedback)}
            />
          ))}

          <IconButton
            icon={IconTypes.ArrowChevronRight}
            tooltip={{ key: "next", contents: "Next" }}
            onClick={handleNextClick}
          />
        </div>
      )}
    </div>
  );
}
