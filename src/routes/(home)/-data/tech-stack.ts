import {
  type IconType,
  SiCurseforge,
  SiDiscorddotjs,
  SiMongodb,
  SiMysql,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export interface Language {
  readonly name: string;
  readonly icon: IconType;
  readonly usageContext: string;
}

export const LANGUAGES: readonly Language[] = [
  {
    name: "Python",
    icon: SiPython,
    usageContext: "Scripts, Advent of Code, and Socket Programming",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    usageContext: "Websites, Libraries, and CLI Games",
  },
  {
    name: "discord.js",
    icon: SiDiscorddotjs,
    usageContext: "Discord Bots",
  },
  {
    name: "React",
    icon: SiReact,
    usageContext: "Websites, SPA and SSR Apps",
  },
  {
    name: "Java",
    icon: SiOpenjdk,
    usageContext: "Desktop CRUD Apps and Games",
  },
  {
    name: "Fabric",
    icon: SiCurseforge,
    usageContext: "Minecraft: Java Edition Modding",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    usageContext: "NoSQL DBMS",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    usageContext: "SQL DBMS",
  },
];
