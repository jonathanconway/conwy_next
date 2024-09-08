import { startCase } from "lodash";

import { ItemMeta } from "@/framework/client";

import { Link } from "../../link";
import { ItemMainImage } from "../item-main-image";

import * as styles from "./item-navigation.styles";
import { useItemNavigation } from "./use-item-navigation.hook";

interface ItemNavigationProps<TMeta extends ItemMeta> {
  readonly itemMetas: readonly TMeta[];
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

export function ItemNavigation<TMeta extends ItemMeta>(
  props: ItemNavigationProps<TMeta>,
) {
  const { itemMetasNavsPreviousNext } = useItemNavigation(props);
  return (
    <div className={styles.navigationsContainer}>
      {itemMetasNavsPreviousNext.map(({ type, itemMeta }) =>
        itemMeta ? (
          <Link
            key={type}
            className={styles.navigationContainer}
            href={itemMeta.slug}
          >
            <div className={styles.mainColumn}>
              <div className={styles.label}>
                {type === "previous" && "< "}
                {startCase(type)}
                {type === "next" && " >"}
              </div>
              <div className={styles.title}>
                {String(itemMeta[props.titleKey])}
              </div>
            </div>
            <div className={styles.asideColumn}>
              <ItemMainImage itemMeta={itemMeta} titleKey={props.titleKey} />
            </div>
          </Link>
        ) : (
          <div key={type} className={styles.containerEmpty}></div>
        ),
      )}
    </div>
  );
}
