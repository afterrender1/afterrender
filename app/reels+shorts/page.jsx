"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaFilm, FaBolt, FaVideo } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { MdContactSupport } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function ReelsShortsPage() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(!(window.scrollY > lastScrollY && window.scrollY > 100));
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${montserrat.className} w-full min-h-screen relative`}>
      {/* Navbar */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Menu setActive={setActive} className="bg-black/70 backdrop-blur-lg border-b border-white/10">
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link
              href="/pricing"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <RiMoneyDollarCircleLine size={22} /> Go to Pricing
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Capabilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
              <ProductItem
                title="Video Editing"
                description="Smooth scroll animation section."
                href="/video-editing"
                src="/images/video-editing-image.jpg"
              />
              <ProductItem
                title="Social Media Presence"
                description="Interactive 3D motion cards."
                href="/socialmediapresence"
                src="/images/video-production-image.jpg"
              />
              <ProductItem
                title="Website Development"
                description="Interactive 3D motion cards."
                href="/website-development"
                src="/images/website-development-image.jpeg"
              />
              <ProductItem
                title="Reels And Shorts"
                description="Interactive 3D motion cards."
                href="/reels+shorts"
                src="/images/reelshorts.png"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Works">
            <Link 
              href="/ourwork"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport  size={22}/> Go To Our Works
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link 
              href="/portfolio"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport  size={22}/> Go to Portfolio
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link 
              href="/contact"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport  size={22}/> Go to Contact
            </Link>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 px-4 sm:px-6 md:px-12 lg:px-20">
        <Heading text={"Reels & Shorts"} />
        <div className="flex flex-col md:flex-row items-center justify-between py-16 md:py-24 gap-12 md:gap-20">
          <div className="flex flex-col w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-700">
              Engage. Inspire. Go Viral 🎬
            </h1>
            <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Create stunning Reels & Shorts that capture attention, grow your audience, and make your brand unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start text-white/80">
              <button className="px-8 sm:px-10 py-2 sm:py-3 bg-[#0047d6] rounded-lg font-medium hover:bg-[#0038a7] transition text-sm sm:text-base">
                Start a Project
              </button>
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition text-sm sm:text-base">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] sm:max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reelsshortsimage.png"
                alt="Reels & Shorts"
                width={1200}
                height={800}
                className="object-cover w-full h-auto opacity-95"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="relative z-10 pt-20 sm:pt-32 pb-16 sm:pb-24 text-gray-900 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Heading text={"Our Creative Process"} />
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 sm:mb-16 text-sm sm:text-base md:text-lg">
            From concept to viral-ready content, we ensure every reel & short maximizes engagement and impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            <div className="bg-white p-8 sm:p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaFilm className="text-purple-600 text-3xl sm:text-4xl mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Concept & Script</h3>
              <p className="text-sm sm:text-base text-gray-600">We brainstorm ideas that resonate and tell your story effectively.</p>
            </div>

            <div className="bg-white p-8 sm:p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaBolt className="text-purple-600 text-3xl sm:text-4xl mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Shoot & Edit</h3>
              <p className="text-sm sm:text-base text-gray-600">Professional shooting and fast, attention-grabbing edits tailored for social media.</p>
            </div>

            <div className="bg-white p-8 sm:p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaVideo className="text-purple-600 text-3xl sm:text-4xl mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Publish & Optimize</h3>
              <p className="text-sm sm:text-base text-gray-600">Schedule, optimize, and monitor performance to maximize reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-24 text-white overflow-hidden px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Make Your Brand Go Viral 🌟
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Let’s create reels and shorts that captivate your audience and grow your brand.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base">
                Start Your Reels
              </button>
              <button className="px-8 sm:px-10 py-3 sm:py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
