import { Anchor, Card, Center, Divider, Flex, SimpleGrid, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";
import type { JSX } from "react";

import { CONTACT, SOCIAL_PROFILE_LIST } from "@/data/contacts.ts";

import { SocialLink } from "./social-link.tsx";

import styles from "./contacts-card.module.css";

export function ContactsCard(): JSX.Element {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(width < ${theme.breakpoints.sm})`);

  return (
    <Card padding="lg" shadow="md" withBorder>
      <Flex direction={{ base: "column", sm: "row" }} gap="xl" justify="space-evenly">
        <Center component="section">
          <div className={styles.header}>
            <Title className={styles.title}>Contacts</Title>
            <Title className={styles.subtitle} order={2} size="h3">
              {CONTACT.name}
            </Title>
          </div>
        </Center>

        <Divider orientation={isSmallScreen ? "horizontal" : "vertical"} />

        <Stack component="section" gap="xs">
          <Center>
            <Text className={styles.message} size="lg">
              Find me on:
            </Text>
          </Center>

          <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="xs">
            {SOCIAL_PROFILE_LIST.map((profile) => (
              <SocialLink key={profile.platform} profile={profile} />
            ))}
          </SimpleGrid>

          <Center>
            <Text className={styles.message} size="lg">
              or mail me at{" "}
              <Anchor href={`mailto:${CONTACT.email}`} rel="noreferrer" target="_blank">
                {CONTACT.email} <PaperPlaneTiltIcon className="inline-icon" />
              </Anchor>
            </Text>
          </Center>
        </Stack>
      </Flex>
    </Card>
  );
}
