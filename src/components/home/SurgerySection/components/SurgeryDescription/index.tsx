import { SecondaryLink } from "@/src/ui/SecondaryLink";
import { SurgeryDescriptionProps } from "./types";

export const SurgeryDescription = ({
  surgery,
  ctaText,
  ctaLink,
}: SurgeryDescriptionProps) => {
  // Generate a URL using the SEO-friendly slug if available, otherwise fall back to ID
  const urlSlug = surgery.slug || surgery.id;
  const surgeryUrl = `${ctaLink}/${urlSlug}`;

  return (
    <div className="w-full bg-white/80 rounded-lg p-6 border border-indigo-100 shadow-sm">
      <h4 className="text-base font-heading font-bold sm:text-lg leading-relaxed text-justify mb-3">
        {surgery.title}
      </h4>
      <p
        className="text-sm sm:text-base text-secondary leading-relaxed text-justify mb-6"
        itemProp="description"
      >
        {surgery.description}
      </p>
      <SecondaryLink
        href={surgeryUrl}
        ariaLabel={`Découvrir les détails de la chirurgie ${surgery.title}`}
        title={`Plus d'informations sur ${surgery.title}`}
        variant="line"
      >
        {ctaText}
      </SecondaryLink>
    </div>
  );
};
