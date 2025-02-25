import { Surgery } from "@/src/components/home/SurgerySection/types/surgery";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface SurgeryAccordionItemProps {
  surgery: Surgery;
  isActive: boolean;
  onToggle: () => void;
}

export const SurgeryAccordionItem = ({
  surgery,
  isActive,
  onToggle,
}: SurgeryAccordionItemProps) => (
  <div className="border-b border-gray-200/50 group">
    <button
      onClick={onToggle}
      className={`flex justify-between items-center w-full p-4 sm:p-6 text-left 
        focus:outline-none 
        transition-all duration-300 
        ${
          isActive
            ? "bg-brand-bay-of-many-50 text-brand-bay-of-many-700"
            : "text-slate-800 hover:bg-brand-bay-of-many-50 group-hover:text-brand-bay-of-many-700"
        }`}
    >
      <span
        className={`text-sm sm:text-base font-medium transition-colors ${
          isActive ? "font-semibold" : ""
        }`}
      >
        {surgery.title}
      </span>
      <ChevronDown
        className={`transition-all duration-300 ${
          isActive
            ? "rotate-180 text-brand-bay-of-many-600"
            : "rotate-0 text-slate-500 group-hover:text-brand-bay-of-many-600"
        }`}
      />
    </button>

    <div
      className={`grid transition-all duration-300 ${
        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <div className="p-4 sm:p-6 bg-brand-bay-of-many-50/50 text-slate-700 text-sm sm:text-base leading-relaxed">
          {surgery.description}
          <div className="mt-4">
            <Link
              href={`/surgery/${surgery.id}`}
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-bay-of-many-800 hover:text-brand-bay-of-many-600 transition-all"
            >
              <span>En savoir plus</span>
              <span className="h-px w-8 bg-brand-bay-of-many-600 transform origin-left scale-x-100 transition-transform duration-300 ease-out group-hover:scale-x-150"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
