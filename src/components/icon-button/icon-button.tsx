import { Icon } from "../icon/icon";
import { IconType } from "../icon/icon-types";

import * as styles from "./icon-button.styles";

interface IconButtonProps {
  readonly icon: IconType;
}

export function IconButton(props: IconButtonProps) {
  return (
    <button className={styles.iconButton}>
      <Icon icon={props.icon} />
    </button>
  );
}
