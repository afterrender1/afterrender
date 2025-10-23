"use client";

import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function TestimonialsPaperCarousel() {
  // Autoplay plugin setup
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 25, // smoother + faster transition
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    autoplay.stop();
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi, autoplay]);

  const scrollNext = useCallback(() => {
    autoplay.stop();
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi, autoplay]);

  // Restart autoplay after interaction
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => autoplay.reset());
  }, [emblaApi, autoplay]);

  const testimonials = [
    {
      id: 1,
      name: "Raj M.",
      designation: "Founder of ArtisanMarket",
      quote:
        "We were struggling with high cart abandonment rates, but after their UX revamp, our conversion rate jumped by 50%. Their data-driven approach made all the difference.",
      avatar: "/images/testimonial1.png",
    },
    {
      id: 2,
      name: "Mike P.",
      designation: "Director of Communications, GreenFuture Foundation",
      quote:
        "Our website became more engaging for a diverse audience. They transformed our vision into a platform that helps us connect with more donors.",
      avatar: "/images/testimonials2.png",
    },
    {
      id: 3,
      name: "Sara L.",
      designation: "CEO of NovaTech",
      quote:
        "As a fast-growing SaaS company, we needed a reliable partner who could scale with us. They delivered a sleek product experience that wowed our investors.",
      avatar: "/images/testmonial4.png",
    },
    {
      id: 4,
      name: "Ethan R.",
      designation: "Marketing Director, FlowMetrics",
      quote:
        "They took our outdated dashboard and turned it into a responsive, user-friendly experience that our customers love.",
      avatar: "/images/testimonials3.png",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="w-full max-w-7xl text-center">
        {/* Heading */}
        <h2
          className={`${spaceGrotesk.className} text-3xl sm:text-4xl md:text-6xl font-bold text-white/80 mb-4`}
        >
          Testimonials
        </h2>
        <p
          className={`${spaceGrotesk.className} text-gray-800 mb-10 max-w-2xl mx-auto`}
        >
          From SaaS startups to non-profits. 2000+ happy clients. Still counting.
        </p>

 

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollPrev}
            className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-md z-10 transition"
          >
            <IconChevronLeft size={28} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollNext}
            className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-md z-10 transition"
          >
            <IconChevronRight size={28} />
          </motion.button>

          {/* Embla Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_45%] px-4 my-6 cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <motion.div
                    whileHover={{ rotate: 0 }}
                    initial={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                    className="bg-white/80 rounded-xl shadow-xl border border-gray-200 p-20 text-left relative transform transition-transform"
                  >
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      “{t.quote}”
                    </p>

                    <div className="flex items-center mt-6">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4
                          className={`${playfair.className} text-gray-900 font-semibold`}
                        >
                          {t.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{t.designation}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
