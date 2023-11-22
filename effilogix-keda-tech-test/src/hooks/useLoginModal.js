// File: src/hooks/useModal.js
import { useState, useCallback } from "react";

const useLoginModal = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return [isShown, toggle];
};

export default useLoginModal;
