"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

// Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function VideoEditingPage() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${montserrat.className} text-white w-full min-h-screen relative overflow-x-hidden`}
    >
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
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Menu
          setActive={setActive}
          className="bg-black/50 backdrop-blur-md border-b border-white/10"
        >
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <Link
              href="/pricing"
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition"
            >
              <span className="flex justify-center items-center gap-2">
                <RiMoneyDollarCircleLine size={22} /> Pricing
              </span>
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Capabilities">
            <div className="grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="Video Editing"
                description="Smooth scroll animation section."
                href="/video-editing"
                src="/images/video-editing-image.jpg"
              />
              <ProductItem
                title="Video Production"
                description="Interactive 3D motion cards."
                href="#cards"
                src="/images/video-production-image.jpg"
              />
              <ProductItem
                title="Website Development"
                description="Interactive 3D motion cards."
                href="#cards"
                src="/images/website-development-image.jpeg"
              />
              <ProductItem
                title="N8N Automation"
                description="Interactive 3D motion cards."
                href="#cards"
                src="/images/n8n-automation-image.jpg"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <div className="p-4 w-64 text-sm text-gray-300">
              Explore our cinematic works and client collaborations.
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Work">
            <div className="p-4 w-64 text-sm text-gray-300">
              Explore our cinematic works and client collaborations.
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="p-4 w-64 text-sm text-gray-300">
              Get in touch for your next creative project.
            </div>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative pt-48 pb-32 text-center max-w-5xl mx-auto px-6 z-10"
      >
        <motion.h1
          className={`${playfair.className} text-6xl sm:text-7xl font-bold mb-6 text-[#6E11B0]`}
        >
          Crafting Cinematic Stories That Inspire
        </motion.h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          From concept to color grade — we bring your vision to life through
          powerful visuals, sound, and motion that captivate and inspire.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block mt-10 bg-purple-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-purple-600 transition shadow-lg shadow-purple-500/30"
        >
          Start Your Project
        </motion.a>
      </motion.section>

      {/* We Master In Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-24 px-6 text-center z-10"
      >
        <h2
          className={`${playfair.className} text-5xl font-bold mb-12 text-[#6E11B0]`}
        >
          We Master In
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { name: "Adobe Premiere Pro", img: "logos/prlogo.png" },
            { name: "After Effects", img: "/logos/aelogo.png" },
            { name: "Photoshop", img: "/logos/pslogo.png" },
            { name: "DaVinci Resolve", img: "/logos/dvlogo.png" },
            { name: "Final Cut Pro", img: "/logos/fclogo.png" },
            { name: "CapCut Pro", img: "/logos/cclogo.png" },
            { name: "Audition", img: "/logos/aulogo.png" },
            { name: "Lightroom", img: "/logos/lrlogo.png" },
          ].map((tool, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center justify-center bg-white/90 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-full h-full object-contain mb-3"
              />
              <p className="text-purple-700 font-semibold">{tool.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Services Section with YouTube embeds */}
      <motion.section
        id="cards"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12 z-10"
      >
        {[
          {
            title: "Cinematic Editing",
            desc: "Transform raw footage into emotional, story-driven edits with seamless transitions and artistic tone.",
            video: "https://www.youtube.com/embed/BFBv_FlfehI?si=VahbwhaipnPjh30-",
          },
          {
            title: "YouTube & Social Media",
            desc: "Maximize audience retention with crisp, platform-optimized edits built to go viral.",
            video: "https://www.youtube.com/embed/EaCH1Xwp9Aw?si=NYApgdTYD1IJyT_q",
          },
          {
            title: "Corporate & Brand Videos",
            desc: "Tell your brand’s story with impactful edits for campaigns, testimonials, and reels.",
            video: "https://www.youtube.com/embed/rHfibRZisjI?si=6gY34nFRmu-ZCt3F",
          },
          {
            title: "Documentary & Film",
            desc: "Pacing and storytelling that give depth to narratives — cinematic and emotional.",
            video: "https://www.youtube.com/embed/lpKpHIhXdy0?si=G4-m81lGFRJ-76iv",
          },
          {
            title: "Reels & Shorts",
            desc: "Catchy 30–60 second clips crafted to boost engagement across every platform.",
            video: "https://www.youtube.com/embed/tmOJgK6R-is?si=R7niZpT5o9TMxVjf",
          },
          {
            title: "Music Videos",
            desc: "Stylish, rhythmic edits that sync your sound with striking visual energy.",
            video: "https://www.youtube.com/embed/hlH5Plu6XYI?si=f07QaHPzDEcBUpzH",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group rounded-3xl overflow-hidden backdrop-blur-xl bg-white transition-all duration-500"
          >
            <div className="relative overflow-hidden">
              <iframe
                src={item.video}
                title={item.title}
                allowFullScreen
                className="w-full h-64 object-cover rounded-t-3xl"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="p-6 text-left">
              <h3
                className={`${playfair.className} text-2xl font-bold mb-3 text-[#9810FA]`}
              >
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative py-24 text-center px-6 z-10"
      >
        <motion.h3
          className={`${playfair.className} text-5xl font-bold mb-14 text-[#6E11B0]`}
        >
          Creative Plans for Every Vision
        </motion.h3>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Starter",
              price: "$199",
              desc: "Perfect for short social clips or reels.",
            },
            {
              name: "Professional",
              price: "$499",
              desc: "Ideal for YouTube videos or branded content.",
            },
            {
              name: "Cinematic",
              price: "$999",
              desc: "Full cinematic editing, color grading, and effects.",
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="group bg-white/90 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-10 text-left shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:border-purple-500/60 transition-all duration-500"
            >
              <h4
                className={`${playfair.className} text-2xl font-semibold text-purple-700 mb-4`}
              >
                {plan.name}
              </h4>

              <div className="flex items-baseline mb-4">
                <p className="text-5xl font-extrabold text-purple-700">
                  {plan.price}
                </p>
                <span className="ml-2 text-purple-500 font-medium text-sm">
                  /project
                </span>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">{plan.desc}</p>

              <Link
                href="/pricing"
                className="inline-block w-full text-center bg-purple-600 text-white font-semibold py-3 rounded-full hover:bg-purple-700 transition-all duration-300"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-32 px-6 relative z-10"
      >
        <h3
          className={`${playfair.className} text-5xl font-bold mb-6 text-[#6E11B0]`}
        >
          Let’s Create Something Legendary
        </h3>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          Every frame is an opportunity to move people. Partner with us to craft
          cinematic stories that resonate.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-purple-500 text-white font-semibold px-10 py-4 rounded-full hover:bg-purple-600 transition shadow-lg shadow-purple-500/30"
        >
          Book a Free Call
        </motion.a>
      </motion.section>
    </div>
  );
}
