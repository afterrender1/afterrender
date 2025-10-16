"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Space_Grotesk, Playfair_Display } from "next/font/google";

// Fonts
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  heroHeading = "Afterrender Video Production Samples",
  heroSubheading = "Explore our latest video productions including documentaries, podcasts, reels, and creative video content. Scroll through to see our work in action."
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  // Initialize scrolling
  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });

    containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse");
    let duration = speed === "normal" ? "40s" : speed === "slow" ? "80s" : "20s";
    containerRef.current.style.setProperty("--animation-duration", duration);

    setStart(true);
  }, [direction, speed]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full"
    >
      {/* Hero Heading + Subheading */}
      <div className="relative z-10 text-center mb-16 px-4 md:px-8 lg:px-12">
        <h1
          className={`${spaceGrotesk.className} text-center text-3xl md:text-5xl lg:text-7xl font-extrabold text-purple-800`}
        >
          {heroHeading.split(" ").map((word, index) => (
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
          className={`${playfair.className} mt-4 max-w-3xl mx-auto text-lg text-neutral-700`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {heroSubheading}
        </motion.p>
      </div>

      {/* Infinite Scrolling Cards */}
      <div className="flex justify-center w-full overflow-hidden mb-30">
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 max-w-7xl w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max shrink-0 flex-nowrap gap-4 py-4",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {items.map((item) => (
              <li
                key={item.name}
                className="relative w-[350px] max-w-full shrink-0 rounded-2xl overflow-hidden md:w-[500px]"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
                <blockquote className="relative z-10 px-8 py-40"></blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
