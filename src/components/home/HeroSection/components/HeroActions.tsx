import { FC } from "react";
import { Phone } from "lucide-react";
import ActionButton from "@/components/ui/ActionButton";

export const HeroActions: FC = () => (
  <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-8">
    <ActionButton href="tel:+33123456789" icon={Phone} variant="light">
      Appeler
    </ActionButton>
    <ActionButton href="https://www.doctolib.fr" external variant="dark">
      DOCTOLIB
    </ActionButton>
  </div>
);
