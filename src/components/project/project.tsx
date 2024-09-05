import { MdxH2, Section } from "@/components";
import { Project as Project_ } from "@/framework";

import { ProjectBody } from "./project-body";
import { ProjectLinks } from "./project-links";
import { ProjectMainImage } from "./project-main-image";
import { ProjectNavigation } from "./project-navigation";
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
          {/* todo: change the "label"s to headings */}
          <span className={styles.label}>Summary</span>

          <ProjectBody project={project} />
        </div>

        <div className={styles.aside}>
          <div className={styles.techAndFeedbackContainer}>
            <div className={styles.techContainer}>
              <span className={styles.label}>Tech</span>
              <div>
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
              </div>
            </div>

            <div className={styles.otherContainer}>
              {/* {feedbacks.length > 0 ? ( */}
              <Section label="Links">
                <ProjectLinks projectMeta={projectMeta} />
              </Section>
              {/* // ) : null} */}

              {/* {projects.length > 0 ? ( */}
              <Section label="Platforms">
                <ul>
                  {projectMeta.platforms.map((platform) => (
                    <li key={platform}>{platform}</li>
                  ))}
                </ul>
                {/* <WorkProjects projects={work.meta.projects} /> */}
              </Section>
              {/* // ) : null} */}
            </div>
          </div>

          <div className={styles.imageCascadeContainer}>
            <ProjectMainImage projectMeta={projectMeta} />
          </div>
        </div>
      </div>
    </div>
  );
}
