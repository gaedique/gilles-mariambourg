interface BenefitsListProps {
  benefits: string[];
}

export const BenefitsList = ({ benefits }: BenefitsListProps) => (
  <ul className="border-t border-slate-200">
    {benefits.map((item, index) => (
      <li key={index} className="group border-b border-slate-200">
        <div className="px-4 sm:px-6 py-4 flex items-center transition-colors duration-300 hover:bg-brand-bay-of-many-50">
          <span className="text-base text-slate-700 group-hover:text-slate-900">
            {item}
          </span>
        </div>
      </li>
    ))}
  </ul>
);
