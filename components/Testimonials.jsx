"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

// Fonts
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  heroHeading = "Our Customers Reviews",
  heroSubheading = "With AfterRender’s AI-powered tools, you can bring your creative ideas to life — design and deploy stunning web experiences in just minutes.",
}) => {
  const [active, setActive] = useState(0);
  const [randomRotations, setRandomRotations] = useState([]);

  useEffect(() => {
    setRandomRotations(testimonials.map(() => Math.floor(Math.random() * 21) - 10));
  }, [testimonials]);

  const handleNext = () => setActive((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const isActive = (index) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  if (randomRotations.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="mx-auto max-w-sm px-4 py-20 my-40 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12
                 rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: "url('/testimonialbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>

      {/* Hero Heading & Subheading */}
      <div className="relative z-10 text-center mb-12">
        <h1 className={`${spaceGrotesk.className} text-3xl md:text-5xl lg:text-6xl font-extrabold text-white`}>
          {heroHeading.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12, ease: "easeInOut" }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className={`${playfair.className} mt-4 max-w-3xl mx-auto text-lg text-gray-200`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {heroSubheading}
        </motion.p>
      </div>

      {/* Testimonials & Image Carousel */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="relative grid grid-cols-1 gap-20 md:grid-cols-2"
      >
        {/* Left Side (Images) */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotations[index] }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotations[index],
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-2xl object-contain object-center"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side (Text) */}
        <div className="flex flex-col justify-between py-4 relative z-10">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className={`${playfair.className} text-2xl font-bold text-white`}>
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-gray-200">{testimonials[active].designation}</p>
            <motion.p className="mt-8 text-lg text-gray-100">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button onClick={handlePrev} className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100/60">
              <IconArrowLeft className="h-9 w-9 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button onClick={handleNext} className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100/60">
              <IconArrowRight className="h-9 w-9 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTestimonials;
