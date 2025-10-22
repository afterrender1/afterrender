"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { MdContactSupport } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function OurWorksPage() {
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

  const works = [
    {
      title: "Website Redesign - Emerald Co.",
      description:
        "A full website redesign with interactive animations, responsive UI, and smooth scrolling features.",
      ytEmbed: "https://www.youtube.com/embed/EaCH1Xwp9Aw?si=u_2bpYPklSIe0ETu",
    },
    {
      title: "Social Media Campaign - Chao Agency",
      description:
        "Engaging social media content creation, reels, stories, and targeted campaigns to boost engagement.",
      ytEmbed: "https://www.youtube.com/embed/rHfibRZisjI?si=vCA9uMqdVyGhQP4y",
    },
    {
      title: "Video Production - YouTube Series",
      description:
        "Produced high-quality videos for YouTube channels including editing, animation, and post-production.",
      ytEmbed: "https://www.youtube.com/embed/5q1njhBzdF0?si=ZXHMrWtSiAhItkO8",
    },
  ];

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
              <MdContactSupport size={22}/> Go To Our Works
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link 
              href="/portfolio"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22}/> Go to Portfolio
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact">
            <Link 
              href="/contact"
              className="text-white text-sm sm:text-base font-semibold hover:text-purple-400 duration-300 p-3 sm:p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22}/> Go to Contact
            </Link>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 text-center text-white px-4 sm:px-6 lg:px-20">
        <Heading text={"Our Works"} />
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl mt-4 text-gray-700">
          See our portfolio of websites, social media campaigns, videos, and interactive projects built with creativity and precision.
        </p>
      </section>

      {/* WORKS GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-12">
        {works.map((work, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-6 md:gap-10 p-4 sm:p-6 md:p-10"
          >
            {/* Video */}
            <div className="w-full md:w-3/4 flex justify-center items-center">
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe
                  src={work.ytEmbed}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Details */}
            <div className="w-full md:w-1/4 flex flex-col justify-center space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{work.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{work.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-20 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Let’s Build Your Next Project 🌐
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-6 sm:mb-10 max-w-2xl mx-auto">
              Partner with us to bring your ideas to life, from websites to social media campaigns and video production.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 sm:px-10 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="px-6 sm:px-10 py-3 sm:py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base"
              >
                Schedule a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
