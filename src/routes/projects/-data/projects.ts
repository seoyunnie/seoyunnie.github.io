import tetrisCLICover from "@/assets/projects/tetris-cli.webp";

export interface Project {
  readonly name: string;
  readonly repositoryName: string;
  readonly description: string;
  readonly language: string;
  readonly coverImage: string;
}

export const PROJECTS: readonly Project[] = [
  {
    name: "Tetris CLI",
    repositoryName: "tetris-cli",
    description: "A clone of the popular game Tetris, but on the terminal, like the old days.",
    language: "TypeScript",
    coverImage: tetrisCLICover,
  },
];
