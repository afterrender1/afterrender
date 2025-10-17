"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiFramer,
  SiN8n,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

export default function AnimatedLogoShowcase() {
  const logos = [
    { name: "React", icon: SiReact, color: "#61DBFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Framer", icon: SiFramer, color: "#0055FF" },
    { name: "n8n", icon: SiN8n, color: "#FF6A3D" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black overflow-hidden">
      {/* Animated background pulse */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight mb-10 text-center">
        ⚡ Powered by Modern Tech
      </h1>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 z-10">
        {logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-950 shadow-lg shadow-black/40 p-6 md:p-10"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <Icon
                  className="h-16 w-16 md:h-20 md:w-20"
                  style={{ color: logo.color }}
                />
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  animate={{
                    boxShadow: [
                      `0 0 0px ${logo.color}`,
                      `0 0 30px ${logo.color}AA`,
                      `0 0 0px ${logo.color}`,
                    ],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <p className="mt-4 text-white text-sm md:text-base font-medium tracking-wide">
                {logo.name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none"></div>
    </section>
  );
}
