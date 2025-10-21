"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem , ProductItem } from "@/components/MenuItem";
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
      img: "/images/emerald-project.png",
      ytEmbed: "https://www.youtube.com/embed/EaCH1Xwp9Aw?si=u_2bpYPklSIe0ETu", // Replace with actual video
    },
    {
      title: "Social Media Campaign - Chao Agency",
      description:
        "Engaging social media content creation, reels, stories, and targeted campaigns to boost engagement.",
      img: "/images/chao-project.png",
      ytEmbed: "https://www.youtube.com/embed/rHfibRZisjI?si=vCA9uMqdVyGhQP4y",
    },
    {
      title: "Video Production - YouTube Series",
      description:
        "Produced high-quality videos for YouTube channels including editing, animation, and post-production.",
      img: "/images/youtube-project.png",
      ytEmbed: "https://www.youtube.com/embed/5q1njhBzdF0?si=ZXHMrWtSiAhItkO8",
    },
  ];

  return (
    <div className={`${montserrat.className} w-full min-h-screen relative`}>
      {/* Background */}
      

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
      <section className="relative z-10 pt-32 pb-20 text-center text-white">
        <Heading text={"Our Works"} />
        <p className="max-w-3xl mx-auto text-lg md:text-xl mt-4 text-gray-700">
          See our portfolio of websites, social media campaigns, videos, and interactive projects built with creativity and precision.
        </p>
      </section>

      {/* WORKS GRID */}
    {/* WORKS GRID */}
<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-20">
  {works.map((work, index) => (
    <div
      key={index}
      className="bg-gray-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row gap-8 p-6 md:p-10"
    >
      {/* Video - larger width */}
      <div className="md:w-3/4 flex flex-col items-center justify-center gap-6">
        <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            src={work.ytEmbed}
            title={work.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Details - smaller column */}
      <div className="md:w-1/4 flex flex-col justify-center space-y-6">
        <h3 className="text-3xl font-bold text-white">{work.title}</h3>
        <p className="text-gray-300">{work.description}</p>
      </div>
    </div>
  ))}
</section>




      {/* CTA SECTION */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mx-4 md:mx-20 backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let’s Build Your Next Project 🌐
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Partner with us to bring your ideas to life, from websites to social media campaigns and video production.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300"
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
