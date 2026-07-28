import { Anchor, Center, Container, Divider, Image, SimpleGrid, Stack, Tabs, Text, Title } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { BriefcaseIcon, GraduationCapIcon, type IconWeight } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import type { JSX } from "react";

import { IconInfoCard } from "@/components/icon-info-card.tsx";
import { SectionPaper } from "@/components/layout/section-paper.tsx";
import { TwoColumnLayout } from "@/components/layout/two-column-layout.tsx";
import { PAGE_CONTAINER_SIZE } from "@/constants/layout.ts";

import { ContactsCard } from "./-components/contacts-card";
import { EducationTimeline } from "./-components/education-timeline";
import { LANGUAGES } from "./-data/tech-stack";

import styles from "./index.module.css";

export const Route = createFileRoute("/(home)/")({ component: HomePage });

const HERO_PARALLAX_FACTOR = 3;

const TAB_ICON_WEIGHT: IconWeight = "bold";

function HomePage(): JSX.Element {
  const [scrollPos] = useWindowScroll();

  return (
    <div>
      <section className={styles.hero} style={{ transform: `translateY(${scrollPos.y / HERO_PARALLAX_FACTOR}px)` }}>
        <Container size={PAGE_CONTAINER_SIZE}>
          <Center className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <Title className={styles.heroTitle}>Web Developer and Minecraft Modder in Training</Title>

              <Text className={styles.heroImageCredits} size="lg">
                Image Credit:{" "}
                <Anchor href="https://www.narume.work/" rel="noreferrer" target="_blank">
                  narume
                </Anchor>
              </Text>
            </div>
          </Center>
        </Container>
      </section>

      <section className={styles.page}>
        <SectionPaper component="section" shadow="md">
          <Container className={styles.container} component="section" size={PAGE_CONTAINER_SIZE}>
            <Stack gap="xl">
              <Stack>
                <Title>Tech Stack</Title>

                <Text size="lg">
                  A list of the programming languages, libraries, and databases that I&apos;ve used both
                  privately/personally and for school projects.
                </Text>
              </Stack>

              <SimpleGrid cols={{ base: 1, xs: 2 }}>
                {LANGUAGES.map((lang) => (
                  <IconInfoCard
                    iconSize={60}
                    key={lang.name}
                    label={lang.name}
                    renderIcon={(s) => <lang.icon size={s} />}
                    sublabel={lang.usageContext}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </Container>

          <Container size="xl">
            <Divider />
          </Container>

          <Container className={styles.container} component="section" size={PAGE_CONTAINER_SIZE}>
            <TwoColumnLayout
              gap="xl"
              leftSection={
                <Image
                  alt="St. La Salle Hall"
                  className={styles.experienceImage}
                  radius="md"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/St._La_Salle_Hall_in_March_2024.jpg/1280px-St._La_Salle_Hall_in_March_2024.jpg"
                />
              }
              rightSection={
                <Tabs defaultValue="education" variant="pills">
                  <Tabs.List justify="center">
                    <Tabs.Tab fw="bold" leftSection={<GraduationCapIcon weight={TAB_ICON_WEIGHT} />} value="education">
                      Education
                    </Tabs.Tab>
                    <Tabs.Tab
                      disabled
                      fw="bold"
                      leftSection={<BriefcaseIcon weight={TAB_ICON_WEIGHT} />}
                      value="employment"
                    >
                      Employment
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="education">
                    <Center className={styles.experienceTimelineWrapper}>
                      <EducationTimeline />
                    </Center>
                  </Tabs.Panel>
                </Tabs>
              }
              splitAt="sm"
            />
          </Container>
        </SectionPaper>

        <section className="background-dot-grid">
          <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
            <ContactsCard />
          </Container>
        </section>
      </section>
    </div>
  );
}
