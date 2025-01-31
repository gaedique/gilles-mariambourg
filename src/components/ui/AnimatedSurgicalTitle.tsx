"use client";
import React, { useEffect, useRef } from "react";

const AnimatedSurgicalTitle = ({
  words = ["Endoscopie", "biportale", "rachidienne"],
  variant = "fade",
}) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (variant === "fade") {
      const letters = titleRef.current.querySelectorAll(".letter");
      letters.forEach((letter, index) => {
        letter.style.animation = `fadeIn 0.5s ease-out ${
          index * 0.05
        }s forwards`;
      });
    } else if (variant === "cut") {
      const words = titleRef.current.querySelectorAll(".word");
      words.forEach((word, index) => {
        word.style.animation = `cutReveal 1s ease-out ${index * 0.3}s forwards`;
      });
    }
  }, [variant]);

  return (
    <div
      ref={titleRef}
      className="flex flex-wrap justify-center items-baseline gap-6 md:gap-8 overflow-hidden mb-12"
    >
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cutReveal {
          0% {
            clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
            transform: translateY(10px);
            opacity: 0;
          }
          50% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translateY(5px);
            opacity: 0.5;
          }
          100% {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>

      {variant === "fade"
        ? words.map((word) => (
            <span
              key={word}
              className="text-5xl font-bold text-gray-900 uppercase tracking-tight"
            >
              {word.split("").map((letter, letterIndex) => (
                <span
                  key={letterIndex}
                  className="letter inline-block opacity-0"
                  style={{ willChange: "opacity, transform" }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))
        : words.map((word) => (
            <span
              key={word}
              className="word text-5xl font-bold text-gray-900 uppercase tracking-tight inline-block opacity-0"
              style={{
                willChange: "clip-path, transform, opacity",
              }}
            >
              {word}
            </span>
          ))}
    </div>
  );
};

export default AnimatedSurgicalTitle;
