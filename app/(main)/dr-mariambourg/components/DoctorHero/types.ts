export interface Biography {
  introduction?: {
    beginning: string;
    name: string;
    following: string;
  };
  details?: string[];
}

export interface DoctorHeroProps {
  biography: Biography;
}
