import { AppShell } from "@mantine/core";
import type { JSX } from "react";

import { NAV_ITEMS } from "@/data/nav-items.ts";

import { NavItem } from "./nav-item.tsx";

import styles from "./sidebar.module.css";

export interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose: handleClose }: Readonly<SidebarProps>): JSX.Element {
  return (
    <AppShell.Navbar className={styles.root}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.label} label={item.label} onClick={handleClose} to={item.to} variant="sidebar" />
      ))}
    </AppShell.Navbar>
  );
}
