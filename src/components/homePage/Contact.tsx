"use client";

import { MapPin } from "lucide-react";
import InteractiveMap from "../utils/InteractiveMap";

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl flex  flex-col md:flex-row mb-24">
      {/* Info Panel */}
      <div className="w-[400px] bg-brand-bay-of-many-900 text-white p-8 flex flex-col">
        <MapPin className="w-6 h-6 mb-6" />

        <div className="space-y-6">
          <div>
            <h2 className="text-lg uppercase">POLYCLINIQUE DU SIDOBRE</h2>
            <p className="mt-2">Chemin de Saint Hippolyte</p>
            <p>81100 CASTRES</p>
          </div>

          <div>
            <p>Téléphone: 05 63 71 88 04</p>
          </div>

          <div className="space-y-1">
            <p>• Lundi au vendredi</p>
            <p>• 8:00 – 17:00</p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1">
        <InteractiveMap />
      </div>
    </div>
  );
};

export default ContactSection;
