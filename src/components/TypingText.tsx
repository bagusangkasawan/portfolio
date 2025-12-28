'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  delayAfterComplete?: number;
  className?: string;
}

export default function TypingText({
  text,
  speed = 60,
  delayAfterComplete = 3000,
  className = '',
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayText('');
      setIsTyping(true);
      index = 0;

      typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          restartTimeout = setTimeout(startTyping, delayAfterComplete);
        }
      }, speed);
    };

    startTyping();

    return () => {
      clearInterval(typingInterval);
      clearTimeout(restartTimeout);
    };
  }, [text, speed, delayAfterComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className="animate-blink text-white ml-0.5">|</span>}
    </span>
  );
}
