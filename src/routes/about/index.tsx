import { Anchor, Button, Container, Image, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";
import type { JSX } from "react";

import bioImage from "@/assets/about/profile.webp";
import { SectionPaper } from "@/components/layout/section-paper.tsx";
import { TwoColumnLayout } from "@/components/layout/two-column-layout.tsx";
import { PAGE_CONTAINER_SIZE } from "@/constants/layout.ts";
import { SOCIAL_PROFILES } from "@/data/contacts.ts";

import { PhotoCard } from "./-components/photo-card.tsx";
import { PHOTOS } from "./-data/photography.ts";

import styles from "./index.module.css";

export const Route = createFileRoute("/about/")({
  head: () => ({ meta: [{ title: "About | Seoyunnie" }] }),
  component: AboutPage,
});

function AboutPage(): JSX.Element {
  return (
    <Stack className={styles.root} gap={0}>
      <section className={styles.bio}>
        <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
          <TwoColumnLayout
            className={styles.bioContent}
            gap="xl"
            leftSection={
              <Stack className={styles.bioImageWrapper} gap="xs">
                <Image alt="Isekaijoucho" className={styles.bioImage} loading="lazy" radius="md" src={bioImage} />
                <Text className={styles.bioImageCaption} size="sm">
                  This is obviously not me, but, anyways... Image Credit:{" "}
                  <Anchor href="https://www.narume.work/" rel="noreferrer" target="_blank">
                    narume
                  </Anchor>
                </Text>
              </Stack>
            }
            rightSection={
              <Stack>
                <Title className={styles.bioTitle}>안녕 세계</Title>
                <Text size="lg">
                  I am a{" "}
                  <Anchor href="https://en.wikipedia.org/wiki/Hikikomori" rel="noreferrer" target="_blank">
                    <ruby>
                      hikikomori
                      <rp>(</rp>
                      <rt>引きこもり</rt>
                      <rp>)</rp>
                    </ruby>
                  </Anchor>{" "}
                  (not NEET, I&rsquo;m in university!) who loves to code and play games!
                </Text>
                <Text size="lg">
                  I primarily enjoy playing tower defense games like Bloons TD 6 and the occasional first-person shooter
                  like Rainbow Six Siege. I used to play Counter Strike and Valorant more, but have played less because
                  of university.
                </Text>
                <Text size="lg">
                  I learnt how to program in high school. Our high school had dedicated web development classes for
                  juniors and a Python class for seniors. I took that opportunity to learn more and was eventually
                  caught in the rabbit hole and has not escaped since.
                </Text>
              </Stack>
            }
            splitAt="sm"
          />
        </Container>
      </section>

      <Stack className={styles.travel} component="section" gap={0}>
        <SectionPaper shadow="md">
          <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
            <Stack align="start">
              <Title>Life Outside the Basement</Title>
              <Text size="lg">
                Outside of university, I like to travel and visit different countries. Most countries that I&rsquo;ve
                been to are in Europe, although I have been exploring Asia more recently. I like to think that I&rsquo;m
                decent at taking photos, but I probably am not, and I hate taking photos of people especially.
              </Text>
              <Text size="lg">
                I also like to visit old towns in cities. The different architecture styles of the old world intrigue me
                the most. That&rsquo;s why most of the photos I&rsquo;ve ever taken are of buildings, or simply the
                urban landscape.
              </Text>

              <Button
                className={styles.travelInstagramButton}
                component="a"
                href={SOCIAL_PROFILES.instagram.url}
                rel="noreferrer"
                rightSection={<ArrowSquareOutIcon weight="bold" />}
                target="_blank"
              >
                Visit my Instagram page
              </Button>
            </Stack>
          </Container>
        </SectionPaper>

        <div className={clsx(styles.travelPhotoGridWrapper, "background-dot-grid")}>
          <Container className={styles.container} size={PAGE_CONTAINER_SIZE}>
            <SimpleGrid minColWidth="20em" spacing="xl">
              {PHOTOS.map((photo) => (
                <PhotoCard key={photo.displayName.english} photo={photo} />
              ))}
            </SimpleGrid>
          </Container>
        </div>
      </Stack>
    </Stack>
  );
}
