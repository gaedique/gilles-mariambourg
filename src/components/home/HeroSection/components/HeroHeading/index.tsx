interface HeroHeadingProps {
  id: string;
  doctorName: string;
  doctorTitle: string;
  doctorLocation: string;
}

export const HeroHeading = ({
  id,
  doctorName,
  doctorTitle,
  doctorLocation,
}: HeroHeadingProps) => {
  return (
    <>
      <div className="text-center">
        <h1
          id={id}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8"
        >
          {doctorName}
        </h1>

        <div className="space-y-2">
          <p className="text-sm md:text-xl lg:text-2xl text-secondary font-accent font-light">
            {doctorTitle}
          </p>

          <p className="text-xs uppercase tracking-widest text-muted font-accent font-light">
            {doctorLocation}
          </p>
        </div>
      </div>
    </>
  );
};
