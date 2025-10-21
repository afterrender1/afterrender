"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// Fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function VideoEditingPage() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(!(window.scrollY > lastScrollY && window.scrollY > 100));
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`${montserrat.className} w-full min-h-screen relative overflow-x-hidden`}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/purple-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Menu setActive={setActive} className="bg-black/50 backdrop-blur-md border-b border-white/10">
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link
              href="/pricing"
              className="flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition p-4"
            >
              <RiMoneyDollarCircleLine size={22} /> Pricing
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Capabilities">
            <div className="grid sm:grid-cols-2 gap-4 p-4">
              <ProductItem title="Video Editing" description="Smooth scroll animation section." href="/video-editing" src="/images/video-editing-image.jpg" />
              <ProductItem title="Video Production" description="Interactive 3D motion cards." href="#cards" src="/images/video-production-image.jpg" />
              <ProductItem title="Website Development" description="Interactive 3D motion cards." href="#cards" src="/images/website-development-image.jpeg" />
              <ProductItem title="N8N Automation" description="Interactive 3D motion cards." href="#cards" src="/images/n8n-automation-image.jpg" />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <p className="p-4 w-64 text-sm text-gray-300">
              Explore our cinematic works and client collaborations.
            </p>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <p className="p-4 w-64 text-sm text-gray-300">
              Get in touch for your next creative project.
            </p>
          </MenuItem>
        </Menu>
      </motion.nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-24 gap-12 md:gap-20">
          
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
              Craft Your Story, <br /> Frame by Frame.
            </h1>
            <p className="text-gray-900 text-lg leading-relaxed">
              The next-generation video editor that empowers you to create breathtaking cinematic experiences. 
              Intuitive, powerful, and built for the future of filmmaking.
            </p>

            <div className="flex gap-4 pt-4 text-white">
              <button className="px-6 py-3 bg-[#b398f1] rounded-lg font-medium hover:bg-purple-500 transition">
                Start Your Free Trial
              </button>
              <button className="px-6 py-3 bg-black rounded-lg font-medium hover:bg-gray-600 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Section (Image Placeholder) */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/videoeditngimage.png"
                alt="Video Editing Preview"
                width={1200}
                height={800}
                className="object-cover w-full h-full opacity-95"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      <section className="relative z-10 pt-32">

      </section>



      {/* ================= END HERO SECTION ================= */}
    </div>
  );
}
