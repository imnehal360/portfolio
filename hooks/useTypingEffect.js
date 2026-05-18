'use client';

import { useEffect, useState } from 'react';

export default function useTypingEffect(words) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = words[index % words.length];

    let char = 0;

    const interval = setInterval(() => {
      setText(current.slice(0, char));
      char++;

      if (char > current.length) {
        clearInterval(interval);

        setTimeout(() => {
          setIndex(prev => prev + 1);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return text;
}