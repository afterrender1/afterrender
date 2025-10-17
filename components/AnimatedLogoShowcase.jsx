"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogoShowcase() {
  const logos = [
    { src: "/logos/reactlogo.png" },
    { src: "/logos/njslogo.jpg" },
    { src: "/logos/prlogo.png" },
    { src: "/logos/n8nlogo.jpg" },
    { src: "/logos/pslogo.png" },
    { src: "/logos/ailogo.png" },
    { src: "/logos/aelogo.png" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-transparent my-20 py-16 overflow-hidden">
      {/* Subtle glow background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_80%)] pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Animated Logo Grid (original layout restored) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols- xl:grid-cols-3 gap-10 z-10">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.05, 1],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 5 + index * 0.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="relative flex items-center justify-center rounded-2xl bg-transparent p-3"
              whileHover={{ scale: 1.15, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Image
                src={logo.src}
                alt="logo"
                width={30}
                height={30}
                className="object-contain md:w-[80px] md:h-[50px] w-[60px] h-[60px]"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
