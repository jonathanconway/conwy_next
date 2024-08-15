"use client";

import { useState } from "react";

import { ImageModal } from "../image-modal";

import * as styles from "./image-cascade.styles";

interface ImageCascadeProps {
  readonly imageUrls: readonly string[];
}

export function ImageCascade(props: ImageCascadeProps) {
  return (
    <div className={styles.container}>
      {props.imageUrls?.map((imageUrl, imageUrlIndex) => (
        <div
          key={`image-cascade-item-${imageUrl}`}
          className={styles.images[imageUrlIndex]}
        >
          <img src={imageUrl} alt={imageUrl} />
        </div>
      ))}

      {/* <div className={styles.imagesNav}>
        <button className={styles.imagesNavButton} title="Previous">
          ◀
        </button>
        <button className={styles.imagesNavButton} title="Next">
          ▶
        </button>
      </div> */}

      {/* {state.openImageUrl && (
        <ImageModal
          imageUrl={state.openImageUrl}
          onClose={handleImageModalCloseClick}
        />
      )} */}
    </div>
  );
}
