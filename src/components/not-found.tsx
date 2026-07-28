import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { ArrowUDownLeftIcon } from "@phosphor-icons/react";
import { Link, type NotFoundRouteProps } from "@tanstack/react-router";
import type { JSX } from "react";

import { PAGE_CONTAINER_SIZE } from "@/constants/layout.ts";

import styles from "./not-found.module.css";

export function NotFound(_props: NotFoundRouteProps): JSX.Element {
  return (
    <div className={styles.root}>
      <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
        <Stack align="center" className={styles.content} justify="center">
          <Title className={styles.statusCode} component="span">
            404
          </Title>

          <Title className={styles.title}>Page Not Found</Title>

          <Text className={styles.message} size="lg">
            The page you are looking for does not exist or has been removed.
          </Text>

          <Button
            className={styles.returnButton}
            component={Link}
            leftSection={<ArrowUDownLeftIcon weight="bold" />}
            size="md"
            to="/"
            variant="white"
          >
            Return home
          </Button>
        </Stack>
      </Container>
    </div>
  );
}
