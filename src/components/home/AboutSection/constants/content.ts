import { DoctorContent } from "../types";

export const DOCTOR_CONTENT: DoctorContent = {
  name: "Gilles Mariambourg",
  title: "Votre chirurgien",
  subtitle: "À Propos",
  mainDescription:
    "se consacre depuis 40 ans, à restaurer la mobilité et améliorer la qualité de vie de ses patients.",
  paragraphs: [
    "Son approche allie précision et technique, avec pour objectif d'offrir à chaque patient une prise en charge adaptée et efficace.",
    "Toujours à l'affût des avancées médicales, il continue de se former aux techniques les plus innovantes afin d'offrir à ses patients des soins à la pointe de la chirurgie orthopédique.",
  ],
  ctaText: "En savoir plus",
  ctaLink: "/dr-mariambourg",
  imageSrc: "/images/gilles_bureau.png",
  imageAlt: "Dr. Mariambourg",
} as const;
