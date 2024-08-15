import { WorkImage, WorkMeta } from "@/framework";

export function workImageFullPath({ client }: WorkMeta) {
  return ({ imageUrl }: WorkImage) => {
    return `/images/works/${client}/${imageUrl}`;
  };
}
