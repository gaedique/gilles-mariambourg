import { FC } from "react";

export const HeroBlob: FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute top-3/5 left-1/3 w-1/2 sm:w-1/3 h-3/5 rounded-full bg-brand-bay-of-many-300/20 blur-3xl animate-blob block"
      style={{ animationDelay: "4s" }}
    />
  </div>
);
