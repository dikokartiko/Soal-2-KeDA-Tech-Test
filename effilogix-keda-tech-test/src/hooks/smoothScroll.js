import { useCallback } from "react";

const useSmoothScroll = () => {
  const smoothScroll = useCallback((id) => {
    const element = document.getElementById(id);

    if (element && "scrollBehavior" in document.documentElement.style) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback for browsers that don't support scrollBehavior
      window.scrollTo(0, element.offsetTop);
    }
  }, []);

  return smoothScroll;
};

export default useSmoothScroll;
