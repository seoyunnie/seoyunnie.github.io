import { createRouter } from "@tanstack/react-router";

import { NotFound } from "./components/not-found.tsx";
import { routeTree } from "./route-tree.gen.ts";

export const router = createRouter({
  defaultPreload: "intent",
  routeTree,
  scrollRestoration: true,
  defaultNotFoundComponent: NotFound,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
