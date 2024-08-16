import { ReactNode } from "react";

interface TwoColLayoutProps {
  readonly children: [ReactNode, ReactNode];
}

export function TwoColLayout(props: TwoColLayoutProps) {
  return (
    <div className="flex flex-row gap-8">
      <div className="flex-1">{props.children[0]}</div>
      <div className="flex-1">{props.children[1]}</div>
    </div>
  );
}
