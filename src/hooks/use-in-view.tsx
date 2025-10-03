import { useEffect, useRef, useState } from "react";

export const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If you want to detect the element only the first time it enters the viewport, 
        // uncomment the following lines and comment out the continuous observer logic.
        // This will stop observing after the element is in view once.
        // if (entry.isIntersecting) {
        //   setIsInView(true);
        //   observer.unobserve(entry.target);
        // }

        // Otherwise, keep observing and update the state whenever visibility changes:
        setIsInView(entry.isIntersecting); // Comment this line if using one-time observation above
      },
      { threshold }
    );

    const currentRef = ref.current; // ✅ Capture current value to avoid cleanup timing issues

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // ✅ Use captured value in cleanup
    };
  }, [threshold]);

  return [ref, isInView] as const;
};

// Hook for multiple elements
export const useMultipleInView = (count: number, threshold = 0.2) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [inViews, setInViews] = useState<boolean[]>(() => Array(count).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((ref, idx) => {
      if (!ref) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          setInViews((prev) => {
            const copy = [...prev];
            copy[idx] = entry.isIntersecting;
            return copy;
          });
        },
        { threshold }
      );
      observer.observe(ref);
      observers.push(observer);
    });
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, threshold]);

  return [refs, inViews] as const;
};
