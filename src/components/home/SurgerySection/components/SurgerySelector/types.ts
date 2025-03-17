import { Surgery } from "@/src/components/home/SurgerySection/types/surgery";

export interface SurgerySelectorProps {
  surgeryTypes: Surgery[];
  activeId: string;
  onSelect: (id: string) => void;
}
