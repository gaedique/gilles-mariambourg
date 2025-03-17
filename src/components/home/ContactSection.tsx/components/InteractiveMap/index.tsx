"use client";
import useInView from "@/src/hooks/useInView";
import { useState } from "react";

const InteractiveMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  // Handle map click to open Google Maps in a new tab
  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Polyclinique+du+Sidobre,+Chemin+de+Saint+Hippolyte,+81100+Castres",
      "_blank"
    );
  };

  // Handle map loading state
  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-full overflow-hidden shadow-lg cursor-pointer"
      onClick={handleMapClick}
    >
      {/* Skeleton loader */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="text-gray-500">Chargement de la carte...</div>
        </div>
      )}

      {/* Only load the iframe when it's in view */}
      {isInView && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9876543210123!2d2.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzM0LjQiTiAywrAwNyczNC40IkU!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
          className={`w-full h-full transition-opacity duration-500 ${
            mapLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
          title="Localisation de la Polyclinique du Sidobre"
        />
      )}

      {/* Pulsing effect and pin overlay */}
      {mapLoaded && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          {/* Circle to cover Google pin */}
          <div className="bg-[#f5f0e5] rounded-full w-24 h-24"></div>

          {/* Pulsing animations */}
          <div
            className="absolute w-12 h-12"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-amber-500 opacity-25 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-amber-500 opacity-50 animate-pulse"></div>
          </div>

          {/* Custom bouncing pin */}
          <div
            className="absolute animate-bounce"
            style={{
              top: "35%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#f44336"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-lg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" fill="#ffffff" />
            </svg>
          </div>
        </div>
      )}

      {/* Interactive overlay with subtle visual feedback */}
      <div className="absolute inset-0 bg-brand-bay-of-many-800/0 hover:bg-brand-bay-of-many-800/10 transition-colors duration-300">
        <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3c-2.2 0-4 1.8-4 4 0 2.4 4 9 4 9s4-6.6 4-9c0-2.2-1.8-4-4-4Z" />
            <circle cx="12" cy="7" r="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
