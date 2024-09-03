import { ReactNode } from "react";

import * as styles from "./section.styles";

interface SectionProps {
  readonly label: ReactNode;
  readonly children: ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.label}>{props.label}</h3>

      {props.children}
    </div>
  );
}
