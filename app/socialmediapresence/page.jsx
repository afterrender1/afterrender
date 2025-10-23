"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { MdContactSupport } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function SocialMediaPresencePage() {
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
      {/* ========== Navbar ========== */}
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
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 flex items-center gap-2"
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
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Go To Our Works
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link
              href="/portfolio"
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Go to Portfolio
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link
              href="/contact"
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Go to Contact
            </Link>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative z-10 pt-28 md:pt-36">
            <Heading text="Social Media Presence" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-12 md:py-20">
          {/* Left Content */}
          <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-700">
              Grow Your Brand with Engaging Social Content 🚀
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              We craft social media strategies and content that increase reach, engagement, and conversions across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 text-white">
              <button className="px-8 py-3 bg-[#0047d6] rounded-lg font-medium hover:bg-purple-600 transition w-full sm:w-auto">
                Start a Campaign
              </button>
              <button className="px-8 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition w-full sm:w-auto">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[550px] sm:max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/socialmediaimage.png"
                alt="Social Media Presence"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="relative z-10 pt-20 pb-20 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Heading text="Social Media Services" />
          <p className="text-gray-700 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
            Strategies and content that drive real engagement and ROI for your brand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFacebookF className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "Facebook Campaigns",
                desc: "Targeted ad campaigns and content strategy to grow your audience.",
              },
              {
                icon: <FaInstagram className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "Instagram Growth",
                desc: "Creative posts, stories, and reels that drive engagement and followers.",
              },
              {
                icon: <FaLinkedinIn className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "LinkedIn Marketing",
                desc: "Professional brand building and B2B lead generation campaigns.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="backdrop-blur-xl bg-black/80 rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Boost Your Brand’s Social Presence
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Partner with us to create engaging social campaigns that grow your audience and revenue.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 sm:px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
                Start Your Campaign
              </button>
              <button className="px-8 sm:px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Schedule a Free Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
