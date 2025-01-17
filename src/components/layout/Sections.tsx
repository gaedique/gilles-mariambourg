import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  hasSvg?: boolean;
}

export function ColoredSection({ children, hasSvg = false }: SectionProps) {
  return (
    <section className="relative w-screen h-screen bg-gradient-to-b from-hero-top to-hero-bottom">
      {hasSvg && (
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Image
            src="/images/degraded.svg"
            alt="Decorative background"
            width={1440}
            height={72}
            className="w-full h-auto"
          />
        </div>
      )}
      <div className="mx-40 h-full flex flex-col justify-center z-20">
        {children}
      </div>
    </section>
  );
}

export function WhiteSection({ children }: SectionProps) {
  return <section className="h-screen mx-40">{children}</section>;
}
