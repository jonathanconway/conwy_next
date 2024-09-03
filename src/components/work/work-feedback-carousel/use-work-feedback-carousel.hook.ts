import { max, min, orderBy } from "lodash";
import { useState } from "react";

import { WorkFeedback } from "@/framework";

interface UseWorkFeedbackCarouselParams {
  readonly workFeedbacks: readonly WorkFeedback[];
}

interface WorkFeedbackCarouselState {
  readonly selectedWorkFeedback: WorkFeedback;
}

export function useWorkFeedbackCarousel(params: UseWorkFeedbackCarouselParams) {
  const sortedWorkFeedbacks = sortWorkFeedbacks(params.workFeedbacks);

  const [state, setState] = useState<WorkFeedbackCarouselState>({
    selectedWorkFeedback: sortedWorkFeedbacks[0],
  });

  const { selectedWorkFeedback } = state;

  const handlePreviousClick = (workFeedback: WorkFeedback) => () => {
    const newIndex =
      max([sortedWorkFeedbacks.indexOf(workFeedback) - 1, 0]) ?? 0;
    const selectedWorkFeedback = sortedWorkFeedbacks[newIndex];

    setState({
      selectedWorkFeedback,
    });
  };

  const handleNextClick = (workFeedback: WorkFeedback) => () => {
    const newIndex =
      min([
        sortedWorkFeedbacks.indexOf(workFeedback) + 1,
        sortedWorkFeedbacks.length - 1,
      ]) ?? sortedWorkFeedbacks.length - 1;
    const selectedWorkFeedback = sortedWorkFeedbacks[newIndex];

    setState({
      selectedWorkFeedback,
    });
  };

  const handleTabClick = (workFeedback: WorkFeedback) => () => {
    const selectedWorkFeedback = workFeedback;

    setState({
      selectedWorkFeedback,
    });
  };

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
