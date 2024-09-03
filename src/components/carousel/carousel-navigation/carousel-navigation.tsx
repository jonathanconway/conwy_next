import { IconTypes } from "../../icon";
import { IconButton } from "../../icon-button";
import { UseCarouselResult } from "../use-carousel.hook";

import * as styles from "./carousel-navigation.styles";

interface CarouselNavigationProps<T> {
  readonly carousel: UseCarouselResult<T>;
  readonly tabTooltipDescription?: string;
}

export function CarouselNavigation<T>(props: CarouselNavigationProps<T>) {
  return (
    <div className={styles.switchButtonsContainer}>
      <IconButton
        icon={IconTypes.ArrowChevronLeft}
        tooltip={{ key: "previous", contents: "Previous" }}
        onClick={props.carousel.handlePreviousClick}
      />

      {props.carousel.items.map((tabItem, tabItemIndex) => (
        <IconButton
          isSelected={tabItem === props.carousel.selectedItem}
          tooltip={{
            key: `tab-${tabItemIndex}`,
            contents: `${props.tabTooltipDescription ?? "Item"} #${tabItemIndex + 1}`,
          }}
          onClick={props.carousel.handleTabClick(tabItem)}
        />
      ))}

      <IconButton
        icon={IconTypes.ArrowChevronRight}
        tooltip={{ key: "next", contents: "Next" }}
        onClick={props.carousel.handleNextClick}
      />
    </div>
  );
}
