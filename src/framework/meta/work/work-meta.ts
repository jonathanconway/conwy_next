import { MDXContent } from "mdx/types";

import { MetaBase } from "../meta-base";

export interface WorkMeta extends MetaBase {
  readonly startDate: string;
  readonly endDate: string;

  readonly blurbShort: MDXContent;
  readonly blurbLong?: MDXContent;

  readonly tags: readonly string[];

  readonly client: string;

  readonly jobTitle: string;

  readonly techs: readonly {
    readonly categoryName: string;
    readonly items: readonly {
      readonly itemName: string;
    }[];
  }[];

  readonly feedbacks: readonly {
    readonly quote: string;
    readonly author?: string;
  }[];

  readonly type: "work";
}
