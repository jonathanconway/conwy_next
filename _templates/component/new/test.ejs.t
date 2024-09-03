---
to: src/components/<%= namePartBranches %>/<%= namePartLeaf %>.test.tsx
---

import { render } from "@testing-library/react";
import { <%= h.changeCase.pascalCase(namePartLeaf) %> } from "./<%= namePartLeaf %>";
import { create<%= h.changeCase.pascalCase(namePartLeaf) %>PropsMock } from "./<%= namePartLeaf %>.mocks";

describe("<%= h.changeCase.pascalCase(namePartLeaf) %>", () => {
  test("renders", () => {
    render(<<%= h.changeCase.pascalCase(namePartLeaf) %> {...create<%= h.changeCase.pascalCase(namePartLeaf) %>PropsMock()} />);
  });
});
