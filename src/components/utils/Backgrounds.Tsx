import React from "react";

const AboutBackground = () => (
  <div className="relative w-full min-h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute right-0 top-0 w-2/3 h-full bg-blue-50/80 
        transform -skew-x-12 rounded-bl-[120px]"
      />
      <div
        className="absolute right-20 top-20 w-1/3 h-2/3 bg-blue-100/50 
        transform rotate-12 rounded-tl-[80px]"
      />
    </div>
  </div>
);

const ExpertiseBackground = () => (
  <div className="relative w-full min-h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute left-0 top-0 w-1/2 h-full bg-blue-50/80 
        transform rotate-6 rounded-tr-[200px]"
      />
      <div
        className="absolute right-0 bottom-0 w-3/4 h-2/3 bg-blue-100/50 
        transform -rotate-12 rounded-tl-[150px] rounded-br-[100px]"
      />
    </div>
  </div>
);

const ConsultationBackground = () => (
  <div className="relative w-full min-h-screen">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute right-0 top-0 w-full h-full">
        <div
          className="absolute right-0 top-0 w-2/3 h-full bg-blue-50/80 
          transform origin-top-right scale-x-125 rounded-bl-[180px]"
        />
        <div
          className="absolute left-20 bottom-20 w-1/2 h-1/2 bg-blue-100/50 
          transform -rotate-45 rounded-tr-[120px] rounded-bl-[120px]"
        />
      </div>
    </div>
  </div>
);

export { AboutBackground, ConsultationBackground, ExpertiseBackground };
