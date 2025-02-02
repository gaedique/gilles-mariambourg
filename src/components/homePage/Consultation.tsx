"use client";
import React from "react";
import { Calendar, Hospital, Stethoscope, Info } from "lucide-react";

interface ConsultationCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string | string[];
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({
  icon,
  title,
  subtitle,
  description,
}) => {
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <div className="relative h-full bg-white p-6 group">
      {/* Overlay pour l'effet de hover */}
      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />

      <div className="relative flex items-start gap-6">
        {/* Icon avec bordure */}
        <div className="flex-shrink-0 border border-gray-900 rounded-md p-2 text-gray-900 transition-transform duration-300 ease-out group-hover:scale-110">
          {icon}
        </div>

        {/* Content avec espacements ajustés */}
        <div className="flex-1 max-w-md">
          <div className="mb-4">
            <h4 className="font-medium text-gray-900 mb-2 transition-colors duration-300 ease-out group-hover:text-gray-900">
              {title}
            </h4>
            <p className="text-sm text-gray-500 uppercase">{subtitle}</p>
          </div>
          <div className="space-y-1.5">
            {descriptionArray.map((line, index) => (
              <p key={index} className="text-sm text-gray-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ConsultationSectionProps {}

export default function ConsultationSection({}: ConsultationSectionProps) {
  const consultationCards = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Consultation Sur Rendez-Vous",
      subtitle: "Mercredi et vendredi",
      description:
        "Mon cabinet est ouvert pour les consultations le mercredi et le vendredi.",
    },
    {
      icon: <Hospital className="w-5 h-5" />,
      title: "Bloc opératoire",
      subtitle: "Lundi et jeudi",
      description:
        "Les opérations chirurgicales sont planifiées les lundi et jeudi.",
    },
    {
      icon: <Stethoscope className="w-5 h-5" />,
      title: "Suivi post-opératoire",
      subtitle: "Après consultation",
      description: [
        "Vous pourrez planifier avec le secrétariat des rendez-vous post-opératoires.",
        "En cas d'urgence, laissez un message.",
      ],
    },
    {
      icon: <Info className="w-5 h-5" />,
      title: "À Savoir",
      subtitle: "Informations importantes",
      description: [
        "Médecin conventionné secteur 2",
        "Membre de la Société Française de Chirurgie Orthopédique : SOFCOT",
        "Membre de la Société Française de Chirurgie du Rachis : SFCR",
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title section */}
        <div className="flex flex-col items-center justify-center mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div
              className="w-3 h-3 bg-black rounded-full animate-pulse"
              aria-hidden="true"
            />
            <h2 className="text-xs uppercase tracking-wider text-gray-500">
              Consultation
            </h2>
          </div>
          <h1 className="text-xl text-gray-400 uppercase tracking-wide mt-2">
            Le parcours de soin
          </h1>
        </div>

        {/* Cards grid avec hauteurs égales */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="grid grid-cols-1 divide-y divide-gray-200">
            <div className="h-[250px]">
              <ConsultationCard {...consultationCards[0]} />
            </div>
            <div className="h-[250px]">
              <ConsultationCard {...consultationCards[1]} />
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-gray-200">
            <div className="h-[250px]">
              <ConsultationCard {...consultationCards[2]} />
            </div>
            <div className="h-[250px]">
              <ConsultationCard {...consultationCards[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
