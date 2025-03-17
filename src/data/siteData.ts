export interface Address {
  name: string;
  street: string;
  postalCode: string;
  city: string;
}

export interface Hours {
  days: string;
  time: string;
}

export interface ContactDetails {
  phone: string;
  email?: string;
  doctolib?: string;
}

export interface NavigationItem {
  label: string;
  path: string;
  dropdownItems?: NavigationItem[];
}

export interface Image {
  src: string;
  alt: string;
  blurDataURL?: string;
  srcSet?: {
    mobile?: string; // 4:3
    tablet?: string; // 16:9
    desktop?: string; // 21:9
  };
}

export interface Specialty {
  id: string;
  title: string;
  outcome?: string;
  description: string;
  image: Image;
  points?: Array<{ top: string; left: string }>;
}

export interface ConsultationInfo {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string | string[];
}

export interface Doctor {
  fullName: string;
  shortName: string;
  title: string;
  specialties: string[];
  rppsNumber: string;
  sector: string;
  training: string[];
  societies: string[];
  description: {
    short: string;
    paragraphs: string[];
  };
  image: Image;
}

export interface InnovationSection {
  title: string;
  description: string;
  videoUrl: string;
  benefits: string[];
  thumbnailUrl: string;
  metaDescription?: string;
}

export interface Surgery {
  id: string;
  title: string;
  description: string;
  points?: Array<{ top: string; left: string }>;
}

// Define individual sections first
export const doctor = {
  fullName: "Dr. Gilles Mariambourg",
  shortName: "Gilles Mariambourg",
  title: "Chirurgien orthopédique",
  specialties: [
    "Chirurgie du rachis",
    "Prothèse de hanche",
    "Prothèse du genou",
  ],
  rppsNumber: "10002895935",
  sector: "Médecin conventionné Honoraire libre (secteur 2)",
  training: [
    "Lauréat de la faculté de médecine Pitié Salpêtrière",
    "Ancien interne des Hôpitaux de Paris",
    "Ancien chef de clinique assistant des hôpitaux de Paris",
  ],
  societies: [
    "Membre de la Société Française de Chirurgie Orthopédique (SOFCOT)",
    "Membre de la Société Française de la Chirurgie du Rachis (SFCR)",
  ],
  description: {
    short:
      "se consacre depuis 40 ans, à restaurer la mobilité et améliorer la qualité de vie de ses patients.",
    paragraphs: [
      "Lauréat de la faculté de médecine de la Pitié Salpêtrière, ancien interne et ancien chef de clinique assistant des hôpitaux de Paris, il a développé une expertise reconnue dans la chirurgie du rachis (colonne vertébrale), la pose de prothèses de hanche et de genou, ainsi que dans le traitement des traumatismes liés aux accidents de la vie et des pathologies dégénératives (arthrose, hernies, etc.).",
      "Aujourd'hui, il exerce à la Clinique du Sidobre, à Castres, en proposant des soins modernes et adaptés à chaque besoin.",
      "Son approche allie précision et technique, avec pour objectif d'offrir à chaque patient une prise en charge adaptée et efficace.",
      "Toujours à l'affût des avancées médicales, il continue de se former aux techniques les plus innovantes afin d'offrir à ses patients des soins à la pointe de la chirurgie orthopédique.",
    ],
  },
  image: {
    src: "/images/gilles_bureau.png",
    alt: "Dr. Mariambourg",
  },
};

export const contact = {
  address: {
    name: "Polyclinique du Sidobre",
    street: "Chemin de Saint Hippolyte",
    postalCode: "81100",
    city: "CASTRES",
  },
  details: {
    phone: "05 63 71 88 04",
    doctolib: "https://www.doctolib.fr",
  },
  hours: {
    regular: {
      days: "Lundi - Vendredi",
      time: "8:00 - 19:00",
    },
    consultation: {
      days: "Mercredi et vendredi",
      time: "Toute la journée",
    },
    surgery: {
      days: "Lundi et jeudi",
      time: "Selon planification",
    },
    emergency: "Service d'urgence disponible 24h/24 et 7j/7",
  },
};

export const navigation = {
  main: [
    { label: "Accueil", path: "/" },
    { label: "Actualité", path: "/#actualite" },
    {
      label: "Expertise",
      path: "/#expertise",
      dropdownItems: [
        {
          label: "Chirurgie de la colonne vertébrale",
          path: "/colonne-vertebrale",
        },
        { label: "Prothèse de Hanche", path: "/prothese-hanche" },
        { label: "Prothèse de Genou", path: "/prothese-genou" },
      ],
    },
    { label: "Dr Mariambourg", path: "/dr-mariambourg" },
    { label: "Consultation", path: "/#consultation", isAnchor: true },
    { label: "Contact", path: "/#contact", isAnchor: true },
  ],
  legal: [
    { label: "Mentions légales", path: "/mentions-legales" },
    {
      label: "Politique de confidentialité",
      path: "/politique-de-confidentialite",
    },
  ],
};

export const specialties = [
  {
    id: "colonne-vertebrale",
    title: "Chirurgie de la colonne vertébrale",
    outcome: "Partagez des moments de joie",
    description:
      "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
    image: {
      src: "/images/laughing_family.webp",
      alt: "Chirurgie de la colonne vertébrale",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
      srcSet: {
        mobile: "/images/laughing_family_mobile.webp",
        tablet: "/images/laughing_family_tablet.webp",
        desktop: "/images/laughing_family_desktop.webp",
      },
    },
  },
  {
    id: "hanche",
    title: "Prothèse de hanche",
    outcome: "Retrouvez votre liberté",
    description:
      "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
    image: {
      src: "/images/joyfully_dancing.webp",
      alt: "Prothèse de hanche",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
      srcSet: {
        mobile: "/images/joyfully_dancing_mobile.webp",
        tablet: "/images/joyfully_dancing_tablet.webp",
        desktop: "/images/joyfully_dancing_desktop.webp",
      },
    },
  },
  {
    id: "genou",
    title: "Prothèse du genou",
    outcome: "Avancez sans limites",
    description:
      "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
    image: {
      src: "/images/walking.webp",
      alt: "Prothèse du genou",
      blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRg...",
      srcSet: {
        mobile: "/images/walking_mobile.webp",
        tablet: "/images/walking_tablet.webp",
        desktop: "/images/walking_desktop.webp",
      },
    },
  },
];

export const consultationInfo = [
  {
    id: "appointments",
    icon: "Calendar",
    title: "Consultation Sur Rendez-Vous",
    subtitle: "Mercredi et vendredi",
    description:
      "Mon cabinet est ouvert toute la journée, les mercredi et vendredi, pour les consultations.",
  },
  {
    id: "follow-up",
    icon: "Stethoscope",
    title: "Suivi post-opératoire",
    subtitle: "Après consultation",
    description: [
      "Vous pourrez planifier avec le secrétariat des rendez-vous post-opératoires.",
      "En cas d'urgence, laissez un message.",
    ],
  },
  {
    id: "surgery",
    icon: "Hospital",
    title: "Bloc opératoire",
    subtitle: "Lundi et jeudi",
    description:
      "Les opérations chirurgicales sont planifiées les lundi et jeudi.",
  },

  {
    id: "info",
    icon: "Info",
    title: "À Savoir",
    subtitle: "Informations importantes",
    description: [
      "Médecin conventionné secteur 2",
      "Membre de la Société Française de Chirurgie Orthopédique : SOFCOT",
      "Membre de la Société Française de Chirurgie du Rachis : SFCR",
    ],
  },
];

export const expertiseDetails = {
  rachis: {
    title: "Chirurgie du rachis",
    items: [
      "Hernies discales cervicales et lombaires, arthrose cervicale",
      "Prothèses de disque lombaire",
      "Chirurgie mini-invasive (endoscopie) pour hernies discales, canal lombaire étroit et spondylolisthésis",
      "Chirurgie des fractures et tassements vertébraux",
      "Chirurgie tumorale de la colonne",
    ],
    innovation: {
      title: "Endoscopie Biportale Rachidienne",
      subtitle: "Une révolution chirurgicale",
      description:
        "L'endoscopie biportale rachidienne est une technique chirurgicale mini-invasive qui permet de traiter diverses pathologies de la colonne vertébrale avec une précision accrue et des suites opératoires simplifiées.",
      videoUrl: "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
      videoTitle:
        "Démonstration de l'endoscopie biportale rachidienne par Dr. Mariambourg",
      benefits: [
        "Moins de douleur post-opératoire",
        "Récupération plus rapide",
        "Cicatrices minimales (incisions de 7-8mm)",
        "Réduction du risque d'infection",
        "Visualisation améliorée pour le chirurgien",
        "Réduction du séjour hospitalier",
      ],
      thumbnailUrl: "/images/gilles_thumbnail.jpg",
      thumbnailAlt:
        "Démonstration de la technique d'endoscopie biportale rachidienne - Une approche chirurgicale mini-invasive",
      metaDescription:
        "Découvrez l'endoscopie biportale rachidienne, une technique chirurgicale mini-invasive révolutionnaire pour le traitement des pathologies de la colonne vertébrale pratiquée par Dr. Mariambourg à Castres.",
      learnMoreUrl: "/endoscopie-biportale-rachidienne",
    },
  },
  hanche: {
    title: "Prothèse de hanche",
    items: ["Pose de prothèses de hanche par voie mini-invasive"],
  },
  genou: {
    title: "Prothèse de genou",
    items: [
      "Prothèses de genou personnalisées grâce à la modélisation informatique",
    ],
  },
};

export const meta = {
  siteTitle: "Dr. Gilles Mariambourg - Chirurgien Orthopédique à Castres",
  siteDescription:
    "Cabinet du Dr. Gilles Mariambourg, chirurgien orthopédique spécialisé dans la chirurgie du rachis et la pose de prothèses (hanche, genou) à Castres.",
  siteUrl: "https://gilles-mariambourg.fr",
  siteLogo: "/images/logo.png",
  social: {
    twitter: "",
    facebook: "",
    linkedin: "",
  },
  creator: {
    name: "Gaëdique",
    url: "https://gaedique.fr",
  },
};

// Update news section content
export const newsSection = {
  title: "Actualité",
  subtitle: "Une révolution chirurgicale",
  description:
    "L'endoscopie biportale rachidienne est une technique mini-invasive de pointe permettant de traiter les pathologies de la colonne vertébrale.",
  videoUrl: "https://youtu.be/uyDBTpAIHpE?si=WEYRDN2Uut_QwBl0",
  benefits: [
    "Moins de douleur post-opératoire",
    "Récupération plus rapide",
    "Cicatrices minimales",
  ],
  ctaText: "Découvrir",
  ctaLink: "/endoscopie-biportale-rachidienne",
  ctaVideo: "Regarder la vidéo",
  thumbnailUrl: "/images/gilles_thumbnail.jpg",
  metaDescription:
    "Découvrez l'endoscopie biportale rachidienne, une technique chirurgicale mini-invasive révolutionnaire pour le traitement des pathologies de la colonne vertébrale.",
};

//Export about section content
export const aboutSection = {
  title: "À Propos",
  subtitle: "Votre chirurgien",
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
};

export const surgerySection = {
  title: "Expertise",
  subtitle: "Interventions Pratiquées",
  surgeryTypes: [
    {
      id: "dos",
      title: "Chirurgie du dos",
      description:
        "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
      points: [
        { top: "38%", left: "69%", size: "small" },
        { top: "51%", left: "77%", size: "small" },
        { top: "65%", left: "79%", size: "small" },
      ],
      slug: "colonne-vertebrale",
    },
    {
      id: "hanche",
      title: "Prothèse de hanche",
      description:
        "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
      points: [{ top: "87%", left: "63%", size: "large" }],
      slug: "prothese-de-hanche",
    },
    {
      id: "genou",
      title: "Prothèse du genou",
      description:
        "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
      points: [{ top: "80%", left: "9%", size: "medium" }],
      slug: "prothese-du-genou",
    },
  ],
  imageSrc: "/images/expertise_highlight.webp",
  imageAlt: "Illustration chirurgie orthopédique",
  ctaText: "En savoir plus",
  ctaLink: "/expertise",
};

// Export the complete site data object
export const siteData = {
  doctor,
  contact,
  navigation,
  specialties,
  consultationInfo,
  expertiseDetails,
  meta,
  newsSection,
  aboutSection,
  surgerySection,
};

// Helper functions
export const getContactForFooter = () => {
  return {
    clinic: contact.address.name,
    address: `${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`,
    phone: contact.details.phone,
    hours: `${contact.hours.regular.days} ${contact.hours.regular.time}`,
  };
};

export const getDoctorInfo = () => {
  return {
    ...doctor,
    contact,
  };
};

export const getSpecialtySummary = () => {
  return specialties.map((specialty) => ({
    id: specialty.id,
    title: specialty.title,
    description: specialty.description,
  }));
};

export const getNewsSection = () => {
  return newsSection;
};

// Add a helper function to get about section data
export const getAboutSection = () => {
  return {
    ...aboutSection,
    doctor: {
      fullName: doctor.fullName,
      shortName: doctor.shortName,
      specialties: doctor.specialties,
    },
  };
};

export const getSurgerySection = () => {
  return surgerySection;
};
