import { cn } from "@jonathanconway/tailwindjs";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { Icon } from "../icon/icon";
import { IconType } from "../icon/icon-types";
import { withTooltip } from "../tooltip";

import * as styles from "./icon-button.styles";

interface IconButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  readonly icon?: IconType;
  readonly isSelected?: boolean;
}

function IconButton_(props: IconButtonProps) {
  const { className, icon, ...restProps } = props;

  return (
    <button
      className={cn(styles.iconButton(props.isSelected), props.className ?? "")}
      {...restProps}
    >
      {props.icon && <Icon icon={props.icon} />}
    </button>
  );
}

export const IconButton = withTooltip(IconButton_);
