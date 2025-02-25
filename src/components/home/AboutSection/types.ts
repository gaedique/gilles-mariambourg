export interface AboutProps {
  className?: string;
}

export interface AnimatedSectionProps {
  isVisible: boolean;
  className?: string;
}

export interface DoctorContent {
  name: string;
  title: string;
  subtitle: string;
  mainDescription: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  imageAlt: string;
}
