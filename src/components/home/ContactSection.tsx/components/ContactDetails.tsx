import { MapPin } from "lucide-react";
import { ContactInfo } from "../types";

interface ContactDetailsProps {
  contact: ContactInfo;
}

const ContactDetails = ({ contact }: ContactDetailsProps) => (
  <div className="flex flex-row md:flex-col items-center gap-6">
    <div className="flex items-center justify-center w-1/3">
      <MapPin className="w-8 h-8 md:w-6 md:h-6 md:mb-6 flex-shrink-0" />
    </div>
    <div className="space-y-6 flex-1">
      <div>
        <h2 className="text-lg uppercase">{contact.name}</h2>
        <p className="mt-2">{contact.address.street}</p>
        <p>{`${contact.address.postalCode} ${contact.address.city}`}</p>
      </div>
      <div>
        <p>Téléphone : {contact.phone}</p>
      </div>
      <div className="space-y-2">
        <div>
          <p className="font-medium">Secrétariat médical :</p>
          <p className="ml-4">• {contact.hours.office.days}</p>
          <p className="ml-4">• {contact.hours.office.time}</p>
        </div>
      </div>
      <div className="space-y-2">
        <div>
          <p className="font-medium text-brand-bay-of-many-100">
            {contact.hours.emergency}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactDetails;
