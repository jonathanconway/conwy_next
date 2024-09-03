"use client";

import { cn } from "@jonathanconway/tailwindjs";
import Image from "next/image";

import { WorkImage } from "@/framework";

import { IconTypes } from "../icon";
import { IconButton } from "../icon-button";

import * as styles from "./image-modal.styles";
import { ImageModalClasses, useImageModal } from "./use-image-modal.hook";

interface ImageModalProps {
  readonly image: WorkImage;

  readonly onClose: VoidFunction;
}

export function ImageModal(props: ImageModalProps) {
  const { handleBackdropClick } = useImageModal(props);

  return (
    <div
      className={cn(ImageModalClasses.Backdrop, styles.imageModalBackdrop)}
      onClick={handleBackdropClick}
    >
      <div
        className={styles.imageModal}
        style={{
          maxWidth: "80vw",
          maxHeight: "80vh",
          height: "28.5rem",
        }}
      >
        <header className={styles.imageModalHeader}>
          {props.image.title && (
            <h2 className={styles.imageModalTitle}>{props.image.title}</h2>
          )}

          <div className={styles.imageModalButtonsContainer}>
            <IconButton
              icon={IconTypes.ArrowChevronLeft}
              tooltip={{ contents: "Previous image" }}
            />
            <IconButton
              icon={IconTypes.ArrowChevronRight}
              tooltip={{ contents: "Next image" }}
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
          <Image
            className={styles.image}
            src={props.image.imageUrl}
            alt={props.image.imageUrl}
            width={600}
            height={400}
          />

          {props.image.notes.length > 0 && (
            <div className={styles.notesContainer}>
              {props.image.notes.map((note) => (
                <li key={note.text}>{note.text}</li>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
