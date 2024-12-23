"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      if (i >= text.length) {
        clearInterval(typingEffect);
      } else {
        setI(i + 1);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  const formattedText = (displayedText || text).split('\n').map((line, index) => (
    <span key={index} className="block">
      {line}
    </span>
  ));

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[3rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {formattedText}
    </h1>
  );
}
