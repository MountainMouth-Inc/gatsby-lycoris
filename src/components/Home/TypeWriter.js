import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingDelay = 100, erasingDelay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (subIndex < words[index].length + 1) {
      setTimeout(() => {
        setSubIndex(subIndex + 1);
      }, typingDelay);
    } else if (subIndex === words[index].length + 1) {
      setTimeout(() => {
        setSubIndex(0);
        setIndex((index + 1) % words.length);
      }, erasingDelay);
    }
  }, [subIndex, index, words, typingDelay, erasingDelay]);

  return (
    <div>
      <span>{`${words[index].substring(0, subIndex)}`}</span>
      <span className={`${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </div>
  );
};

export default Typewriter;
