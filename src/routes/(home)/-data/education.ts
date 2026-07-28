import crmiSeal from "@/assets/schools/crmi-seal.png";
import dlsuSeal from "@/assets/schools/dlsu-seal.svg";
import dlszSeal from "@/assets/schools/dlsz-seal.svg";

export interface School {
  readonly sealImage: string;
  readonly name: string;
  readonly acronym: Uppercase<string>;
  readonly educationLevels: Capitalize<string>;
  readonly programName?: string;
  readonly attendancePeriod: `${number} - ${number | "Present"}`;
  readonly isOngoing: boolean;
}

export const SCHOOLS: readonly School[] = [
  {
    sealImage: dlsuSeal,
    name: "De La Salle University",
    acronym: "DLSU",
    educationLevels: "Undergraduate",
    programName: "B.S. in Computer Science (Network and Information Security)",
    attendancePeriod: "2024 - Present",
    isOngoing: true,
  },
  {
    sealImage: dlszSeal,
    name: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSZ-V",
    educationLevels: "Senior Highschool (Grade 11 - Grade 12)",
    programName: "Science, Technology, Engineering, and Mathematics",
    attendancePeriod: "2022 - 2024",
    isOngoing: false,
  },
  {
    sealImage: dlszSeal,
    name: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSZ-V",
    educationLevels: "Junior Highschool (Grade 7 - Grade 10)",
    attendancePeriod: "2018 - 2022",
    isOngoing: false,
  },
  {
    sealImage: crmiSeal,
    name: "Casa Real Montessori Inc",
    acronym: "CRMI",
    educationLevels: "Elementary (Grade 1 - Grade 6)",
    attendancePeriod: "2012 - 2018",
    isOngoing: false,
  },
];
