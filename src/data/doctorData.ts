import { siteData } from "./siteData";

export interface BiographieSection {
  title: string;
  items?: string[];
  content?: Array<{
    subtitle: string;
    items: string[];
  }>;
}

export const getBiography = () => {
  return {
    name: siteData.doctor.fullName,
    introduction: {
      beginning: "Le Docteur",
      name: siteData.doctor.shortName,
      following:
        "spécialiste en chirurgie orthopédique depuis 40 ans, a consacré sa carrière à restaurer la mobilité et améliorer la qualité de vie de ses patients.",
    },
    details: siteData.doctor.description.paragraphs,
  };
};

export const getBiographieData = (): Record<string, BiographieSection> => {
  return {
    expertise: {
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
    },
    training: {
      title: "Titres et Formations",
      items: siteData.doctor.training,
    },
    societies: {
      title: "Sociétés savantes",
      items: siteData.doctor.societies,
    },
    information: {
      title: "Informations Pratiques",
      items: [
        "Inscrit au Conseil national de l'Ordre des médecins",
        `N°RPPS : ${siteData.doctor.rppsNumber}`,
        `Médecin conventionné ${siteData.doctor.sector}`,
      ],
    },
  };
};
