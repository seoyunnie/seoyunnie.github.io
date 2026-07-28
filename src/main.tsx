import "@fontsource-variable/roboto/wght.css";
import "@fontsource/fusion-pixel-10px-proportional-kr/400.css";
import "@mantine/core/styles.css";
import "./globals.css";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { router } from "./router.ts";
import { theme } from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
);
