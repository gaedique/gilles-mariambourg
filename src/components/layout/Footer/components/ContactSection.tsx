import { contact, doctor } from "@/src/data/siteData";
import CtaButton from "@/src/ui/CtaButton";
import { Phone } from "lucide-react";

const ContactSection = () => (
  <section className="col-span-1 sm:col-span-2 md:col-span-4 space-y-4 sm:space-y-6">
    <h4 className="text-lg font-semibold">{doctor.fullName}</h4>
    <p className="text-brand-bay-of-many-100 text-sm">{doctor.title}</p>
    <div className="flex flex-col gap-3 sm:gap-4">
      <CtaButton
        href="https://www.doctolib.fr/chirurgien-orthopediste/castres/gilles-mariambourg-castres"
        external
        variant="dark"
        size="md"
        className="w-full sm:w-auto"
        aria-label="Prendre rendez-vous sur Doctolib"
      >
        Prendre rendez-vous sur Doctolib
      </CtaButton>
      <CtaButton
        href="tel:+33563718804"
        variant="light"
        icon={Phone}
        size="md"
        className="w-full sm:w-auto"
        aria-label="Appeler le cabinet"
      >
        <span itemProp="telephone">{contact.details.phone}</span>
      </CtaButton>
    </div>
  </section>
);

export default ContactSection;
