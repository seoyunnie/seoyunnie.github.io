const FLAG_BASE_URL = "https://flagpedia.net/data/flags/w1160";

export interface CountryFlag {
  readonly imageURL: `${typeof FLAG_BASE_URL}/${string}.webp`;
  readonly altText: `${string} Flag`;
}

export interface CountryMeta {
  readonly flag: CountryFlag;
}

export const COUNTRY_META = {
  ch: {
    flag: {
      imageURL: `${FLAG_BASE_URL}/ch.webp`,
      altText: "Swiss Flag",
    },
  },
  de: {
    flag: {
      imageURL: `${FLAG_BASE_URL}/de.webp`,
      altText: "German Flag",
    },
  },
  fr: {
    flag: {
      imageURL: `${FLAG_BASE_URL}/fr.webp`,
      altText: "French Flag",
    },
  },
  jp: {
    flag: {
      imageURL: `${FLAG_BASE_URL}/jp.webp`,
      altText: "Japanese Flag",
    },
  },
  kr: {
    flag: {
      imageURL: `${FLAG_BASE_URL}/kr.webp`,
      altText: "South Korean Flag",
    },
  },
} as const satisfies Record<string, CountryMeta>;
