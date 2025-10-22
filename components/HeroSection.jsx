"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { MdLocalSee } from "react-icons/md";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function HeroSection() {
  const videologos = [
    { src: "/logos/cclogo.png" },
    { src: "/logos/lrlogo.png" },
    { src: "/logos/prlogo.png" },
    { src: "/logos/n8nlogo.jpg" },
    { src: "/logos/pslogo.png" },
    { src: "/logos/ailogo.png" },
    { src: "/logos/aftereffectlogo.png" },
    { src: "/logos/dvlogo.png" },
  ];

  const weblogos = [
    { src: "/logos/reactlogo.png" },
    { src: "/logos/nextjslogo.png" },
    { src: "/logos/mongodb.png" },
    { src: "/logos/tailwind.png" },
    { src: "/logos/nodejs.png" },
    { src: "/logos/firebase.png" },
    { src: "/logos/jslogo.png" },
    { src: "/logos/expressjs.png" },
  ];

  const LogoGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8 place-items-center">
      {videologos.map((logo, index) => (
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
              width={70}
              height={70}
              className="h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  const LogoGrid2 = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8 place-items-center">
      {weblogos.map((logo, index) => (
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
              width={70}
              height={70}
              className="h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col 
 ">
      <div
        className={`flex flex-col items-center justify-center min-h-[80vh] text-center px-6 pt-25  

`}
      >
        <h4
          className={`${poppins.className} text-3xl md:text-5xl lg:text-4xl font-semibold leading-tight text-white/80 max-w-4xl`}
        >
          We will Edit your Short / Long Form Videos in High Quality with{" "}
          <span className="">Super Fast Turnaround Time</span>
        </h4>
        <h4
          className={`${poppins.className} text-3xl mt-4 md:text-5xl lg:text-2xl font-semibold leading-tight text-white/60 max-w-4xl`}
        >
         You can even Get Ideas & Scripts After we research in your Niche. <br></br>
(Say no to Freelance Video Editors)
        </h4>

        <section className="relative flex flex-col md:flex-row items-center justify-center bg-transparent overflow-hidden w-full mt-10">
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

          <div className="w-full md:w-[60%] flex justify-center items-center z-10 my-8 md:my-0 scale-105">
            <div className="relative w-[95%] aspect-video  overflow-hidden shadow-2xl">
              <video
                src="/herovideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>
      </div>
     <div className="flex flex-col sm:flex-row gap-4 py-5 items-center justify-center  ">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168,85,247,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className={`${poppins.className}         bg-[#0047d6]
 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300`}
          >
            Book A Call
       
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className={`${poppins.className}  flex items-center gap-3 bg-[#0047d6]  hover:bg-[#3b74e4] font-semibold px-8 py-4 rounded-lg transition-all duration-300`}
          >
            See Our Work <MdLocalSee />

          </motion.button>
        </div>

    </div>
  );
}
