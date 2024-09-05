import { MdxH2, Section } from "@/components";
import { Project as Project_ } from "@/framework";

import { ProjectImageCascade } from "./product-image-cascade";
import { ProjectBody } from "./project-body";
import { ProjectLinks } from "./project-links";
import { ProjectMainImage } from "./project-main-image";
import { ProjectNavigation } from "./project-navigation";
import { ProjectPlatforms } from "./project-platforms";
// import { WorkFeedbackCarousel } from "./work-feedback-carousel";
// import { WorkImageCascade } from "./work-image-cascade";
// import { WorkNavigation } from "./work-navigation";
// import { WorkProjects } from "./work-projects";
import * as styles from "./project.styles";

interface ProjectProps {
  readonly project: Project_;
}

export function Project({ project }: ProjectProps) {
  const { meta: projectMeta, content: Content } = project;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <MdxH2 className={styles.client}>{projectMeta.title}</MdxH2>

          <div className={styles.blurb}>{projectMeta.blurb}</div>
        </div>

        <div className={styles.headerRight}>
          <ProjectNavigation projectMeta={projectMeta} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.body}>
          <Section label="Summary">
            <ProjectBody project={project} />
          </Section>
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <Section label="Tech">
              <ul>
                {projectMeta.techs.map((tech) => (
                  <li key={tech.categoryName} className={styles.techListItem}>
                    {tech.categoryName}

                    <ul className={styles.techSubList}>
                      {tech.items.map((item) => (
                        <li
                          key={item.itemName}
                          className={styles.techSubListItem}
                        >
                          {item.itemName}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </Section>

            <div className={styles.otherContainer}>
              <Section label="Links">
                <ProjectLinks projectMeta={projectMeta} />
              </Section>

              <Section label="Platforms">
                <ProjectPlatforms projectMeta={projectMeta} />
              </Section>
            </div>
          </div>

          <div className={styles.imageCascadeContainer}>
            <ProjectImageCascade projectMeta={project.meta} />
          </div>

          <div className={styles.imageCascadeContainer}></div>
        </div>
      </div>
    </div>
  );
}
