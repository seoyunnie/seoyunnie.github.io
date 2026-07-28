import bavariaChancellery from "@/assets/photography/bavaria-chancellery.jpeg";
import eiffelTower from "@/assets/photography/eiffel-tower.webp";
import fushimiInariTaisha from "@/assets/photography/fushimi-inari-taisha.jpeg";
import hwaseongFortress from "@/assets/photography/hwaseong-fortress.jpeg";
import unOfficeGeneva from "@/assets/photography/un-office-geneva.jpeg";
import type { COUNTRY_META } from "@/data/countries.ts";

export interface GeotaggedPhoto {
  readonly displayName: { readonly english: string; readonly native?: string };
  readonly image: string;
  readonly country: keyof typeof COUNTRY_META;
}

export const PHOTOS: readonly GeotaggedPhoto[] = [
  {
    displayName: {
      english: "United Nations Office at Geneva",
      native: "Office des Nations Unies à Genève",
    },
    image: unOfficeGeneva,
    country: "ch",
  },
  {
    displayName: {
      english: "Bavarian State Chancellery",
      native: "Bayerische Staatskanzlei",
    },
    image: bavariaChancellery,
    country: "de",
  },
  {
    displayName: {
      english: "Eiffel Tower",
      native: "Tour Eiffel",
    },
    image: eiffelTower,
    country: "fr",
  },
  {
    displayName: {
      english: "Fushimi Inari-taisha",
      native: "伏見稲荷大社",
    },
    image: fushimiInariTaisha,
    country: "jp",
  },
  {
    displayName: {
      english: "Hwaseong Fortress",
      native: "수원 화성",
    },
    image: hwaseongFortress,
    country: "kr",
  },
];
