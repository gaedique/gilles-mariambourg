import { doctor, meta, navigation } from "@/src/data/siteData";
import Link from "next/link";

const BottomBar = () => (
  <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-brand-bay-of-many-800">
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm text-brand-bay-of-many-300">
      <p className="text-center sm:text-left">
        © <span itemProp="copyrightYear">{new Date().getFullYear()}</span>{" "}
        <span itemProp="copyrightHolder">{doctor.fullName}</span>. Tous droits
        réservés.
      </p>

      <div className="flex gap-4 sm:gap-6">
        {navigation.legal.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="hover:text-white transition-colors"
            aria-label={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <Link
        href={meta.creator.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-brand-bay-of-many-300 hover:text-white transition-colors group"
        aria-label={`Site créé par ${meta.creator.name}`}
      >
        Made with{" "}
        <span className="inline-block animate-heartbeat" aria-hidden="true">
          ❤️
        </span>{" "}
        by{" "}
        <span className="text-brand-bay-of-many-200 group-hover:text-white">
          {meta.creator.name}
        </span>
      </Link>
    </div>
  </div>
);

export default BottomBar;
