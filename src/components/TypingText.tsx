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

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    let restartTimeout: NodeJS.Timeout;

    const startTyping = () => {
      setDisplayText('');
      index = 0;

      typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
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
      <span 
        className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-1 animate-blink align-middle"
        style={{ WebkitTextFillColor: 'initial' }}
      />
    </span>
  );
}
