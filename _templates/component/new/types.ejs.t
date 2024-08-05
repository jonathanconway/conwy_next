---
to: src/components/<%= name %>/<%= name %>.types.ts
---

import { ReactNode } from "react";

export interface <%= h.changeCase.pascalCase(name) %>Props {
  readonly children?: ReactNode;
}
