import { orderBy } from "lodash";

import { WorkFeedback } from "@/framework";

import { useCarousel } from "../../carousel";

interface UseWorkFeedbackCarouselParams {
  readonly workFeedbacks: readonly WorkFeedback[];
}

export function useWorkFeedbackCarousel(params: UseWorkFeedbackCarouselParams) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  const {
    selectedItem: selectedWorkFeedback,
    handlePreviousClick,
    handleNextClick,
    handleTabClick,
  } = useCarousel({ items: sortedWorkFeedbacks });

  return {
    sortedWorkFeedbacks,
    selectedWorkFeedback,
    handlePreviousClick,
    handleNextClick,
    handleTabClick,
  };
}

function sortWorkFeedbacks(workFeedbacks: readonly WorkFeedback[]) {
  return orderBy(workFeedbacks, (feedback) => feedback.quote.length, "desc");
}
