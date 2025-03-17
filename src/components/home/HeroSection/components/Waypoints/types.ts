import { Specialty } from "@/src/data/siteData";

export interface SpecialtyWaypointsProps {
  specialties: Specialty[];
  currentSpecialty: number;
  setcurrentSpecialty: (index: number) => void;
}
