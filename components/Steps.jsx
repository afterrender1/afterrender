"use client";
import React from "react";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Get on Camera",
      text: "Block a short time to record — our team will craft scripts and ideas beforehand. We’ll guide you with proven tips to record videos that connect, perform, and convert.",
    },
    {
      number: "02",
      title: "We Edit Your Videos",
      text: "Our editors take your recordings and transform them into polished long- or short-form content. Whether for YouTube, TikTok, or brand reels — you’ll get platform-ready edits daily.",
    },
    {
      number: "03",
      title: "Upload & Watch Results",
      text: "Post your videos anywhere and watch your audience grow. You’ll have a dedicated creative assistant ensuring consistent quality, captions, and delivery — every single time.",
    },
  ];

  return (
    <section
      className={`${poppins.className} w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-16 py-24`}
    >
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-purple-400 font-semibold mb-4">
          Here's How It Works
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
          Simple <span className="text-[#6E11B0]">3-Step Process</span>
        </h3>
        <p className="mt-5 text-neutral-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          From camera to conversions — we handle every step with creativity, precision, and results that speak for themselves.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line for large screens */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-purple-500/20 transform -translate-x-1/2" />

        <div className="flex flex-col md:gap-28 gap-14">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step number bubble */}
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-2xl sm:text-3xl font-extrabold rounded-full flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.6)] z-10">
                {step.number}
              </div>

              {/* Step content card */}
              <div
                className={`relative border border-purple-400/20 bg-neutral-900/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.3)] transition-all duration-300 max-w-lg md:max-w-xl ${
                  index % 2 === 0
                    ? "md:ml-12 md:text-left text-center"
                    : "md:mr-12 md:text-right text-center"
                }`}
              >
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-300 mb-4">
                  {step.title}
                </h4>
                <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {step.text}
                </p>

                {/* subtle glow line under title */}
                <div
                  className={`absolute w-24 h-[2px] bg-gradient-to-r from-purple-500/80 to-transparent ${
                    index % 2 === 0
                      ? "left-0 bottom-0 md:left-auto md:right-0 md:bottom-auto md:top-6"
                      : "right-0 bottom-0 md:right-auto md:left-0 md:bottom-auto md:top-6"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
