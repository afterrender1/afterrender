"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/socialmedia-bg.jpg')",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0" />

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
                description="Interactive social media campaigns."
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
                title="Reels and Shorts"
                description="Interactive 3D motion cards."
                href="/reels+shorts"
                src="/images/n8n-automation-image.jpg"
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Works">
            <div className="p-4 w-64 text-sm text-gray-300">
              A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <div className="p-4 w-64 text-sm text-gray-300">
              Explore our latest social media projects and campaigns.
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link
              href="/contact"
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Go to Contact
            </Link>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32">
        <Heading text={"Social Media Presence"} />
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-46 py-16 md:py-24 gap-12 md:gap-20">
          {/* Left */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Grow Your Brand with Engaging Social Content 🚀
            </h1>
            <p className="text-gray-900 text-lg leading-relaxed">
              We craft social media strategies and content that increase reach, engagement, and conversions across all platforms.
            </p>
            <div className="flex gap-4 pt-4 text-white">
              <button className="px-10 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition">
                Start a Campaign
              </button>
              <button className="px-6 py-3 bg-black rounded-lg font-medium hover:bg-gray-600 transition">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/socialmediaimage.png"
                alt="Social Media Presence"
                width={1200}
                height={800}
                className="object-cover w-full h-full opacity-95"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative z-10 pt-32 pb-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Social Media Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Strategies and content that drive real engagement and ROI for your brand.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaFacebookF className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facebook Campaigns</h3>
              <p className="text-sm text-gray-600">Targeted ad campaigns and content strategy to grow your audience.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaInstagram className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instagram Growth</h3>
              <p className="text-sm text-gray-600">Creative posts, stories, and reels that drive engagement and followers.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaLinkedinIn className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">LinkedIn Marketing</h3>
              <p className="text-sm text-gray-600">Professional brand building and B2B lead generation campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
      <section className="relative z-10 py-24 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Platforms We Excel On</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            From social networks to emerging platforms, we help your brand stand out everywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[{ name: "Facebook", img: "/logos/facebook.png" },
              { name: "Instagram", img: "/logos/instagram.png" },
              { name: "LinkedIn", img: "/logos/linkedin.png" },
              { name: "Twitter", img: "/logos/twitter.png" },
            ].map((platform) => (
              <div
                key={platform.name}
                className="group relative cursor-pointer bg-white w-64 h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-center h-80">
                  <img src={platform.img} alt={platform.name} className="w-20 h-20" />
                </div>
                <div className="absolute bg-white -bottom-28 w-64 p-5 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
                  <span className="text-black font-bold text-2xl">{platform.name}</span>
                  <p className="text-gray-600 text-sm">Optimized campaigns & engagement strategies.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mx-20 backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Boost Your Brand’s Social Presence 🌐
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Partner with us to create engaging social campaigns that grow your audience and revenue.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
                Start Your Campaign
              </button>
              <button className="px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
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
