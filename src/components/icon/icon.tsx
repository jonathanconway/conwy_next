import { IconType } from "./icon-types";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import { SvgProps } from "./svg/svg-props";

export interface IconProps extends SvgProps {
  readonly icon: IconType;
}

export function Icon(props: IconProps) {
  const IconSvg = ICON_TYPE_SVGS[props.icon];
  return <IconSvg {...props} />;
}
