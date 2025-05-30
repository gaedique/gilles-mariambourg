import { ReactNode } from "react";

export interface ConsultationCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string | string[];
}
