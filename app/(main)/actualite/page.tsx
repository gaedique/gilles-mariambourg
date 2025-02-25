// app/(main)/actualite/page.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/src/components/ui/Card";
import { Video } from "lucide-react";

export default function ActualitePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-24">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          L'Endoscopie Biportale Rachidienne
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Une technique mini-invasive révolutionnaire pour la chirurgie du
          rachis
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <section className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Une expertise unique en France
            </h2>
            <p className="text-slate-600">
              L'endoscopie biportale rachidienne représente une avancée majeure
              dans le traitement des pathologies du rachis. Cette technique
              mini-invasive, pratiquée par le Dr Mariambourg, permet une
              récupération plus rapide et minimise les traumatismes tissulaires.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
              Avantages de la technique
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600">1</span>
                </div>
                <span className="text-slate-600">
                  Cicatrices minimales grâce à deux petites incisions
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600">2</span>
                </div>
                <span className="text-slate-600">
                  Récupération post-opératoire accélérée
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600">3</span>
                </div>
                <span className="text-slate-600">
                  Risque d'infection réduit
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-1">
                  <span className="text-blue-600">4</span>
                </div>
                <span className="text-slate-600">
                  Meilleure visualisation pour le chirurgien
                </span>
              </li>
            </ul>
          </section>

          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Applications cliniques
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Hernies discales</li>
                <li>• Sténoses du canal lombaire</li>
                <li>• Compressions radiculaires</li>
                <li>• Certaines formes d'arthrose vertébrale</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Media Content */}
        <div className="space-y-8">
          {/* Video Section */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              className="w-full h-full"
              src="/api/placeholder/640/360"
              title="Présentation de l'endoscopie biportale"
              allowFullScreen
            />
          </div>

          {/* Media Coverage */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Video className="w-6 h-6" />
                Passage TV
              </h3>
              <p className="text-slate-600 mb-4">
                Découvrez l'interview du Dr Mariambourg présentant cette
                technique innovante lors de son passage télévisé.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                Voir l'interview complète
                <span className="ml-2">→</span>
              </a>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-slate-600">
                Taux de satisfaction des patients
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">-50%</div>
              <div className="text-sm text-slate-600">
                Temps de récupération vs chirurgie classique
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
