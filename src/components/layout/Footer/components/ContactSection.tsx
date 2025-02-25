import ActionButton from "@/src/components/ui/ActionButton";
import { Phone } from "lucide-react";

const ContactSection = () => (
  <div className="col-span-1 sm:col-span-2 md:col-span-4 space-y-4 sm:space-y-6">
    <h3 className="text-lg font-semibold">Dr. Gilles Mariambourg</h3>
    <p className="text-brand-bay-of-many-100 text-sm">
      Chirurgien orthopédique
    </p>
    <div className="flex flex-col gap-3 sm:gap-4">
      <ActionButton
        href="https://www.doctolib.fr"
        external
        variant="dark"
        size="md"
        className="w-full sm:w-auto"
      >
        Prendre rendez-vous sur Doctolib
      </ActionButton>
      <ActionButton
        href="tel:+33563718804"
        variant="light"
        icon={Phone}
        size="md"
        className="w-full sm:w-auto"
      >
        05 63 71 88 04
      </ActionButton>
    </div>
  </div>
);

export default ContactSection;
