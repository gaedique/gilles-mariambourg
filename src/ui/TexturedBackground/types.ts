export interface TexturedBackgroundProps {
  className?: string;
  children?: React.ReactNode;

  // Original properties
  baseFrom?: string;
  baseVia?: string;
  baseTo?: string;
  spotOneColor?: string;
  spotTwoColor?: string;
  noiseUrl?: string;
  noiseOpacity?: number;
  noiseContrast?: number;
  flipX?: boolean;
  flipY?: boolean;

  // New paper texture properties
  baseColor?: string;
  accentColor?: string;
  paperUrl?: string;
  paperOpacity?: number;
  paperIntensity?: number;
  shadowIntensity?: number;
  quality?: "low" | "medium" | "high";
}
