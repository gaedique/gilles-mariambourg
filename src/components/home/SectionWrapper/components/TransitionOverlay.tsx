interface TransitionOverlayProps {
  opacity: number;
}

export const TransitionOverlay = ({ opacity }: TransitionOverlayProps) => (
  <div
    className="absolute inset-0 pointer-events-none bg-brand-bay-of-many-900 transition-opacity duration-300"
    style={{
      opacity: opacity * 0.35,
      zIndex: 1,
    }}
  />
);
