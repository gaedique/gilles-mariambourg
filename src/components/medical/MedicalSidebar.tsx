import clsx from "clsx";
import { FileText } from "lucide-react";

interface ContentItem {
  subtitle: string;
  items: string[];
}

interface MedicalSection {
  title: string;
  content?: ContentItem[];
  items?: string[];
}

interface MedicalSidebarProps {
  title: string; // Ex: "Prothèse de la hanche"
  data: Record<string, MedicalSection>;
  activeSection: string;
  scrollToSection: (key: string) => void;
  isScrolled: boolean;
  includeDownloadLink?: boolean;
}

const MedicalSidebar = ({
  title,
  data,
  activeSection,
  scrollToSection,
  isScrolled,
  includeDownloadLink = true,
}: MedicalSidebarProps) => {
  return (
    <aside className="hidden lg:block lg:col-span-3 pb-32">
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
                {title}
              </h2>
            </div>
            <nav className="space-y-4">
              {Object.entries(data).map(([key, section]) => (
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

              {includeDownloadLink && (
                <>
                  <div className="border-t border-slate-200 my-2" />
                  <button
                    onClick={() => scrollToSection("downloads")}
                    className={clsx(
                      "group w-full text-left transition-all duration-300 px-3 py-2 rounded-md border",
                      activeSection === "downloads"
                        ? "bg-rose-50 border-rose-200 text-rose-600 font-semibold"
                        : "border-transparent hover:border-rose-100 hover:bg-rose-50 text-slate-500"
                    )}
                  >
                    <span className="flex items-center gap-2 text-sm uppercase tracking-wider font-accent">
                      <FileText className="w-4 h-4 text-brand-bay-of-many-600" />
                      Fiches d&apos;Informations
                    </span>
                  </button>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default MedicalSidebar;
