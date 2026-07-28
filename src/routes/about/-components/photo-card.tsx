import { Card, Image, Stack, Title } from "@mantine/core";
import type { JSX } from "react";

import { COUNTRY_META } from "@/data/countries.ts";

import type { GeotaggedPhoto } from "../-data/photography";

import styles from "./photo-card.module.css";

export interface PhotoCardProps {
  photo: GeotaggedPhoto;
}

export function PhotoCard({ photo }: Readonly<PhotoCardProps>): JSX.Element {
  const { english: englishName, native: nativeName } = photo.displayName;
  const { flag } = COUNTRY_META[photo.country];

  return (
    <Card
      className={styles.root}
      component="article"
      style={{
        background:
          "linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 0%), rgb(0 0 0 / 25%))," +
          `url(${photo.image}) center / cover`,
      }}
    >
      <Stack align="flex-start" className={styles.content} justify="space-between">
        <div>
          {nativeName !== undefined && (
            <Title className={styles.subtitle} component="span" size="h6">
              {nativeName}
            </Title>
          )}
          <Title order={2} size="h2">
            {englishName}
          </Title>
        </div>

        <Image alt={flag.altText} className={styles.countryFlag} loading="lazy" src={flag.imageURL} />
      </Stack>
    </Card>
  );
}
