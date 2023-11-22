import { useState, useEffect } from "react";

const useTypingAnimation = (text, typingSpeed = 200) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (typedText.length < text.length) {
        const timeoutId = setTimeout(() => {
          setTypedText(text.substring(0, typedText.length + 1));
        }, typingSpeed);

        return () => clearTimeout(timeoutId);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, typedText, typingSpeed, isTyping]);

  return { typedText, isTyping };
};

export default useTypingAnimation;
