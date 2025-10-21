"use client";

import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { InfiniteMovingCards } from "@/components/DigitalSolutions";
// import { MacbookScroll } from "@/components/Macbookscroll";
import HeroSection from "@/components/HeroSection";
import AnimatedLogoShowcase from "@/components/AnimatedLogoShowcase";
import StickyTextSection from "@/components/StickyTextSection";
import StepSection from "@/components/Steps";
import Link from "next/link";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Playfair_Display, Space_Grotesk } from "next/font/google";
import { MdContactSupport } from "react-icons/md";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navbar toggle on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowNavbar(false); // hide on scroll down
      } else {
        setShowNavbar(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const cards = [
    {
      name: "Documentary Video",
      title: "Professional Production",
      quote: "High-quality documentary shoots and editing.",
      bg: "/Documentry-Video.png",
    },
    {
      name: "Talking Head Video",
      title: "Corporate & Personal",
      quote: "Creative headshots and talking head videos.",
      bg: "/Talking-Head.png",
    },
    {
      name: "Podcast Video",
      title: "Engaging & Professional",
      quote: "Record, edit, and produce high-quality podcasts.",
      bg: "/Podcast-Video.png",
    },
    {
      name: "Reel",
      title: "Social Media Ready",
      quote: "Dynamic reels for Instagram, TikTok, and more.",
      bg: "/Reels.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-screen  text-white ">
        {/* Navbar (Animated hide/show on scroll) */}
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

        {/* Hero Grid */}
    <HeroSection/>
      </div>

      {/* Testimonials */}
      <section className="px-4 sm:px-10 md:px-20 py-16  text-white">
        <AnimatedTestimonials
          testimonials={[
            {
              name: "Mahmoud Khodur",
              designation: "Head of Project | Stealth Startup",
              quote:
                "He was great at storytelling, very creative in highlighting key points — tremendous potential for growth.",
              src: "/feedbackimg1.png",
            },
            {
              name: "Lauren",
              designation: "Founder | Regenerative Farmers of America",
              quote:
                "AfterRender is a delight to work with — they make great videos and respond quickly to feedback. Highly recommend!",
              src: "/feedbackimg2.png",
            },
          ]}
          autoplay
        />
      </section>

      {/* Moving Cards */}
      {/* <section className="py-16 px-4 sm:px-10">
        <InfiniteMovingCards
          items={cards}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </section> */}

      {/* Sticky + Steps */}
      <StickyTextSection />
      <StepSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
