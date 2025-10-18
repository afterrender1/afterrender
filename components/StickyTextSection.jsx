"use client";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function StickyTextSection() {
  const videos = [
    { id: 1, title: "Video 1", videoId: "lpKpHIhXdy0?si=ORxXnxBXnYst3nHk" },
    { id: 2, title: "Video 2", videoId: "tmOJgK6R-is?si=hhA1A2JrLnDgOrc3" },
    { id: 3, title: "Video 3", videoId: "fg0t5rMbI74?si=qeqbEDEymdT6jUSr" },
  ];

  return (
    <section
      className={`${poppins.className} w-full max-w-7xl mx-auto px-4 py-16`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column: Sticky Text */}
        <div className="md:col-span-1">
          <div className="md:sticky top-24">
            <p className="text-2xl mb-2">✌️ Explore Our Youtube Videos</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-neutral-900 dark:text-white leading-tight">
              We have <br />
              <span className="text-purple-400">
                THE BEST CONTENT FULFILMENT TEAM
              </span>
            </h2>
            <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
              Here’s why 👉 Our team brings creativity, precision, and passion
              to every project. We don’t just deliver content — we create
              impact. Watch what makes us the best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
                Work with us
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                BOOK A CALL
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Video List */}
        <div className="md:col-span-2 flex justify-center">
          <div className="w-full max-w-3xl flex flex-col gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Video Container (16:9 ratio) */}
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-purple-200 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-neutral-300">
                    A short description for {video.title}. Add context or
                    highlights here to engage viewers.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
