"use client";

import Image from "next/image";
import { useState } from "react";

import { ProjectImage } from "@/framework";

import { ImageModal } from "../image-modal";

import * as styles from "./image-cascade.styles";

interface ImageCascadeProps {
  readonly images: readonly ProjectImage[];
}

interface ImageCascadeState {
  readonly openImage?: ProjectImage;
}

// todo: make more abstract and call from work-image-cascade
export function ImageCascade(props: ImageCascadeProps) {
  const [state, setState] = useState<ImageCascadeState>({});

  const handleImageModalCloseClick = () => {
    setState({});
  };

  const handleImageClick = (openImage: ProjectImage) => () => {
    setState({ openImage });
  };

  return (
    <div className={styles.container}>
      {props.images?.map((image, imageUrlIndex) => (
        <div
          key={`image-cascade-item-${image.imageUrl}`}
          className={styles.imageContainer}
          style={{
            left: `${(100 / (props.images.length * 2)) * (imageUrlIndex + 1)}%`,
            top: `${(100 / (props.images.length * 2)) * (imageUrlIndex + 1)}%`,
            width: `${styles.IMAGE_SIZE_PX.width}px`,
            height: `${styles.IMAGE_SIZE_PX.height}px`,
          }}
          onClick={handleImageClick(image)}
        >
          <Image
            className={styles.image}
            src={image.imageUrl}
            alt={image.imageUrl}
            width={styles.IMAGE_SIZE_PX.width}
            height={styles.IMAGE_SIZE_PX.height}
          />
        </div>
      ))}

      {state.openImage && (
        <ImageModal
          workImages={props.images}
          defaultSelectedWorkImage={state.openImage}
          onClose={handleImageModalCloseClick}
        />
      )}
    </div>
  );
}
