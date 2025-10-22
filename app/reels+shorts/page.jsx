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
                className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
              >
                <RiMoneyDollarCircleLine size={22} /> Go to Pricing
              </Link>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Capabilities">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
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
                className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
              >
              <MdContactSupport  size={22}/>
 Go To Our Works
              </Link>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="Portfolio">
              <div className="p-4 w-64 text-sm text-gray-300">
                Explore our latest projects and collaborations.
              </div>
            </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
              <Link 
                
                href="/contact"
                className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
              >
              <MdContactSupport  size={22}/>
 Go to Contact
              </Link>
            </MenuItem>
          </Menu>
        </motion.div>


      {/* HERO SECTION */}
      <section className="relative z-10 pt-32">
        <Heading text={"Reels & Shorts"} />
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-46 py-16 md:py-24 gap-12 md:gap-20">
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Engage. Inspire. Go Viral 🎬
            </h1>
            <p className="text-gray-900 text-lg leading-relaxed">
              Create stunning Reels & Shorts that capture attention, grow your audience, and make your brand unforgettable.
            </p>
            <div className="flex gap-4 pt-4 text-white">
              <button className="px-10 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition">
                Start a Project
              </button>
              <button className="px-6 py-3 bg-black rounded-lg font-medium hover:bg-gray-600 transition">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/reelsshortsimage.png"
                alt="Reels & Shorts"
                width={1200}
                height={800}
                className="object-cover w-full h-full opacity-95"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="relative z-10 pt-32 pb-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
                 <div className="mb-6">
                     <Heading text={"Our Creative Process"}/>
           </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            From concept to viral-ready content, we ensure every reel & short maximizes engagement and impact.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaFilm className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Concept & Script</h3>
              <p className="text-sm text-gray-600">We brainstorm ideas that resonate and tell your story effectively.</p>
            </div>

            <div className="bg-white p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaBolt className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shoot & Edit</h3>
              <p className="text-sm text-gray-600">Professional shooting and fast, attention-grabbing edits tailored for social media.</p>
            </div>

            <div className="bg-white p-14 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaVideo className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Publish & Optimize</h3>
              <p className="text-sm text-gray-600">Schedule, optimize, and monitor performance to maximize reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mx-20 backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Make Your Brand Go Viral 🌟
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Let’s create reels and shorts that captivate your audience and grow your brand.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
                Start Your Reels
              </button>
              <button className="px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
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
