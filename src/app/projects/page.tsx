import { Fragment, PageLayout, ProjectsList } from "@/components";
import { ProjectsFragment } from "@/content/fragments";
import * as projects from "@/content/projects";
import { sortByDate } from "@/framework";

export default function Projects() {
  const projectModules = sortByDate(Object.values(projects));

  return (
    <PageLayout
      selectedNavPath="/projects"
      main={
        <>
          <Fragment>
            <ProjectsFragment />
          </Fragment>

          <ProjectsList items={projectModules} />
        </>
      }
    />
  );
}
