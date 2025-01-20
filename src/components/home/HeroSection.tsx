"use client";

import React, { useEffect, useRef } from "react";
import { ActionLink } from "../ui/ActionLink";
import { CalendarSearch, Phone, ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span className="text-sm text-deep-blue/60 uppercase tracking-widest">
        Scroll
      </span>
      <ChevronDown className="text-deep-blue/60" />
    </div>
  );
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = 800;
      canvas.height = 800;
    };
    resizeCanvas();

    const drawHalo = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pulseIntensity = Math.sin(time * 0.5) * 0.3 + 0.7;

      const mainGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );

      mainGradient.addColorStop(
        0,
        `rgba(180, 200, 255, ${0.9 + Math.sin(time * 0.5) * 0.1})`
      );
      mainGradient.addColorStop(
        0.2,
        `rgba(200, 220, 255, ${0.7 * pulseIntensity})`
      );
      mainGradient.addColorStop(
        0.4,
        `rgba(180, 200, 255, ${0.5 * pulseIntensity})`
      );
      mainGradient.addColorStop(0.6, "rgba(150, 180, 255, 0.3)");
      mainGradient.addColorStop(0.8, "rgba(255, 200, 200, 0.1)");
      mainGradient.addColorStop(1, "rgba(100, 150, 255, 0)");

      ctx.fillStyle = mainGradient;
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();

      for (let i = 0; i < 4; i++) {
        const angle = (time + (i * Math.PI * 2) / 4) % (Math.PI * 2);
        const radius = 250;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;

        const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, 70);
        spotGradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        spotGradient.addColorStop(0.4, "rgba(220, 235, 255, 0.5)");
        spotGradient.addColorStop(0.7, "rgba(180, 210, 255, 0.2)");
        spotGradient.addColorStop(1, "rgba(150, 200, 255, 0)");

        ctx.fillStyle = spotGradient;
        ctx.beginPath();
        ctx.arc(x, y, 70, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawHalo);
    };

    drawHalo();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-8 min-h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[48%] w-[800px] h-[800px]">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>

        <div className="relative z-10 text-center pt-[25vh]">
          <div className="flex flex-col items-center">
            <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Gilles Mariambourg
            </h1>

            <p className="font-accent text-sm md:text-base text-gray-700 uppercase tracking-widest pt-[8vh] pb-[10vh]">
              Chirurgien orthopédiste et traumatologue
            </p>

            <div className="relative z-10 flex justify-center gap-8 mb-[10vh]">
              <ActionLink
                href="tel:+33563718804"
                icon={Phone}
                text="05 63 71 88 04"
              />
              <ActionLink
                href="https://www.doctolib.fr"
                icon={CalendarSearch}
                text="Doctolib"
                isExternal
              />
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </div>
    </section>
  );
}
