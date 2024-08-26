import Image from "next/image";

import { WorkImage } from "@/framework";

import * as styles from "./image-modal.styles";

interface ImageModalProps {
  readonly image: WorkImage;

  readonly onClose: VoidFunction;
}

export function ImageModal(props: ImageModalProps) {
  return (
    <div className={styles.imageModalBackdrop} onClick={props.onClose}>
      <div
        className={styles.imageModal}
        style={{
          maxWidth: "80vw",
          maxHeight: "80vh",
          width: "60rem",
        }}
      >
        <header className={styles.imageModalHeader}>
          {props.image.title && (
            <h2 className={styles.imageModalTitle}>{props.image.title}</h2>
          )}

          <button
            className={styles.imageModalCloseButton}
            onClick={props.onClose}
          >
            ✕
          </button>
        </header>

        <div className={styles.imageModalMain}>
          <Image
            className={styles.image}
            src={props.image.imageUrl}
            alt={props.image.imageUrl}
            width={600}
            height={400}
          />

          <div className={styles.notesContainer}>
            {props.image.notes.map((note) => (
              <li key={note.text}>{note.text}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
