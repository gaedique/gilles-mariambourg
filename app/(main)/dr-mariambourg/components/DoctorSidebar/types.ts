import { BiographySection } from "../DoctorContent/types";

export interface DoctorSidebarProps {
  biographieData: Record<string, BiographySection>;
  activeSection: string;
  scrollToSection: (key: string) => void;
  isScrolled: boolean;
}
