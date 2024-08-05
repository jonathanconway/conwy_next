import { DateTime } from "luxon";

export interface DateProps {
  readonly children: string;
}

export function Date(props: DateProps) {
  return (
    <>
      {DateTime.fromFormat(String(props.children), "yyyy-MM-dd").toFormat(
        "d MMMM yyyy",
      )}
    </>
  );
}
