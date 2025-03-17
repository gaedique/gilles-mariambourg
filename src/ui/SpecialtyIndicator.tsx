"use client";

import React, { useState, useEffect } from "react";

const SpecialtyIndicator = ({ specialties, currentIndex }) => {
  return (
    <div className="relative h-12 overflow-hidden">
      {specialties.map((specialty, index) => (
        <div
          key={specialty.title}
          className={`absolute w-full transform transition-all duration-700 
            ${
              index === currentIndex
                ? "translate-y-0 opacity-100"
                : index < currentIndex
                ? "-translate-y-full opacity-0"
                : "translate-y-full opacity-0"
            }`}
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full">
            <p className="text-sm font-light">{specialty.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialtyIndicator;
