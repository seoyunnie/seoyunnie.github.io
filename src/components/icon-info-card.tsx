import { Group, Text, ThemeIcon } from "@mantine/core";
import type { JSX, ReactNode } from "react";

import styles from "./icon-info-card.module.css";

export interface IconInfoCardProps {
  iconSize: number;
  label: string;
  renderIcon: (size: number) => ReactNode;
  sublabel: string;
}

const ICON_PADDING = 15;

export function IconInfoCard({ iconSize, label, renderIcon, sublabel }: Readonly<IconInfoCardProps>): JSX.Element {
  return (
    <Group wrap="nowrap">
      <ThemeIcon size={iconSize}>{renderIcon(iconSize - ICON_PADDING)}</ThemeIcon>

      <div>
        <Text className={styles.label}>{label}</Text>
        <Text className={styles.sublabel} size="sm">
          {sublabel}
        </Text>
      </div>
    </Group>
  );
}
