import { SvgProps } from "./icon-svg-props";
import { IconType } from "./icon-types";
import { ICON_TYPE_SVGS } from "./icon-types-svg";
import * as styles from "./icon.styles";

export interface IconProps extends SvgProps {
  readonly icon: IconType;
}

export function Icon(props: IconProps) {
  const IconSvg = ICON_TYPE_SVGS[props.icon];
  return <IconSvg className={styles.iconSvg} {...props} />;
}
