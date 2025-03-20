import clsx from "clsx";

interface ContentItem {
  subtitle: string;
  items: string[];
}

interface SpineSection {
  title: string;
  content?: ContentItem[];
  items?: string[];
}

interface SpineSidebarProps {
  spineData: Record<string, SpineSection>;
  activeSection: string;
  scrollToSection: (key: string) => void;
  isScrolled: boolean;
}

const SpineSidebar = ({
  spineData,
  activeSection,
  scrollToSection,
  isScrolled,
}: SpineSidebarProps) => {
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
                Guide Rachis
              </h2>
            </div>
            <nav className="space-y-4">
              {Object.entries(spineData).map(([key, section]) => (
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

              {/* Additional navigation item for Fiches d'Information */}
              <button
                onClick={() => {
                  const downloadSection =
                    document.getElementById("fiches-information");
                  if (downloadSection) {
                    downloadSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group w-full text-left transition-all duration-300 text-slate-500 hover:text-slate-800"
              >
                <span className="text-sm uppercase tracking-wider font-accent">
                  Fiches d&apos;Information
                </span>
                <span className="block h-px w-8 mt-2 transition-all duration-300 bg-slate-300 scale-x-0 group-hover:scale-x-75" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SpineSidebar;
