"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {Heading } from "@/components/Heading"

export default function HeroSection() {
  const logos = [
    { src: "/logos/reactlogo.png" },
    { src: "/logos/njslogo.jpg" },
    { src: "/logos/prlogo.png" },
    { src: "/logos/n8nlogo.jpg" },
    { src: "/logos/pslogo.png" },
    { src: "/logos/ailogo.png" },
    { src: "/logos/aelogo.png" },
  ];

  const LogoGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8 place-items-center">
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
  className="relative flex items-center justify-center rounded-2xl p-3 bg-transparent"
  whileHover={{ scale: 1.15, rotate: 2 }}
  transition={{ type: "spring", stiffness: 200, damping: 12 }}
>
  <Image
    src={logo.src}
    alt="logo"
    width={100}          // keep fixed width for Next.js optimization
    height={100}         // keep fixed height
    className="object-contain rounded md:w-[80px] md:h-auto w-[60px] h-auto" // make height auto to maintain aspect ratio
  />
</motion.div>

        </motion.div>
      ))}
    </div>
  );

  return (
    <>
    <div className="flex flex-col">
    <Heading text={"Design. Animate. Launch. Instantly."} className={"py-27"}/>


    <section className="relative flex flex-col md:flex-row items-center justify-center bg-transparent  overflow-hidden">
      {/* Glow Background */}
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

      {/* Left Logos */}
      <div className="hidden md:flex flex-col items-center justify-center w-[25%] z-10">
        <LogoGrid />
      </div>

      {/* Center Video (Bigger Size) */}
      <div className="w-full md:w-[50%] flex justify-center items-center z-10 my-8 md:my-0 scale-105">
        <div className="relative w-[95%] aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <video
            src="/herovideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Logos */}
      <div className="hidden md:flex flex-col items-center justify-center w-[25%] z-10">
        <LogoGrid />
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden mt-10 w-full justify-center">
        <LogoGrid />
      </div>
    </section>
    </div>
    </>
  );
}
