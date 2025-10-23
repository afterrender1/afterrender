"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TfiVideoClapper } from "react-icons/tfi";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { MdContactSupport } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function VideoEditingPage() {
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
      {/* ================= NAVBAR ================= */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Menu
          setActive={setActive}
          className="bg-black/70 backdrop-blur-lg border-b border-white/10"
        >
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link
              href="/pricing"
              className="text-white text-sm md:text-base font-semibold hover:text-purple-400 duration-300 p-4 md:p-5 flex items-center gap-2"
            >
              <RiMoneyDollarCircleLine size={20} /> Go to Pricing
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
              className="text-white text-sm md:text-base font-semibold hover:text-purple-400 duration-300 p-4 md:p-5 flex items-center gap-2"
            >
              <MdContactSupport size={20} /> Our Works
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link
              href="/portfolio"
              className="text-white text-sm md:text-base font-semibold hover:text-purple-400 duration-300 p-4 md:p-5 flex items-center gap-2"
            >
              <MdContactSupport size={20} /> Portfolio
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link
              href="/contact"
              className="text-white text-sm md:text-base font-semibold hover:text-purple-400 duration-300 p-4 md:p-5 flex items-center gap-2"
            >
              <MdContactSupport size={20} /> Contact
            </Link>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-28 md:pt-36 px-6 sm:px-10 lg:px-20">
        <Heading text="Video Editing" />
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20 gap-10 md:gap-20">
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-700">
              Craft Your Story, <br className="hidden sm:block" /> Frame by Frame.
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              The next-generation video editor that empowers you to create
              breathtaking cinematic experiences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
              <button className="px-8 py-3 bg-[#0047d6] rounded-lg font-medium text-white hover:bg-[#0d3a94] transition">
                Get Started
              </button>
              <button className="px-8 py-3 bg-gray-700 rounded-lg font-medium text-white hover:bg-gray-600 transition">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* ================= WORKFLOW SECTION ================= */}
      <section className="relative z-10 py-20 md:py-28 text-gray-900 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Heading text="Video Editing Workflow" />
          <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
            From import to final export — a seamless creative journey powered by
            precision and style.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Step 1 */}
          <div className="bg-white hover:border hover:border-purple-800 p-6 sm:p-8 w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white text-lg font-bold rounded-full mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Import Footage
            </h3>
            <p className="text-sm text-gray-700">
              Bring your raw clips into the workspace and start your creative
              process.
            </p>
          </div>

          {/* Video */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg group hover:border hover:border-purple-800">
            <video
              src="/herovideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl opacity-95 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-1 drop-shadow-lg flex items-center gap-2">
                Editing in Action <TfiVideoClapper color="white" />
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 max-w-md drop-shadow">
                Real-time editing with cinematic color grading and visual
                effects.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white hover:border hover:border-purple-800 p-6 sm:p-8 w-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white text-lg font-bold rounded-full mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Cut & Sync</h3>
            <p className="text-sm text-gray-700">
              Trim, sync, and arrange your shots for a smooth storytelling
              experience.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mt-12 grid place-items-center">
          <div className="bg-white hover:border hover:border-purple-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center max-w-[350px]">
            <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white text-lg font-bold rounded-full mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              Export & Share
            </h3>
            <p className="text-sm text-gray-600">
              Deliver your masterpiece across platforms with professional-grade
              quality.
            </p>
          </div>
        </div>
      </section>
        {/* TOOLS SECTION */}
            <section className="relative z-10 py-20 text-gray-900">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <Heading text="Technologies We Use" />
                <p className="text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base">
                  We use modern frameworks and technologies to build fast, reliable, and scalable digital products.
                </p>
      
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                  {[
                    { name: "Next.js", img: "/logos/aelogo.png" },
                    { name: "React", img: "/logos/ailogo.png" },
                    { name: "Tailwind CSS", img: "/logos/cclogo.png" },
                    { name: "Node.js", img: "/logos/gsheetslogo.png" },
                    { name: "Firebase", img: "/logos/lrlogo.png" },
                    { name: "MongoDB", img: "/logos/dvlogo.png" },
                  ].map((tool) => (
                    <div
                      key={tool.name}
                      className="group relative cursor-pointer bg-white w-52 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
                    >
                      <div className="flex items-center justify-center h-full">
                        <img src={tool.img} alt={tool.name} className="w-16 sm:w-20 h-16 sm:h-20" />
                      </div>
                      <div className="absolute bg-white -bottom-24 sm:-bottom-28 w-full p-4 sm:p-5 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
                        <span className="text-black font-bold text-xl sm:text-2xl">{tool.name}</span>
                        <p className="text-gray-600 text-xs sm:text-sm">Empowering modern, scalable web apps.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* PRICING SECTION */}
            <section className="relative z-10 py-20 text-gray-900">
              <div className="max-w-6xl mx-auto px-6 text-center">
                <Heading text="Flexible Web Plans" />
                <p className="text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base">
                  Transparent pricing for startups, creators, and growing brands.
                </p>
      
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  {[
                    { title: "Starter", price: "$499", features: ["Landing Page", "Responsive Design", "Basic SEO"] },
                    { title: "Business", price: "$999", features: ["Up to 10 Pages", "CMS Integration", "Speed Optimization"] },
                    { title: "Enterprise", price: "$1999", features: ["E-commerce", "Custom API", "Advanced SEO & Support"] },
                  ].map((plan) => (
                    <div
                      key={plan.title}
                      className="bg-gray-50 border border-gray-200 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                    >
                      <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
                      <span className="block text-4xl sm:text-5xl font-bold text-gray-800 mb-3">{plan.price}</span>
                      <p className="text-gray-600 mb-6 text-sm sm:text-base">One-time setup fee</p>
                      <button className="relative group inline-block w-full py-4 px-6 text-center bg-purple-300 text-gray-800 hover:text-white font-semibold rounded-full overflow-hidden transition duration-300">
                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full transition duration-500"></div>
                        <span className="relative">Get Started</span>
                      </button>
                      <ul className="mt-6 text-left text-gray-700 space-y-2 text-sm sm:text-base">
                        {plan.features.map((f) => (
                          <li key={f}>✔ {f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>

      {/* CTA SECTION */}
      <section className="relative py-20 sm:py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10 text-center bg-black rounded-xl py-10 px-6 sm:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Bring Your Story to Life? 🎬
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Whether you’re launching a brand or building your next film — we’ll
            help you craft visuals that captivate and inspire.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 sm:px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
              Start Your Project
            </button>
            <button className="px-8 sm:px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
