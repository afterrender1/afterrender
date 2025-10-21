import React from "react";
import { motion } from "motion/react";
import { Playfair_Display } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const Heading = ({ text, className }) => {
  return (
    <h1
      className={`${spaceGrotesk.className} mx-auto max-w-5xl text-center text-3xl font-extrabold text-purple-800 md:text-5xl lg:text-7xl ${className}`}
    >
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.12,
            ease: "easeInOut",
          }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
};
