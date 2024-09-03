import { MouseEvent, useEffect } from "react";

interface UseImageModalParams {
  readonly onClose: VoidFunction;
}

export const ImageModalClasses = {
  Backdrop: "image-modal-backdrop",
};

function isDescendentOf(element: HTMLElement, parent: HTMLElement) {
  while (element) {
    if (element === parent) {
      return true;
    }
    element = element.parentElement as HTMLElement;
  }
  return false;
}

export function getIsElementOutsideContainer(
  element?: HTMLElement | null,
  containerElement?: HTMLDivElement | null,
) {
  if (!element) {
    return false;
  }

  if (!containerElement) {
    return false;
  }

  return !isDescendentOf(element as HTMLElement, containerElement);
}

export function useImageModal(params: UseImageModalParams) {
  useEffect(() => {
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        params.onClose();
      }
    };

    window.addEventListener("keydown", handleWindowKeyDown);

    return () => {
      window.removeEventListener("keydown", handleWindowKeyDown);
    };
  }, []);

  const handleBackdropClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (!target.className.includes(ImageModalClasses.Backdrop)) {
      return;
    }

    params.onClose();
  };

  return {
    handleBackdropClick,
  };
}
