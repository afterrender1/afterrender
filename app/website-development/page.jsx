"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaLaptopCode, FaServer, FaPaintBrush } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { MdContactSupport } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function WebsiteDevelopmentPage() {
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
          backgroundImage: "url('/webdev-bg.jpg')",
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
              <MdContactSupport size={22} /> Go To Our Works
            </Link>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <Link
              href="/portfolio"
              className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
            >
              <MdContactSupport size={22} /> Go to Portfolio
            </Link>
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
      <section className="relative z-10 pt-32 md:pt-40">
        <Heading text="Website Development" />
        <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 gap-10">
          {/* Left */}
          <div className="flex flex-col md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-700">
              Build Digital Experiences That Inspire 🚀
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-white/80">
              We design and develop websites that are not just visually stunning — but fast, scalable, and built to convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 text-white">
              <button className="px-8 sm:px-10 py-3 bg-[#0047d6] rounded-lg font-medium hover:bg-[#0640b4] transition">
                Start a Project
              </button>
              <button className="px-8 sm:px-10 py-3 bg-gray-700 rounded-lg font-medium hover:bg-gray-600 transition">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/website-development.png"
                alt="Website Development"
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
      <section className="relative z-10 pt-20 pb-16 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Heading text="Our Web Development Workflow" />
          <p className="text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-16 text-sm sm:text-base">
            A strategic, design-driven approach that ensures your website looks amazing and performs flawlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                icon: <FaPaintBrush className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "Design & UI/UX",
                desc: "Crafting intuitive, responsive designs that captivate users.",
              },
              {
                icon: <FaLaptopCode className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "Development",
                desc: "Building fast, SEO-optimized, and scalable web experiences.",
              },
              {
                icon: <FaServer className="text-purple-600 text-4xl mx-auto mb-4" />,
                title: "Launch & Support",
                desc: "Seamless deployment with continuous maintenance & optimization.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
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
              { name: "Next.js", img: "/logos/njslogo.png" },
              { name: "React", img: "/logos/reactlogo.png" },
              { name: "Tailwind CSS", img: "/logos/tailwind.png" },
              { name: "Node.js", img: "/logos/nodejs.png" },
              { name: "Firebase", img: "/logos/firebase.png" },
              { name: "MongoDB", img: "/logos/mongodb.png" },
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
      <section className="relative py-20 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mx-0 sm:mx-10 md:mx-20 backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-8 sm:p-10 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Let’s Build Your Digital Future 🌐
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Partner with us to create a website that not only looks great but drives real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 sm:px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
                Start Your Project
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
