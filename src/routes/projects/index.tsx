import { Container, SimpleGrid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx/lite";
import type { JSX } from "react";

import { PAGE_CONTAINER_SIZE } from "@/constants/layout.ts";

import { ProjectCard } from "./-components/project-card";
import { PROJECTS } from "./-data/projects";

import styles from "./index.module.css";

export const Route = createFileRoute("/projects/")({
  head: () => ({ meta: [{ title: "Projects | Seoyunnie" }] }),
  component: ProjectsPage,
});

function ProjectsPage(): JSX.Element {
  return (
    <div className={clsx(styles.root, "background-dot-grid")}>
      <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
        <SimpleGrid minColWidth="20em" spacing="xl">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
