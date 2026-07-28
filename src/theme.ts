import { type DefaultMantineColor, type MantineColorsTuple, createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    crimson: [
      "#ffe9ef",
      "#fed3db",
      "#f7a4b4",
      "#f1728b",
      "#ec4969",
      "#ea2f52",
      "#ea2047",
      "#dc143c",
      "#ba0932",
      "#a40029",
    ],
  },
  primaryColor: "crimson",
  autoContrast: true,
  fontFamily: "Roboto Variable, sans-serif",
  defaultRadius: "md",
  cursorType: "pointer",
});

export type ExtendedCustomColors = "crimson" | DefaultMantineColor;

declare module "@mantine/core" {
  interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}
