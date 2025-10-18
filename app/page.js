"use client";
import Image from "next/image";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/MenuItem";
import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { InfiniteMovingCards } from "@/components/DigitalSolutions";
import { MacbookScroll } from "@/components/Macbookscroll";
import AnimatedLogoShowcase from "@/components/AnimatedLogoShowcase";

import { Heading } from "@/components/Heading";
import { motion } from "motion/react";
import { Playfair_Display } from "next/font/google";

import { Space_Grotesk } from "next/font/google";


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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 600;
      if (window.scrollY > triggerPoint && !paused) {
        setPaused(true);
        setTimeout(() => setPaused(false), 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [paused]);

  const cards = [
    {
      name: "Documentary Video",
      title: "Professional Production",
      quote: "High-quality documentary shoots and editing.",
      bg: "/Documentry-Video.png",
    },
    {
      name: "Taking Head Video",
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
      {/* Hero Section with background image */}
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/purple-bg.jpg')" }}
      >
        {/* Transparent Navigation */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Menu setActive={setActive} className="bg-transparent backdrop-blur-md">
            {/* Menu Items */}
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="grid grid-cols-2 gap-6 p-4">
                <ProductItem
                  title="Macbook Scroll"
                  description="Smooth scroll animation section."
                  href="#macbook"
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                />
                <ProductItem
                  title="3D Cards"
                  description="Interactive 3D motion cards."
                  href="#cards"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Capabilities">
              <div className="flex flex-col space-y-2 p-4">
                <HoveredLink href="https://nextjs.org">Next.js Docs</HoveredLink>
                <HoveredLink href="https://tailwindcss.com">Tailwind CSS</HoveredLink>
                <HoveredLink href="https://motion.dev">Motion React</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Our Works">
              <div className="p-4 w-64 text-sm text-neutral-700 dark:text-neutral-300">
                A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Portfolio">
              <div className="p-4 w-64 text-sm text-neutral-700 dark:text-neutral-300">
                A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blog">
              <div className="p-4 w-64 text-sm text-neutral-700 dark:text-neutral-300">
                A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
              <div className="p-4 w-64 text-sm text-neutral-700 dark:text-neutral-300">
                A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Main Hero Content */}
    
        <div className="flex justify-around pt-24 mx-16">
          <div className="mt-35">
            <AnimatedLogoShowcase />
          </div>
          <div>
            <MacbookScroll src={"herovideo.mp4"} />
          </div>
          <div className="mt-35">
            <AnimatedLogoShowcase />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <AnimatedTestimonials
        testimonials={[
          {
            name: "Mahmoud Khodur",
            designation: "Head of Project | Stealth Startup",
            quote:
              "HE WAS GREAT AT STORY TELLING WAS VERY CREATIVE IN HIGHLIGHTING CERTAIN POINTS, HE HAS A TREMENDOUS OPPORTUNITY FOR GROWTH",
            src: "/feedbackimg1.png",
          },
          {
            name: "Lauren",
            designation: "Founder | Regenerative Farmers of America",
            quote:
              "AFTERRENDER IS A DELIGHT TO WORK WITH, THEY MAKES GREAT VIDEOS AND IS QUICK TO RESPOND TO ANY CHANGES NEEDED, HIGHLY RECOMMEND! ",
            src: "/feedbackimg2.png",
          },
        ]}
        autoplay
      />

      {/* Moving Cards */}
      <InfiniteMovingCards items={cards} direction="left" speed="normal" pauseOnHover={true} />

      <Footer />
    </>
  );
}
