import { omit } from "lodash";
import { ComponentType } from "react";

import { Tooltip, TooltipProps } from "./tooltip";

export function withTooltip<TProps>(Component: ComponentType<TProps>) {
  return (props: TProps & { readonly tooltip?: TooltipProps }) => {
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

// import { ComponentType } from "react";

// import { withComponent } from "@/framework/client";

// import { Tooltip, TooltipProps } from "./tooltip";

// export const withTooltip = <
//   TLowerOrderComponent extends ComponentType<TLowerOrderComponentProps>,
//   TLowerOrderComponentProps ,
// >(
//   C: TLowerOrderComponent,
// ) => withComponent<TooltipProps, "tooltip">(Tooltip, "tooltip")(C as any);
