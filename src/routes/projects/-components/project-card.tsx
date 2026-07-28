import { Badge, Button, Card, Group, Image, Stack, Text, Title } from "@mantine/core";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import type { JSX } from "react";

import { SOCIAL_PROFILES } from "@/data/contacts.ts";

import type { Project } from "../-data/projects";

import styles from "./project-card.module.css";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>): JSX.Element {
  return (
    <Card component="article" padding="lg" shadow="md" withBorder>
      <Card.Section>
        <Image alt={`${project.name} Cover`} className={styles.coverImage} loading="lazy" src={project.coverImage} />
      </Card.Section>

      <Stack className={styles.content} gap="lg" justify="space-between">
        <Stack gap="xs">
          <Group>
            <Title size="h2">{project.name}</Title>

            <Badge radius="md" variant="light">
              {project.language}
            </Badge>
          </Group>

          <Text>{project.description}</Text>
        </Stack>

        <Button
          component="a"
          fullWidth
          href={`${SOCIAL_PROFILES.github.url}/${project.repositoryName}`}
          rel="noreferrer"
          rightSection={<ArrowSquareOutIcon weight="bold" />}
          target="_blank"
        >
          Visit repository
        </Button>
      </Stack>
    </Card>
  );
}
