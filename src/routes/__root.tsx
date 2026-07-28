import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { JSX } from "react";

import { Header } from "@/components/layout/header.tsx";
import { Sidebar } from "@/components/layout/sidebar.tsx";

import { MOBILE_BREAKPOINT } from "../constants/layout";

function RootComponent(): JSX.Element {
  const [isSidebarOpen, { toggle: handleSidebarToggle, close: handleClose }] = useDisclosure(false);

  return (
    <>
      <HeadContent />

      <AppShell
        header={{ height: "var(--header-height)" }}
        navbar={{ width: "100%", breakpoint: MOBILE_BREAKPOINT, collapsed: { desktop: true, mobile: !isSidebarOpen } }}
        transitionDuration={500}
      >
        <Header isBurgerOpen={isSidebarOpen} onSidebarToggle={handleSidebarToggle} />
        <Sidebar onClose={handleClose} />

        <AppShell.Main>
          <Outlet />

          <TanStackRouterDevtools position="bottom-right" />
        </AppShell.Main>
      </AppShell>
    </>
  );
}

export const Route = createRootRoute({ head: () => ({ meta: [{ title: "Seoyunnie" }] }), component: RootComponent });
