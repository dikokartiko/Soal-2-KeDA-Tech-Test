import { useState, useEffect } from "react";

const useStickyHeader = (threshold) => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const element = document.querySelector(threshold);
    if (element) {
      const heroBottom =
        element.getBoundingClientRect().bottom + window.scrollY;
      setSticky(window.scrollY > heroBottom);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyHeader;
