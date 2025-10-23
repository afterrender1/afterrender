"use client";

import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { IconStarFilled } from "@tabler/icons-react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 },
  },
};

export default function TestimonialsGrid() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Company A",
      quote: "AfterRender transformed our creative workflow. The results are amazing!",
      src: "/images/testimonial1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Marketing Head, Company B",
      quote: "Their AI-powered tools saved us hours of work and boosted engagement.",
      src: "/images/testimonial2.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      designation: "Founder, Startup C",
      quote: "Working with AfterRender was seamless — highly recommended!",
      src: "/images/testimonial3.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Sophia Williams",
      designation: "Designer, Studio D",
      quote: "A perfect balance between creativity and efficiency!",
      src: "/images/testimonial4.jpg",
      rating: 4,
    },
    {
      id: 5,
      name: "Daniel Brown",
      designation: "Developer, Tech E",
      quote: "Super intuitive and easy to use — a must-have for teams.",
      src: "/images/testimonial5.jpg",
      rating: 5,
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-5xl font-extrabold text-white/80 mb-6`}
        >
         Testimonials
        </h2>
        <p className={`${playfair.className} text-gray-600 mb-16 max-w-2xl mx-auto`}>
          With AfterRender’s AI-powered tools, you can bring your creative ideas to life — design and deploy stunning web experiences in just minutes.
        </p>

        {/* Custom Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-5 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => {
            const gridPositions = [
              "row-span-3",
              "col-span-2 row-span-2",
              "row-span-3 col-start-3 row-start-3",
              "col-span-2 row-span-2 col-start-1 row-start-4",
              "col-start-2 row-start-3",
            ];
            return (
              <motion.div
                key={t.id}
                className={`bg-neutral-900/60 backdrop-blur-2xl  rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center  ${gridPositions[i]}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                custom={0.1 * (i + 1)} // delay stagger for each box
              >
                {/* Image */}
                <motion.img
                  src={t.src}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />

                {/* Text + Stars */}
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center"
                >
                  <h3 className={`${playfair.className} text-xl font-semibold text-white/80`}>
                    {t.name}
                  </h3>
                  <p className="text-sm text-white/80">{t.designation}</p>
                  <div className="flex justify-center gap-1 mt-2 mb-3">
                    {[...Array(t.rating)].map((_, idx) => (
                      <IconStarFilled key={idx} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed">"{t.quote}"</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
