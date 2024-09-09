import { ReactNode } from "react";

import { Heading } from "../heading";

import * as styles from "./section.styles";

interface SectionProps {
  readonly label: ReactNode;
  readonly children: ReactNode;
}

export function Section(props: SectionProps) {
  return (
    <div className={styles.container}>
      <Heading level={3} className={styles.label}>
        {props.label}
      </Heading>

      {props.children}
    </div>
  );
}
