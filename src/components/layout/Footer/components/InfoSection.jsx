import { Clock, MapPin } from "lucide-react";

const exp = require("constants");

const InfoSection = () => (
  <div className="col-span-1 sm:col-span-1 md:col-span-5 space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-8">
    <div className="md:col-span-2 space-y-4">
      <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
        Horaires
      </h4>
      <div className="flex items-start gap-3 text-brand-bay-of-many-100">
        <Clock size={16} className="mt-1 flex-shrink-0" />
        <div className="text-sm">
          <p>Lundi - Vendredi</p>
          <p>8:00 - 19:00</p>
        </div>
      </div>
    </div>

    <div className="md:col-span-3 space-y-4">
      <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
        Adresse
      </h4>
      <div className="flex items-start gap-3 text-brand-bay-of-many-100">
        <MapPin size={16} className="mt-1 flex-shrink-0" />
        <div className="text-sm">
          <p>Polyclinique du Sidobre</p>
          <p>Chemin de Saint Hippolyte</p>
          <p>81100 CASTRES</p>
        </div>
      </div>
    </div>
  </div>
);

export default InfoSection;
