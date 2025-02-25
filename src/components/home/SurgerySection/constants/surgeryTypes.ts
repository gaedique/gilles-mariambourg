import { Surgery } from "@/src/components/home/SurgerySection/types/surgery";

export const SURGERY_TYPES: Surgery[] = [
  {
    id: "rachis",
    title: "Chirurgie de la colonne vertébrale",
    description:
      "La chirurgie du dos traite les pathologies du rachis et de la colonne vertébrale, comme les hernies discales, le canal lombaire étroit, les déformations ou les instabilités, en visant à soulager les douleurs, restaurer la stabilité et améliorer la qualité de vie.",
    points: [
      { top: "40%", left: "50%" },
      { top: "55%", left: "48%" },
    ],
  },
  {
    id: "hanche",
    title: "Prothèse de hanche",
    description:
      "La chirurgie de prothèse de hanche permet de remplacer l'articulation endommagée par une prothèse artificielle, réduisant la douleur et restaurant la mobilité pour une meilleure qualité de vie.",
    points: [{ top: "70%", left: "40%" }],
  },
  {
    id: "genou",
    title: "Prothèse du genou",
    description:
      "La chirurgie de prothèse du genou vise à remplacer l'articulation usée par une prothèse adaptée, permettant de retrouver une mobilité optimale et de supprimer les douleurs liées à l'arthrose.",
    points: [{ top: "85%", left: "45%" }],
  },
];
