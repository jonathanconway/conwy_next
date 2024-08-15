import Image from "next/image";

import { AboutMeFragment } from "@/content/fragments";

import * as styles from "./about-me.styles";

export function FragmentsAboutMe() {
  return (
    <div className={styles.container()}>
      <Image
        className={styles.face()}
        src="/face.png"
        alt="Jonathan's face pic"
        priority
        unoptimized={true}
        width="100"
        height="100"
      />

      <div className={styles.fragmentWrapper()}>
        <AboutMeFragment />
      </div>
    </div>
  );
}
