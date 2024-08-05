import { ReactNode } from "react";

import { Footer, Header } from "@/components";

import * as styles from "./page-layout.styles";

export interface PageLayoutProps {
  readonly main: ReactNode;
  readonly selectedNavPath?: string;
}

export function PageLayout({ main, selectedNavPath }: PageLayoutProps) {
  return (
    <div className={styles.container}>
      <Header selectedNavPath={selectedNavPath} />

      {main}

      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
}
