"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypewriter(words: string[], speed = 90, hold = 1500) {
  const safeWords = useMemo(() => (words.length ? words : [""]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safeWords[wordIndex % safeWords.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setIsDeleting(true);
          }
          return;
        }

        const next = current.slice(0, text.length - 1);
        setText(next);
        if (!next) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % safeWords.length);
        }
      },
      isDeleting ? speed / 2 : text === current ? hold : speed,
    );

    return () => clearTimeout(timeout);
  }, [hold, isDeleting, safeWords, speed, text, wordIndex]);

  return text;
}
