import { Paper, type PaperProps, polymorphic } from "@mantine/core";
import { clsx } from "clsx";

import styles from "./section-paper.module.css";

export interface SectionPaperProps extends Omit<PaperProps, "radius" | "withBorder"> {
  border?: "horizontal" | "vertical";
}

const SectionPaper = polymorphic<"div", SectionPaperProps>(
  ({ border = "horizontal", className, ...props }: Readonly<SectionPaperProps>) => (
    <Paper {...props} className={clsx(styles.root, className)} data-border={border} radius={0} withBorder />
  ),
);
SectionPaper.displayName = "SectionPaper";

export { SectionPaper };
