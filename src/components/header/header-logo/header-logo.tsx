import Link from "next/link";

import { HeaderLogoImage } from "./header-logo-image.svg";
import * as styles from "./header-logo.styles";

export function HeaderLogo() {
  return (
    <div className={styles.faceAndLogoContainer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <HeaderLogoImage />
        </Link>
      </div>
    </div>
  );
}
