import { useState, useCallback } from "react";

const useRegisterModal = () => {
  const [isShown, setIsShown] = useState(false);

  const toggle = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return [isShown, toggle];
};

export default useRegisterModal;