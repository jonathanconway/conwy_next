import * as styles from "./image-modal.styles";

interface ImageModalProps {
  readonly imageUrl: string;

  readonly onClose: VoidFunction;
}

export function ImageModal(props: ImageModalProps) {
  return (
    <div className={styles.imageModalBackdrop}>
      <div className={styles.imageModal}>
        <button
          className={styles.imageModalCloseButton}
          onClick={props.onClose}
        >
          ✕
        </button>
        <img src={props.imageUrl} />
      </div>
    </div>
  );
}
