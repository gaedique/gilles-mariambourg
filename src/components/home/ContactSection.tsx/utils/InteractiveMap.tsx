"use client";

const InteractiveMap = () => {
  const handleMapClick = () => {
    window.open(
      "https://maps.google.com/?q=Polyclinique+du+Sidobre,+Chemin+de+Saint+Hippolyte,+81100+Castres",
      "_blank"
    );
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
      onClick={handleMapClick}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.9876543210123!2d2.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzM0LjQiTiAywrAwNyczNC40IkU!5e0!3m2!1sen!2sfr!4v1234567890123!5m2!1sen!2sfr"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default InteractiveMap;
