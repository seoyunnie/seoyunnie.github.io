import { type IconType, SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

export const CONTACT = {
  name: "Louis Raphael V. Panaligan",
  email: "seoyun1062@naver.com",
} as const;

export interface SocialProfile {
  readonly platform: string;
  readonly platformIcon: IconType;
  readonly username: string;
  readonly url: string;
}

export const SOCIAL_PROFILES = {
  github: {
    platform: "GitHub",
    platformIcon: SiGithub,
    username: "seoyunnie",
    url: "https://github.com/seoyunnie",
  },
  x: {
    platform: "X (Twitter)",
    platformIcon: SiX,
    username: "@seoyunni3",
    url: "https://x.com/seoyunni3",
  },
  instagram: {
    platform: "Instagram",
    platformIcon: SiInstagram,
    username: "seoyunni3",
    url: "https://instagram.com/seoyunni3",
  },
} as const satisfies Record<string, SocialProfile>;
export const SOCIAL_PROFILE_LIST: readonly SocialProfile[] = Object.values(SOCIAL_PROFILES);
