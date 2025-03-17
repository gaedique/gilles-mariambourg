import { TexturedBackgroundProps } from "./types";

const TexturedBackground = ({
  className = "",
  children,
  baseFrom = "from-blue-100/40",
  baseVia = "via-teal-100/60",
  baseTo = "to-slate-100/40",
  spotOneColor = "bg-blue-200/30",
  spotTwoColor = "bg-teal-100/20",
  noiseUrl = "/textures/grid-texture.jpg",
  noiseOpacity = 40,
  noiseContrast = 120,
  flipX = false,
  flipY = false,
}: TexturedBackgroundProps) => {
  // Determine spot positions based on flip parameters
  const spotOnePosition = `${flipY ? "bottom" : "top"}-0 ${
    flipX ? "right" : "left"
  }-0`;
  const spotTwoPosition = `${flipY ? "top" : "bottom"}-0 ${
    flipX ? "left" : "right"
  }-0`;

  // Determine transform based on flip
  const spotOneTransform = flipX ? "translate-x-[-25%]" : "translate-x-1/4";

  return (
    <div className={className}>
      {/* Textured Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${baseFrom} ${baseVia} ${baseTo}`}
        ></div>

        {/* Color spots for more variation */}
        <div
          className={`absolute ${spotOnePosition} w-1/3 h-1/2 ${spotOneColor} blur-3xl rounded-full transform ${spotOneTransform}`}
        ></div>
        <div
          className={`absolute ${spotTwoPosition} w-1/2 h-1/3 ${spotTwoColor} blur-3xl rounded-full`}
        ></div>

        {/* Higher contrast noise */}
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            backgroundImage: `url(${noiseUrl})`,
            backgroundSize: "125px 125px",
            filter: `contrast(${noiseContrast}%)`,
            opacity: noiseOpacity / 100,
          }}
        ></div>
        {/* Light shadow overlay to add depth */}
        <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
};

export default TexturedBackground;
