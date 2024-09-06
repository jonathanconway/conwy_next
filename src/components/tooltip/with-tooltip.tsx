import { omit } from "lodash";
import { ComponentType } from "react";

import { Tooltip, TooltipProps } from "./tooltip";

export function withTooltip<TProps>(Component: ComponentType<TProps>) {
  return function ComponentWithTooltip(
    props: TProps & { readonly tooltip?: TooltipProps },
  ) {
    if (props.tooltip) {
      return (
        <Tooltip key={props.tooltip.key} {...omit(props.tooltip, "key")}>
          <Component {...(omit(props, "tooltip") as any)} />
        </Tooltip>
      );
    } else {
      return <Component {...props} />;
    }
  };
}
