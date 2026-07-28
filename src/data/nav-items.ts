import type { LinkProps } from "@tanstack/react-router";

export interface NavItem {
  readonly label: Capitalize<string>;
  readonly to: LinkProps["to"];
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
];
