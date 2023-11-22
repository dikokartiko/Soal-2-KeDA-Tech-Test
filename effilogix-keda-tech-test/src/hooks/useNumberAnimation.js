// useNumberAnimation.js
import { useEffect } from 'react';

const useNumberAnimation = (startValue, endValue, duration, elementId) => {
  useEffect(() => {
    const animateValue = (start, end, duration, elementId) => {
      const obj = document.getElementById(elementId);
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start).toLocaleString() + "+";
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(startValue, endValue, duration, elementId);
  }, [startValue, endValue, duration, elementId]);
};

export default useNumberAnimation;
