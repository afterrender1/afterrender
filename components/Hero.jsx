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


 <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  className="relative z-10 mt-20 w-full rounded-3xl border border-purple-300 
             bg-gradient-to-b from-purple-50 to-white 
             p-3 
            shadow-[0_0_45px_rgba(168,85,247,0.45)]
 
             dark:from-purple-950 dark:to-purple-900 
             dark:border-purple-700"
>
  <div className="w-full overflow-hidden rounded-2xl border border-purple-200 dark:border-purple-700">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="aspect-[16/9] h-auto w-full object-cover rounded-2xl"
    >
      <source src="/herovideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</motion.div>

    </div>
  );
}
