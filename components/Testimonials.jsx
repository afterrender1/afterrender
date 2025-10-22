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
    if (!testimonials || testimonials.length === 0) return;
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
      className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-20 md:py-28 my-20 sm:my-32 rounded-3xl overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-transparent rounded-3xl"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-10 sm:mb-16 px-2">
        <h1
          className={`${spaceGrotesk.className} text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight`}
        >
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
          className={`${playfair.className} mt-4 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto text-sm sm:text-base md:text-lg text-gray-200`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {heroSubheading}
        </motion.p>
      </div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        className="relative grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center"
      >
        {/* Left Image */}
        <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full flex items-center justify-center">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotations[index],
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.6,
                  scale: isActive(index) ? 1 : 0.92,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotations[index],
                  zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -30, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center origin-bottom"
              >
                <div className="relative h-full w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden rounded-3xl shadow-2xl bg-white/5 backdrop-blur-md border border-white/10">
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full object-contain sm:object-cover object-center"
                    draggable={false}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-between py-4 md:py-6 relative z-10">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <h3
              className={`${playfair.className} text-xl sm:text-2xl md:text-3xl font-bold text-white`}
            >
              {testimonials[active].name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-300">
              {testimonials[active].designation}
            </p>
            <motion.p
              className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed"
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Navigation */}
          <div className="flex gap-3 sm:gap-4 pt-8 sm:pt-10 md:pt-12 justify-center md:justify-start">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300"
            >
              <IconArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300"
            >
              <IconArrowRight className="h-6 w-6 sm:h-7 sm:w-7 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTestimonials;
