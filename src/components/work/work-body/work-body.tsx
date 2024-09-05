import { cn } from "@jonathanconway/tailwindjs";

import { Work as Work_ } from "@/framework";

import { Fragment } from "../../fragments";

import moduleStyles from "./work-body.module.css";
import * as styles from "./work-body.styles";

export interface WorkBodyProps {
  readonly work: Work_;
}

export function WorkBody({ work: { content: Content } }: WorkBodyProps) {
  return (
    <Fragment>
      <Content />
    </Fragment>
  );
}

// <div className={cn(styles.content, moduleStyles.workBody)}>
// </div>
