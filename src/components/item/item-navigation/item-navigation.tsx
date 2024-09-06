import { startCase } from "lodash";

import { ItemMeta } from "@/framework";

import { Link } from "../../link";
import { ItemMainImage } from "../item-main-image";

import * as styles from "./item-navigation.styles";

interface ItemNavigationProps<TMeta extends ItemMeta> {
  readonly itemMetas: readonly TMeta[];
  readonly itemMeta: TMeta;
  readonly titleKey: keyof TMeta;
}

function getPrevious<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex <= 0) {
    return undefined;
  }
  return items[itemIndex - 1];
}

function getNext<T>(items: readonly T[], item: T) {
  const itemIndex = items.indexOf(item);
  if (itemIndex >= items.length - 1) {
    return undefined;
  }
  return items[itemIndex + 1];
}

export function ItemNavigation<TMeta extends ItemMeta>(
  props: ItemNavigationProps<TMeta>,
) {
  const { itemMetas } = props;

  const itemMetaPrevious = getPrevious(itemMetas, props.itemMeta);
  const itemMetaNext = getNext(itemMetas, props.itemMeta);
  const itemMetasNavsPreviousNext = [
    {
      type: "previous",
      itemMeta: itemMetaPrevious,
    },
    {
      type: "next",
      itemMeta: itemMetaNext,
    },
  ] as readonly {
    readonly type: "previous" | "next";
    readonly itemMeta: TMeta;
  }[];

  return (
    <div className={styles.workNavigationContainer}>
      {itemMetasNavsPreviousNext.map(({ type, itemMeta }) =>
        itemMeta ? (
          <Link key={type} className={styles.container} href={itemMeta.slug}>
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
