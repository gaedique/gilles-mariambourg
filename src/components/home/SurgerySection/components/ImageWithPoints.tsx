import Image from "next/image";
import { Surgery } from "@/src/components/home/SurgerySection/types/surgery";

interface ImageWithPointsProps {
  activeSurgery: Surgery | undefined;
}

export const ImageWithPoints = ({ activeSurgery }: ImageWithPointsProps) => (
  <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl">
    <Image
      src="/images/old_woman_running.png"
      alt="Illustration chirurgie"
      fill
      className="object-cover transition-transform duration-700 hover:scale-105"
    />
    {activeSurgery?.points.map((point, index) => (
      <div
        key={index}
        className="absolute w-4 h-4 bg-red-500 rounded-full animate-pulse"
        style={{ top: point.top, left: point.left }}
      >
        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping" />
      </div>
    ))}
  </div>
);
