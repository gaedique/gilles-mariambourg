import { Clock, MapPin } from "lucide-react";
import { contact } from "@/src/data/siteData";

const exp = require("constants");

const InfoSection = () => (
  <section
    className="col-span-1 sm:col-span-1 md:col-span-5 space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-8"
    itemScope
    itemType="http://schema.org/MedicalOrganization"
  >
    {/* Hours */}
    <div className="md:col-span-2 space-y-4">
      <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
        Horaires
      </h4>
      <div className="flex items-start gap-3 text-brand-bay-of-many-100">
        <Clock size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
        <div
          className="text-sm"
          itemProp="openingHours"
          content={`Mo-Fr ${contact.hours.regular.time
            .replace(" - ", "-")
            .replace(/:/g, "")}`}
        >
          <p>{contact.hours.regular.days}</p>
          <p>{contact.hours.regular.time}</p>
        </div>
      </div>
    </div>

    {/* Address */}
    <div className="md:col-span-3 space-y-4">
      <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
        Adresse
      </h4>
      <div className="flex items-start gap-3 text-brand-bay-of-many-100">
        <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
        <address
          className="text-sm  not-italic"
          itemProp="address"
          itemScope
          itemType="http://schema.org/PostalAddress"
        >
          <p itemProp="name">{contact.address.name}</p>
          <p itemProp="streetAddress">{contact.address.street}</p>
          <p>
            <span itemProp="postalCode">{contact.address.postalCode}</span>{" "}
            <span itemProp="addressLocality">{contact.address.city}</span>
          </p>
        </address>
      </div>
    </div>
  </section>
);

export default InfoSection;
