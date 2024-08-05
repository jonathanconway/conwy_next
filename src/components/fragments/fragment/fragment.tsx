import { Children, ComponentPropsWithRef, ReactNode } from "react";

export type FragmentProps = ComponentPropsWithRef<"div">;

function getRenderableChildren(children: ReactNode) {
  return Children.map(children, (child) => {
    if (
      !child ||
      typeof child !== "object" ||
      !("type" in child || "props" in child || "key" in child)
    ) {
      return null;
    }

    return child;
  });
}

export function Fragment({ children, ...restProps }: FragmentProps) {
  const childrenRenderable = getRenderableChildren(children);

  return <div {...restProps}>{childrenRenderable}</div>;
}
