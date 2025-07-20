"use client";

import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();

  // Animate on mount + loop every 5s
  useEffect(() => {
    const playAnimation = async () => {
      await animate(
        "span",
        { opacity: 1, display: "inline-block" },
        {
          delay: stagger(0.15),
          duration: 0.5,
          ease: "easeInOut",
        }
      );
    };

    playAnimation(); // run initially

    const interval = setInterval(() => {
      // Reset all span opacity
      animate("span", { opacity: 0, display: "none" }).then(() => {
        playAnimation(); // replay animation
      });
    }, 5000); // loop every 5s

    return () => clearInterval(interval);
  }, [animate]);

  // Break all words into individual letters
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, idx) => (
        <div key={`word-${idx}`} className="inline-block">
          {word.text.map((char, index) => (
            <motion.span
              key={`char-${index}`}
              className={cn(
                "text-white opacity-0 hidden",
                word.className
              )}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        "text-left text-base sm:text-xl md:text-3xl lg:text-5xl font-bold ",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
