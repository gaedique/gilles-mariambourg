import clsx from "clsx";
import { DoctorSidebarProps } from "./types";

const DoctorSidebar = ({
  biographieData,
  activeSection,
  scrollToSection,
  isScrolled,
}: DoctorSidebarProps) => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div
        className={`sticky ${
          isScrolled ? "top-32" : "top-24"
        } transition-all duration-300`}
      >
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-brand-bay-of-many-600 rounded-full animate-pulse" />
              <h2 className="text-xs uppercase tracking-wider text-brand-bay-of-many-600 font-accent font-medium">
                Navigation
              </h2>
            </div>
            <nav className="space-y-4">
              {Object.entries(biographieData).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={clsx(
                    "group w-full text-left transition-all duration-300",
                    activeSection === key
                      ? "text-brand-bay-of-many-600 font-medium"
                      : "text-slate-500 hover:text-slate-800"
                  )}
                >
                  <span className="text-sm uppercase tracking-wider font-accent">
                    {section.title}
                  </span>
                  <span
                    className={clsx(
                      "block h-px w-8 mt-2 transition-all duration-300",
                      activeSection === key
                        ? "bg-brand-bay-of-many-600 scale-x-100"
                        : "bg-slate-300 scale-x-0 group-hover:scale-x-75"
                    )}
                  />
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DoctorSidebar;
