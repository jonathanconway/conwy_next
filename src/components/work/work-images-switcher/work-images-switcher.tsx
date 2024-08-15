"use client";

import { useState } from "react";

import { WorkImage, WorkMeta } from "@/framework";

import { workImageFullPath } from "../work.utils";

import * as styles from "./work-images-switcher.styles";

interface WorkImagesSwitcherProps {
  readonly work: WorkMeta;
}

interface WorkImagesSwitcherState {
  readonly selectedWorkImageUrl?: string;
}

export function WorkImagesSwitcher(props: WorkImagesSwitcherProps) {
  const [state, setState] = useState<WorkImagesSwitcherState>({});

  const handleImageThumbnailClick = (imageUrl: string) => () => {
    setState({
      selectedWorkImageUrl: imageUrl,
    });
  };

  // console.log("WorkImagesSwitcher", props.workImages);

  return (
    <div className={styles.container}>
      <nav className={styles.imagesNav}>
        {props.work.images.map((workImage, workImageIndex) => (
          <div
            key={`work-image-${workImageIndex}`}
            className={styles.imagesNavItem}
            onClick={handleImageThumbnailClick(workImage.imageUrl)}
          >
            <img src={workImageFullPath(props.work)(workImage)} />
          </div>
        ))}
      </nav>

      {state.selectedWorkImageUrl && (
        <div>
          <img src={state.selectedWorkImageUrl} />
        </div>
      )}
    </div>
  );
}
