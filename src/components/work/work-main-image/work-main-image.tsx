import Image from "next/image";

import { WorkMeta } from "@/framework/client";

import * as styles from "./work-main-image.styles";

type ImageProps = Omit<Parameters<typeof Image>[0], "src" | "alt">;

interface WorkMainImageProps extends ImageProps {
  readonly workMeta: WorkMeta;
}

export function WorkMainImage(props: WorkMainImageProps) {
  return (
    <Image
      className={styles.image}
      priority
      unoptimized={true}
      width={96}
      height={64}
      {...props}
      src={`/images/works/${props.workMeta.slug}/thumbnail.png`}
      alt={`Work thumbnail image for ${props.workMeta.client}`}
    />
  );
}
