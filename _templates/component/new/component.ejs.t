---
to: src/components/<%= name %>/<%= name %>.tsx
---

import { <%= h.changeCase.pascalCase(name) %>Props } from "./<%= name %>.types";
import * as Styled from "./<%= name %>.styles";

export function <%= h.changeCase.pascalCase(name) %>(props: <%= h.changeCase.pascalCase(name) %>Props) {
  return (
    <Styled.<%= h.changeCase.pascalCase(name) %> {...props}>
      {props.children}
    </Styled.<%= h.changeCase.pascalCase(name) %>>
  );
}
