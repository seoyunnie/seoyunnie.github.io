import { UnstyledButton } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import type { ComponentProps, JSX } from "react";

import type { NavItem as NavItemData } from "@/data/nav-items.ts";

import styles from "./nav-item.module.css";

export type NavItemVariant = "header" | "sidebar";

export interface NavItemProps extends NavItemData {
  onClick?: ComponentProps<typeof Link>["onClick"];
  variant?: NavItemVariant;
}

export function NavItem({ label, onClick: handleClick, to, variant }: Readonly<NavItemProps>): JSX.Element {
  return (
    <UnstyledButton
      activeProps={{ "data-active": true }}
      className={styles.root}
      component={Link}
      data-variant={variant}
      onClick={handleClick}
      to={to}
    >
      {label}
    </UnstyledButton>
  );
}
