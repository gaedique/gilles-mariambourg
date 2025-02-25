import { useEffect, useCallback } from "react";

const useIntersectionAnimation = (ref) => {
  const callback = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-10");
    }
  }, []);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [callback, ref]); // Ajout de ref dans les dépendances
};

export default useIntersectionAnimation;
