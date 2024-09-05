"use client";

import { cn } from "@jonathanconway/tailwindjs";
import Image from "next/image";

import { WorkImage } from "@/framework";

import { CarouselNavigation } from "../carousel";
import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";

import * as styles from "./image-modal.styles";
import { ImageModalClasses, useImageModal } from "./use-image-modal.hook";

interface ImageModalProps {
  readonly workImages: readonly WorkImage[];
  readonly defaultSelectedWorkImage: WorkImage;

  readonly onClose: VoidFunction;
}

export function ImageModal(props: ImageModalProps) {
  const { carousel, handleBackdropClick } = useImageModal(props);

  return (
    <div
      className={cn(ImageModalClasses.Backdrop, styles.imageModalBackdrop)}
      onClick={handleBackdropClick}
    >
      <div
        className={styles.imageModal}
        style={{
          maxWidth: "80vw",
        }}
      >
        <header className={styles.imageModalHeader}>
          {carousel.selectedItem.title && (
            <h2 className={styles.imageModalTitle}>
              {carousel.selectedItem.title}
            </h2>
          )}

          <div className={styles.imageModalButtonsContainer}>
            <CarouselNavigation
              carousel={carousel}
              tabTooltipDescription="Image"
            />

            <IconButton
              className={styles.imageModalCloseButton}
              icon={IconTypes.Close}
              tooltip={{ contents: "Close" }}
              onClick={props.onClose}
            />
          </div>
        </header>

        <div className={styles.imageModalMain}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={carousel.selectedItem.imageUrl}
              alt={carousel.selectedItem.imageUrl}
              width={600}
              height={400}
            />
            {carousel.selectedItem.notes
              .filter((note) => note.hotspot)
              .map((note, noteIndex) => (
                <span
                  className={styles.noteHotspot}
                  style={{
                    left: note.hotspot!.x,
                    top: note.hotspot!.y,
                  }}
                >
                  {noteIndex + 1}
                </span>
              ))}
          </div>

          {carousel.selectedItem.notes.length > 0 && (
            <ul className={styles.notesContainer}>
              {carousel.selectedItem.notes.map((note, noteIndex) => (
                <li key={note.text} className={styles.noteText}>
                  <span className={styles.noteNumber}>
                    {note.hotspot ? noteIndex + 1 : "•"}
                  </span>
                  {note.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
