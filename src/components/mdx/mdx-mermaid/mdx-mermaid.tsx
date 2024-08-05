import { DetailedHTMLProps, HTMLAttributes } from "react";

import {
  generateMermaidDiagramImage,
  generateMermaidDiagramImageUrl,
} from "@/builders";
import { Meta } from "@/framework";

import { MdxImg } from "../mdx-img";

export type MdxMermaidProps = DetailedHTMLProps<
  HTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  readonly children: string;
  readonly item: Meta;
  readonly alt?: string;
};

export function MdxMermaid({
  children,
  item,
  alt,
  ...restProps
}: MdxMermaidProps) {
  generateMermaidDiagramImage(children, item);

  const mermaidUrl = generateMermaidDiagramImageUrl(children, item);

  return <MdxImg src={mermaidUrl} alt={alt} {...restProps} />;
}
