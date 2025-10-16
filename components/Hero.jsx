"use client";

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



export default function HeroSection() {
  return (
    <div className="relative z-[50] mx-auto my-10 flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-20">
      {/* Heading */}
      <h1
        className={`${spaceGrotesk.className} relative z-10 mx-auto max-w-5xl text-center text-3xl font-extrabold text-purple-800 md:text-5xl lg:text-7xl`}
      >
        {"Design. Animate. Launch. Instantly."
          .split(" ")
          .map((word, index) => (
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

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className={`${playfair.className} relative z-10 mx-auto max-w-2xl py-5 text-center text-lg text-neutral-700`}
      >
        With AfterRender’s AI-powered tools, you can bring your creative ideas
        to life — design and deploy stunning web experiences in just minutes.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 mt-20 w-full rounded-3xl border border-purple-300 bg-gradient-to-b from-purple-50 to-white p-3 shadow-2xl dark:from-purple-950 dark:to-purple-900 dark:border-purple-700"
      >
        <div className="w-full overflow-hidden rounded-2xl border border-purple-200 dark:border-purple-700">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[16/9] h-auto w-full object-cover"
          >
            <source src="/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </div>
  );
}
