import { omit } from "lodash";
import { ComponentType } from "react";

export function withComponent<
  THigherOrderComponentProps extends { readonly key?: string },
  THigherOrderComponentName extends string,
>(
  HigherOrderComponent: ComponentType<THigherOrderComponentProps>,
  higherOrderComponentName: THigherOrderComponentName,
) {
  return <
    TLowerOrderComponentProps,
    TLowerOrderComponent extends ComponentType<TLowerOrderComponentProps>,
  >(
    Component: TLowerOrderComponent,
  ) => {
    return (
      props: TLowerOrderComponentProps &
        Record<THigherOrderComponentName, THigherOrderComponentProps>,
    ) => {
      if (props[higherOrderComponentName]) {
        const higherOrderComponentProps = props[higherOrderComponentName];
        const higherOrderComponentPropsWithoutKey: Omit<
          THigherOrderComponentProps,
          "key"
        > = omit(higherOrderComponentProps, "key");

        return (
          <HigherOrderComponent
            key={higherOrderComponentProps.key}
            {...(higherOrderComponentPropsWithoutKey as THigherOrderComponentProps)}
          >
            <Component {...(omit(props, higherOrderComponentName) as any)} />
          </HigherOrderComponent>
        );
      } else {
        return <Component {...(props as any)} />;
      }
    };
  };
}
