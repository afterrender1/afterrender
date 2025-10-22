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
    <div className={`${montserrat.className} w-full min-h-screen relative `}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
     
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
              <Link 
                
                href="/portfolio"
                className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
              >
              <MdContactSupport  size={22}/>
 Go to portfolio
              </Link>
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


      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 pt-32">
          <div>
            <Heading text={"Video Editing"}/>
  </div>
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-46 py-16 md:py-24 gap-12 md:gap-20">
          
          {/* Left Section */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-700 ">
              Craft Your Story, <br /> Frame by Frame.
            </h1>
            <p className=" text-lg leading-relaxed text-white/80">
              The next-generation video editor that empowers you to create breathtaking cinematic experiences. 
              Intuitive, powerful, and built for the future of filmmaking.
            </p>

            <div className="flex gap-4 pt-4 text-white">
              <button className="px-18 py-3 bg-[#0047d6] rounded-lg font-medium hover:bg-[#0d3a94] transition">
                Get Start
              </button>
              <button className="px-6 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition">
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

<section className="relative z-10 pt-32 pb-24 text-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-20">
              <div className="mb-6">
            <Heading text={"Video Editing Workflow"}/>
  </div>
      <p className="text-gray-700 max-w-2xl mx-auto">
        From import to final export — a seamless creative journey powered by precision and style.
      </p>
    </div>

    {/* Workflow Section */}
    <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Step 1 */}
      <div className="bg-white  hover:border hover:border-purple-800 p-6 w-full md:w-1/3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white text-lg font-bold rounded-full mx-auto mb-4">
          1
        </div>
        <h3 className="text-xl font-semibold mb-2">Import Footage</h3>
        <p className="text-sm text-gray-700">
          Bring your raw clips into the workspace and start your creative process.
        </p>
      </div>

      {/* Video (Center) */}
      <div className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg group  hover:border hover:border-purple-800 ">
        <video
          src="/herovideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl opacity-95 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
          <h3 className="text-2xl font-bold mb-1 drop-shadow-lg flex items-center gap-2">
            Editing in Action <TfiVideoClapper color="white"/>

          </h3>
          <p className="text-sm text-gray-200 max-w-md drop-shadow">
            Real-time editing with cinematic color grading and visual effects.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white  hover:border hover:border-purple-800  p-6 w-full md:w-1/3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white text-lg font-bold rounded-full mx-auto mb-4">
          2
        </div>
        <h3 className="text-xl font-semibold mb-2">Cut & Sync</h3>
        <p className="text-sm text-gray-600">
          Trim, sync, and arrange your shots for a smooth storytelling experience.
        </p>
      </div>
    </div>

    {/* Step 3 (Bottom Row) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      <div className="bg-white  hover:border hover:border-purple-800  p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center md:col-start-2">
        <div className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white text-lg font-bold rounded-full mx-auto mb-4">
        3
        </div>
        <h3 className="text-xl font-semibold mb-2">Export & Share</h3>
        <p className="text-sm text-gray-600">
          Deliver your masterpiece across platforms with professional-grade quality.
        </p>
      </div>
    </div>
  </div>
</section>


{/* we use  */}
<section className="relative z-10 py-24 text-gray-900 ">

  <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
            <Heading text={"Tools That Power Our Edits"}/>
  </div>
    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
      Our creative process is powered by the best professional tools in the
      industry — ensuring cinematic precision and seamless workflows.
    </p>

    <div className="flex flex-wrap justify-center gap-5">
      {/* Card 1 */}
      <div className="relative group cursor-pointer overflow-hidden text-gray-800 h-80 w-64 rounded-2xl transition-all duration-700">
        <div className="w-64 h-80 bg-white flex items-center justify-center">
          <img src="/logos/prlogo.png" alt="Premiere Pro" className="w-20 h-20" />
        </div>
        <div className="absolute bg-white -bottom-28 w-64 p-5 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
          <span className="textblack font-semibold text-sm uppercase">
            Premiere
          </span>
          <span className="font-bold text-2xl">Premiere Pro</span>
          <p className="text-gray-600 text-sm">
            Professional video editing software for all types of creators.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative group cursor-pointer overflow-hidden text-gray-800 h-80 w-64 rounded-2xl transition-all duration-700">
        <div className="w-64 h-80 bg-white flex items-center justify-center">
          <img src="/logos/aelogo.png" alt="After Effects" className="w-20 h-20" />
        </div>
        <div className="absolute bg-white -bottom-28 w-64 p-4 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
          <span className="textblack font-semibold text-sm uppercase">
            Adobe
          </span>
          <span className="font-bold text-2xl">After Effects</span>
          <p className="text-gray-600 text-sm">
            Create motion graphics and cinematic visual effects with precision.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative group cursor-pointer overflow-hidden text-gray-800 h-80 w-64 rounded-2xl transition-all duration-700">
        <div className="w-64 h-80 bg-white   flex items-center justify-center">
          <img src="/logos/dvlogo.png" alt="DaVinci Resolve" className="w-20 h-20" />
        </div>
        <div className="absolute bg-white -bottom-28 w-64 p-4 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
          <span className="textblack font-semibold text-sm uppercase">
            Blackmagic
          </span>
          <span className="font-bold text-2xl">DaVinci Resolve</span>
          <p className="text-gray-600 text-sm">
            Advanced color grading, editing, and VFX — all in one suite.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="relative group cursor-pointer overflow-hidden text-gray-800 h-80 w-64 rounded-2xl transition-all duration-700">
        <div className="w-64 h-80 bg-white flex items-center justify-center">
          <img src="/logos/finalcut.png" alt="Final Cut Pro" className="w-20 h-20" />
        </div>
        <div className="absolute bg-white -bottom-28 w-64 p-4 flex flex-col gap-2 hover:bg-purple-100 rounded-t-3xl group-hover:bottom-0 transition-all duration-500 shadow-lg">
          <span className="textblack font-semibold text-sm uppercase">
            Apple
          </span>
          <span className="font-bold text-2xl">Final Cut Pro</span>
          <p className="text-gray-600 text-sm">
            High-performance video editing designed for Mac professionals.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* pricing */}
<section className="relative z-10 py-24 text-gray-900 bg-transparent">
  <div className="max-w-6xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
              <div className="mb-6">
            <Heading text={"Simple , Transparent Pricing"}/>
  </div>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Choose a plan that matches your editing goals — no hidden fees, just pure creativity.
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      
      {/* Basic Plan */}
      <div className="w-full mx-auto max-w-[380px]">
        <div className="max-w-sm mx-auto pt-10 px-10 pb-8 bg-gray-50 rounded-3xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-3">Basic</h5>
            <span className="block text-5xl font-bold text-gray-800 mb-3">$29</span>
            <span className="block text-gray-600 font-medium mb-6">
              per user / month
            </span>

            <button className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-white cursor-pointer bg-purple-300 font-semibold rounded-full overflow-hidden transition duration-300">
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
              <span className="relative">Start 7-Day Trial</span>
            </button>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>3 Edits per Month</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Color Correction</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span className="text-gray-500 line-through">Advanced Effects</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Pro Plan */}
      <div className="w-full mx-auto max-w-[380px]">
        <div className="max-w-sm mx-auto pt-10 px-10 pb-8 bg-gray-100 rounded-3xl shadow-md border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-3">Pro</h5>
            <span className="block text-5xl font-bold text-gray-800 mb-3">$59</span>
            <span className="block text-gray-600 font-medium mb-6">
              per user / month
            </span>

            <button className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-white cursor-pointer bg-purple-300 font-semibold rounded-full overflow-hidden transition duration-300">
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
              <span className="relative">Get Pro Access</span>
            </button>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>10 Video Edits</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Motion Graphics</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Sound Mixing</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="w-full mx-auto max-w-[380px]">
        <div className="max-w-sm mx-auto pt-10 px-10 pb-8 bg-gray-50 rounded-3xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
          <div className="text-center mb-6">
            <h5 className="text-2xl font-semibold text-gray-800 mb-3">Premium</h5>
            <span className="block text-5xl font-bold text-gray-800 mb-3">$99</span>
            <span className="block text-gray-600 font-medium mb-6">
              per user / month
            </span>

            <button className="relative group inline-block w-full py-4 px-6 text-center text-gray-800 hover:text-white cursor-pointer bg-purple-300 font-semibold rounded-full overflow-hidden transition duration-300">
              <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-105 transition duration-500"></div>
              <span className="relative">Go Premium</span>
            </button>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Unlimited Edits</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Dedicated Editor</span>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-gray-800 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9z" />
              </svg>
              <span>Priority 24/7 Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* cta */}
{/* CTA SECTION */}
<section className="relative py-24 text-white overflow-hidden">
  <div className="absolute inset-0  opacity-20"></div>

  <div className="max-w-5xl mx-auto relative z-10 text-center bg-black rounded-xl py-8 px-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
      Ready to Bring Your Story to Life? 🎬
    </h2>
    <p className="text-lg md:text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
      Whether you’re launching a brand, creating content, or building your next film —  
      we’ll help you craft visuals that captivate and inspire.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-4">
      <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
        Start Your Project
      </button>
      <button className="px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
        Book a Free Consultation
      </button>
    </div>
  </div>

 
</section>


<Footer/>

      {/* ================= END HERO SECTION ================= */}
    </div>
  );
}
