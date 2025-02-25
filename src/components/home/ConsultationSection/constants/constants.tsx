import { Calendar, Hospital, Info, Stethoscope } from "lucide-react";
import { ConsultationData } from "../types/types";

export const CONSULTATION_CARDS: ConsultationData[] = [
  {
    id: "appointments",
    icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Consultation Sur Rendez-Vous",
    subtitle: "Mercredi et vendredi",
    description:
      "Mon cabinet est ouvert toute la journée, les mercredi et vendredi, pour les consultations.",
  },
  {
    id: "surgery",
    icon: <Hospital className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Bloc opératoire",
    subtitle: "Lundi et jeudi",
    description:
      "Les opérations chirurgicales sont planifiées les lundi et jeudi.",
  },
  {
    id: "follow-up",
    icon: <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Suivi post-opératoire",
    subtitle: "Après consultation",
    description: [
      "Vous pourrez planifier avec le secrétariat des rendez-vous post-opératoires.",
      "En cas d'urgence, laissez un message.",
    ],
  },
  {
    id: "info",
    icon: <Info className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "À Savoir",
    subtitle: "Informations importantes",
    description: [
      "Médecin conventionné secteur 2",
      "Membre de la Société Française de Chirurgie Orthopédique : SOFCOT",
      "Membre de la Société Française de Chirurgie du Rachis : SFCR",
    ],
  },
];
