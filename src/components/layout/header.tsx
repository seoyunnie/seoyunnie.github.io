import { SiGithub } from "@icons-pack/react-simple-icons";
import {
  AppShell,
  Burger,
  Container,
  Group,
  type MantineColorScheme,
  type MantineSpacing,
  Title,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

import { MOBILE_BREAKPOINT } from "@/constants/layout.ts";
import { SOCIAL_PROFILES } from "@/data/contacts.ts";
import { NAV_ITEMS } from "@/data/nav-items.ts";
import { capitalize } from "@/utils/string.ts";

import { HeaderControl } from "./header-control.tsx";
import { NavItem } from "./nav-item.tsx";

import styles from "./header.module.css";

export interface HeaderProps {
  isBurgerOpen: boolean;
  onSidebarToggle: () => void;
}

const CONTENT_GAP: MantineSpacing = "xs";

export function Header({ isBurgerOpen, onSidebarToggle: handleSidebarToggle }: Readonly<HeaderProps>): JSX.Element {
  const colorScheme = useComputedColorScheme("light", { getInitialValueInEffect: true });
  const { setColorScheme } = useMantineColorScheme();

  const nextColorScheme: Exclude<MantineColorScheme, "auto"> = colorScheme === "dark" ? "light" : "dark";
  const nextColorSchemeLabel = `${capitalize(nextColorScheme)} mode`;

  return (
    <AppShell.Header>
      <Container className={styles.container} size="lg">
        <Group className={styles.wrapper} gap={CONTENT_GAP} justify="space-between">
          <Group>
            <Burger
              aria-label={`${isBurgerOpen ? "Collapse" : "Expand"} sidebar`}
              hiddenFrom={MOBILE_BREAKPOINT}
              onClick={handleSidebarToggle}
              opened={isBurgerOpen}
              size="sm"
            />

            <Link className={styles.logo} to="/">
              <Title className={styles.logoText} component="span" order={2}>
                SEOYUNNI3
              </Title>
            </Link>
          </Group>

          <Group gap={CONTENT_GAP}>
            <Group gap={CONTENT_GAP} visibleFrom={MOBILE_BREAKPOINT}>
              {NAV_ITEMS.map((item) => (
                <NavItem {...item} key={item.label} variant="header" />
              ))}
            </Group>

            <Tooltip.Group closeDelay={100} openDelay={500}>
              <HeaderControl
                aria-label="Open source code on GitHub"
                component="a"
                href={`${SOCIAL_PROFILES.github.url}/${SOCIAL_PROFILES.github.username}.github.io.git`}
                icon={SiGithub}
                rel="noreferrer"
                target="_blank"
                tooltip="Source code"
              />
              <HeaderControl
                aria-label={`Switch to ${nextColorSchemeLabel}`}
                icon={colorScheme === "dark" ? SunIcon : MoonIcon}
                onClick={() => {
                  setColorScheme(nextColorScheme);
                }}
                tooltip={nextColorSchemeLabel}
              />
            </Tooltip.Group>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
