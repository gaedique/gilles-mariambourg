import { FC } from "react";

export const HeroTitle: FC = () => {
  return (
    <>
      <div className="text-center opacity-0 animate-fade-in-up space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium opacity-0 animate-fade-in-up">
          Gilles Mariambourg
        </h1>

        <p
          className="text-sm sm:text-base md:text-xl text-brand-bay-of-many-600 font-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: "200ms" }}
        >
          Chirurgien Orthopédiste et traumatologue
        </p>

        <p
          className="text-xs uppercase tracking-widest text-brand-bay-of-many-400 font-light opacity-0 animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          Castres, France
        </p>
      </div>
    </>
  );
};
