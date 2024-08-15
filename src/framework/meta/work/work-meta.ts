import { MetaBase } from "../meta-base";

export interface WorkMeta extends MetaBase {
  readonly startDate: string;
  readonly endDate: string;

  readonly blurbShort: string;

  readonly tags: readonly string[];

  readonly client: string;

  readonly jobTitle: string;

  readonly images: readonly WorkImage[];

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

export interface WorkImage {
  readonly imageUrl: string;
  readonly title?: string;
  readonly notes: readonly {
    readonly hospotX: number;
    readonly hospotY: number;
    readonly text: string;
  }[];
}
