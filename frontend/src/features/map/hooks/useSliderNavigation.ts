import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const useSliderNavigation = (emblaOptions = {}) => {
  const [viewportRef, embla] = useEmblaCarousel(emblaOptions);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanScrollPrev(embla.canScrollPrev());
    setCanScrollNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return {
    viewportRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext,
  };
};