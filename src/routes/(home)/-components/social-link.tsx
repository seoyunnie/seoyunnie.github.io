import { UnstyledButton } from "@mantine/core";
import type { JSX } from "react";

import { IconInfoCard } from "@/components/icon-info-card.tsx";
import type { SocialProfile } from "@/data/contacts.ts";

import styles from "./social-link.module.css";

export interface SocialLinkProps {
  profile: SocialProfile;
}

export function SocialLink({ profile }: Readonly<SocialLinkProps>): JSX.Element {
  return (
    <UnstyledButton className={styles.root} component="a" href={profile.url} rel="noreferrer" target="_blank">
      <IconInfoCard
        iconSize={50}
        label={profile.platform}
        renderIcon={(s) => <profile.platformIcon size={s} />}
        sublabel={profile.username}
      />
    </UnstyledButton>
  );
}
