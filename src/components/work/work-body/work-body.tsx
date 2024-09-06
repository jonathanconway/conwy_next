import { Work as Work_ } from "@/framework";

import { Fragment } from "../../fragments";

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
