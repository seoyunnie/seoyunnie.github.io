import { Grid, type GridColProps, type GridProps, type MantineBreakpoint } from "@mantine/core";
import type { JSX, ReactNode } from "react";

export interface TwoColumnLayoutProps extends Omit<GridProps, "columns" | "children"> {
  leftSection: ReactNode;
  rightSection: ReactNode;
  splitAt: MantineBreakpoint;
}

export function TwoColumnLayout({
  leftSection,
  rightSection,
  splitAt,
  ...props
}: Readonly<TwoColumnLayoutProps>): JSX.Element {
  const colSpan = { base: 2, [splitAt]: 1 } satisfies GridColProps["span"];

  return (
    <Grid {...props} columns={2}>
      <Grid.Col span={colSpan}>{leftSection}</Grid.Col>
      <Grid.Col span={colSpan}>{rightSection}</Grid.Col>
    </Grid>
  );
}
