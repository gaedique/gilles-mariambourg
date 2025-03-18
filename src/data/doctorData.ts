import { siteData } from "./siteData";
import {
  Biography,
  BiographySection,
  SectionWithContent,
  SectionWithItems,
} from "@/app/(main)/dr-mariambourg/components/DoctorContent/types";

export const getBiography = (): Biography => {
  return {
    introduction: {
      beginning: "Le Docteur",
      name: siteData.doctor.shortName,
      following:
        "spécialiste en chirurgie orthopédique depuis 40 ans, a consacré sa carrière à restaurer la mobilité et améliorer la qualité de vie de ses patients.",
    },
    details: siteData.doctor.description.paragraphs,
  };
};

export const getBiographieData = (): Record<string, BiographySection> => {
  const expertiseSection: SectionWithContent = {
    title: "Expertise et spécialités",
    content: [
      {
        subtitle: "Chirurgie du rachis",
        items: siteData.expertiseDetails.rachis.items,
      },
      {
        subtitle: "Prothèses de hanche et de genou",
        items: [
          ...siteData.expertiseDetails.hanche.items,
          ...siteData.expertiseDetails.genou.items,
        ],
      },
    ],
  };

  const trainingSection: SectionWithItems = {
    title: "Titres et Formations",
    items: siteData.doctor.training,
  };

  const societiesSection: SectionWithItems = {
    title: "Sociétés savantes",
    items: siteData.doctor.societies,
  };

  const informationSection: SectionWithItems = {
    title: "Informations Pratiques",
    items: [
      "Inscrit au Conseil national de l'Ordre des médecins",
      `N°RPPS : ${siteData.doctor.rppsNumber}`,
      `Médecin conventionné ${siteData.doctor.sector}`,
    ],
  };

  return {
    expertise: expertiseSection,
    training: trainingSection,
    societies: societiesSection,
    information: informationSection,
  };
};
