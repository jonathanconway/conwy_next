import { Work as Work_ } from "@/framework/client";

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
