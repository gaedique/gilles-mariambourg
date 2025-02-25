"use client";
import ContactDetails from "./components/ContactDetails";
import { POLYCLINIC_CONTACT } from "./constants";
import InteractiveMap from "./utils/InteractiveMap";

const ContactSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl flex flex-col md:flex-row max-md:divide-y max-md:divide-gray-300">
        {/* Info Panel */}
        <div className="w-full md:w-[400px] bg-brand-bay-of-many-900 text-white p-8 flex flex-col justify-center max-md:py-6 md:rounded-l-3xl">
          <ContactDetails contact={POLYCLINIC_CONTACT} />
        </div>

        {/* Map */}
        <div className="flex-1 w-full h-[300px] md:h-[550px] md:rounded-r-3xl overflow-hidden">
          <InteractiveMap />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
