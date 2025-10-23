"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function YouTubeShortsRow() {
  const shorts = [
    { id: 1, title: "Short 1", videoId: "lpKpHIhXdy0" },
    { id: 2, title: "Short 2", videoId: "tmOJgK6R-is" },
    { id: 3, title: "Short 3", videoId: "fg0t5rMbI74" },
    { id: 4, title: "Short 4", videoId: "5q1njhBzdF0?si=VzSS73AXNA4K0R0Z" },
  ];

  return (
    <section className={`${poppins.className} w-full max-w-7xl mx-auto py-16 px-4`}>
      <h2 className="text-5xl font-bold mb-8 text-white/80 text-center">
        Explore Our YouTube Shorts
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
        {shorts.map((short) => (
          <div
            key={short.id}
            className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-70 snap-start rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
          >
            <div className="relative w-full pb-[177%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${short.videoId}?rel=0&autoplay=0&mute=0`}
                title={short.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="absolute bottom-2 left-2 text-white bg-black/50 px-2 py-1 rounded-md text-xs sm:text-sm font-semibold">
              {short.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
