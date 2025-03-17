import { AlertCircle, Clock, MapPin, Phone } from "lucide-react";
import OpenStatus from "../OpenStatus";
import { ContactDetailsProps } from "./types";

const ContactDetails = ({ contact }: ContactDetailsProps) => {
  return (
    <dl className="space-y-8">
      {/* Location Section */}
      <div className="flex items-start gap-4">
        <div
          className="p-2.5 bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/20"
          aria-hidden="true"
        >
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <dt className="sr-only">Adresse</dt>
          <h4 className="text-lg font-semibold uppercase tracking-wide font-heading">
            {contact.address.name}
          </h4>
          <address className="not-italic mt-2">
            <p className="text-brand-bay-of-many-100">
              {contact.address.street}
            </p>
            <p className="text-brand-bay-of-many-100">
              {`${contact.address.postalCode} ${contact.address.city}`}
            </p>
          </address>
        </div>
      </div>

      {/* Phone Section */}
      <div className="flex items-center gap-4">
        <div
          className="p-2.5 bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/20"
          aria-hidden="true"
        >
          <Phone className="w-5 h-5" />
        </div>
        <div>
          <dt className="sr-only">Téléphone</dt>
          <dd>
            <a
              href={`tel:${contact.details.phone.replace(/\s/g, "")}`}
              className="text-lg font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-brand-bay-of-many-800 rounded px-1"
            >
              {contact.details.phone}
            </a>
          </dd>
        </div>
      </div>

      {/* Hours Section */}
      <div className="flex items-start gap-4">
        <div
          className="p-2.5 bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/20"
          aria-hidden="true"
        >
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <dt className="font-medium mb-2 font-accent text-brand-bay-of-many-50">
            Secrétariat médical :
          </dt>
          <dd className="ml-1 text-brand-bay-of-many-100">
            <ul className="list-disc list-inside space-y-1">
              <li>{contact.hours.regular.days}</li>
              <li>{contact.hours.regular.time}</li>
            </ul>
            <OpenStatus />
          </dd>
        </div>
      </div>

      {/* Emergency Section */}
      <div className="flex items-start gap-4">
        <div
          className="p-2.5 bg-white/10 rounded-full flex-shrink-0 transition-all duration-300 hover:bg-white/20"
          aria-hidden="true"
        >
          <AlertCircle className="w-5 h-5" />
        </div>
        <div>
          <dt className="sr-only">En cas d&apos;urgence</dt>
          <dd className="font-medium text-brand-bay-of-many-100 font-accent">
            {contact.hours.emergency}
          </dd>
        </div>
      </div>
    </dl>
  );
};

export default ContactDetails;
