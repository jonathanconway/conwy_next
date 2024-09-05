import { render } from "@testing-library/react";

import { ProjectLinks } from "./project-links";
import { WORK_PROJECTS_PROPS_MOCK } from "./project-links.mocks";

describe("ProjectLinks", () => {
  it("renders", () => {
    render(<ProjectLinks {...WORK_PROJECTS_PROPS_MOCK} />);
  });
});
