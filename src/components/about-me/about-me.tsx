import Image from "next/image";

import { AboutMeFragment } from "@/content/fragments";

import styles2 from "./about-me.module.css";

export function FragmentsAboutMe() {
  return (
    <div className={`${styles2.container}`}>
      <Image
        className={styles2.face}
        src="/face.png"
        alt="Jonathan's face pic"
        priority
        unoptimized={true}
        width="100"
        height="100"
      />

      <div className={styles2.fragmentWrapper}>
        <AboutMeFragment />
      </div>
    </div>
  );
}
