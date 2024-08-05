---
to: src/components/<%= name %>/<%= name %>.test.tsx
---

import { render } from "@testing-library/react";
import { <%= h.changeCase.pascalCase(name) %> } from "./<%= name %>";
import { create<%= h.changeCase.pascalCase(name) %>PropsMock } from "./<%= name %>.mocks";

describe("<%= h.changeCase.pascalCase(name) %>", () => {
  test("renders", () => {
    render(<<%= h.changeCase.pascalCase(name) %> {...create<%= h.changeCase.pascalCase(name) %>PropsMock()} />);
  });
});
