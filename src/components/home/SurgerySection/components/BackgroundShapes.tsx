interface BackgroundShapesProps {
  isVisible: boolean;
}

export const BackgroundShapes = ({ isVisible }: BackgroundShapesProps) => (
  <>
    <div
      className={`absolute top-1/4 -left-24 w-2/3 h-2/3 
        bg-brand-bay-of-many-50/30 
        rounded-tr-[200px] 
        transform -rotate-6 
        transition-all duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0 -translate-x-full"}
        hidden md:block`}
      style={{
        zIndex: 1,
        transformOrigin: "left center",
      }}
    />
    <div
      className={`absolute top-1/3 right-0 w-1/2 h-1/2 
        bg-brand-bay-of-many-100/20 
        rounded-bl-[250px] 
        blur-[80px] 
        transition-all duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0 translate-x-full"}
        hidden md:block`}
      style={{
        zIndex: 1,
        transformOrigin: "right center",
      }}
    />
  </>
);
