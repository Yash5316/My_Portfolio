
import { useState, useEffect } from "react";

interface TypeAnimationProps {
  strings: string[];
  delay?: number;
  className?: string;
}

export default function TypeAnimation({ strings, delay = 150, className = "" }: TypeAnimationProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = strings[currentStringIndex];
      
      if (isDeleting) {
        setCurrentText(currentString.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentString.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentString) {
        // Start deleting after a delay
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentStringIndex, isDeleting, strings, delay]);

  return (
    <div className={`typing-container ${className}`}>
      <span className="text-primary">{currentText}</span>
      <span className="inline-block w-0.5 h-6 bg-primary animate-blink ml-0.5"></span>
    </div>
  );
}
