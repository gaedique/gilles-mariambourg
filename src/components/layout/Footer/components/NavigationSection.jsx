import { navigation } from "@/src/data/siteData";
import Link from "next/link";

const NavigationSection = () => (
  <nav
    className="col-span-1 sm:col-span-1 md:col-span-3 md:ml-8 lg:ml-16 space-y-4"
    aria-label="Navigation secondaire"
  >
    <h4 className="text-sm font-medium text-brand-bay-of-many-200 uppercase tracking-wider">
      Navigation
    </h4>
    <ul className="space-y-2 sm:space-y-3">
      {navigation.main.map((item) => (
        <li key={item.label}>
          <Link
            href={item.path}
            className="text-brand-bay-of-many-100 hover:text-white transition-colors text-sm inline-block py-1"
            aria-label={`Aller à la page ${item.label}`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationSection;
