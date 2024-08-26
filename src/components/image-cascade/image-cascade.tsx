"use client";

import Image from "next/image";
import { useState } from "react";

import { WorkImage } from "@/framework";

import { ImageModal } from "../image-modal";

import * as styles from "./image-cascade.styles";

interface ImageCascadeProps {
  readonly images: readonly WorkImage[];
}

interface ImageCascadeState {
  readonly openImage?: WorkImage;
}

export function ImageCascade(props: ImageCascadeProps) {
  const [state, setState] = useState<ImageCascadeState>({});

  const handleImageModalCloseClick = () => {
    setState({});
  };

  const handleImageClick = (openImage: WorkImage) => () => {
    setState({ openImage });
  };

  return (
    <div className={styles.container}>
      {props.images?.map((image, imageUrlIndex) => (
        <div
          key={`image-cascade-item-${image.imageUrl}`}
          className={styles.image}
          style={{
            left: `${(100 / props.images.length) * imageUrlIndex}%`,
            top: `${(100 / props.images.length) * imageUrlIndex}%`,
            width: `${styles.IMAGE_SIZE_PX.width}px`,
            height: `${styles.IMAGE_SIZE_PX.height}px`,
          }}
          onClick={handleImageClick(image)}
        >
          <Image
            src={image.imageUrl}
            alt={image.imageUrl}
            width={styles.IMAGE_SIZE_PX.width}
            height={styles.IMAGE_SIZE_PX.height}
          />
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

      {state.openImage && (
        <ImageModal
          image={state.openImage}
          onClose={handleImageModalCloseClick}
        />
      )}
    </div>
  );
}
