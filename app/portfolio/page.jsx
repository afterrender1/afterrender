"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import Link from "next/link";
import { MdContactSupport } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Heading } from "@/components/Heading";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "Web Development",
    image: "/images/website-development-image.jpeg",
    description: "A sleek, responsive store built with Next.js & Tailwind CSS.",
  },
  {
    id: 2,
    title: "Brand Motion Reel",
    category: "Video Editing",
    image: "/images/video-editing-image.jpg",
    description: "Dynamic storytelling through cinematic transitions.",
  },
  {
    id: 5,
    title: "Social Media Ad Campaign",
    category: "Marketing",
    image: "/images/video-production-image.jpg",
    description: "Creative video ads optimized for Instagram and YouTube.",
  },
];

export default function PortfolioPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link
              href="/pricing"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <RiMoneyDollarCircleLine size={22} /> Go to Pricing
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-2 sm:p-4">
              <ProductItem
                title="Video Editing"
                description="Smooth transitions, motion graphics, and storytelling."
                href="/video-editing"
                src="/images/video-editing-image.jpg"
              />
              <ProductItem
                title="Website Development"
                description="Pixel-perfect, responsive web experiences."
                href="/website-development"
                src="/images/website-development-image.jpeg"
              />
              <ProductItem
                title="Social Media Presence"
                description="Interactive 3D motion cards."
                href="/socialmediapresence"
                src="/images/video-production-image.jpg"
              />
              <ProductItem
                title="Reels And Shorts"
                description="Interactive 3D motion cards."
                href="/reels+shorts"
                src="/images/reelshorts.png"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link 
              href="/portfolio"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22}/> Go to Portfolio
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Works">
            <Link
              href="/ourwork"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Our Work
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link
              href="/contact"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Contact Us
            </Link>
          </MenuItem>
        </Menu>
      </div>

      {/* Portfolio Section */}
      <main className={`${poppins.className} pt-32 pb-24 px-4 sm:px-6 lg:px-12`}>
        <div className="max-w-7xl mx-auto text-center">
          <Heading text={"Our Portfolio"} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 max-w-2xl mx-auto mb-12 sm:mb-16 text-base sm:text-lg mt-5"
          >
            A showcase of our work in design, development, and video production — blending creativity with results.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-3xl shadow-lg bg-white dark:bg-[#1a1a1a] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/40 dark:border-purple-800/40"
              >
                <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                </div>

                <div className="absolute bottom-0 p-4 sm:p-6 md:p-6 text-left text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base opacity-90 mb-1">{item.category}</p>
                  <p className="text-xs sm:text-sm md:text-base opacity-80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
