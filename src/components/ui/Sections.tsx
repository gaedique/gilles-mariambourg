import Image from "next/image";

interface SectionProps {
  children: React.ReactNode;
  hasSvg?: boolean;
}

export function ColoredSection({ children, hasSvg = false }: SectionProps) {
  return (
    <section className="relative w-full h-screen mx-auto bg-gradient-to-b from-gray-100 to-white rounded-tl-3xl rounded-tr-3xl">
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
      <div className="max-w-[1160px] flex flex-col justify-center mx-40 z-20">
        {children}
      </div>
    </section>
  );
}

export function WhiteSection({ children }: SectionProps) {
  return (
    <section className="h-screen max-w-[1160px] mx-auto mt-24 rounded-tl-5xl rounded-tr-2xl">
      {children}
    </section>
  );
}
