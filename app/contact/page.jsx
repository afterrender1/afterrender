"use client";

import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { Menu, MenuItem , ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";
import Link from "next/link";
import { MdContactSupport } from "react-icons/md";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function ContactPage() {
  const [active, setActive] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(!(window.scrollY > lastScrollY && window.scrollY > 100));
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <div className={`${montserrat.className} w-full min-h-screen  `}>
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
                  title="Reels Shorts"
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

      {/* HERO */}
      <section className="relative z-10 pt-32 text-center text-gray-700">
        <Heading text="Contact Us" />
        <p className="text-lg md:text-xl max-w-2xl mx-auto mt-4">
          Have a question or want to start a project? Fill out the form below and we’ll get back to you.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        {submitted && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
            Your message has been sent successfully!
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-2xl p-8 flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Service Interested In</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select a Service</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Video Production">Video Production</option>
              <option value="Website Development">Website Development</option>
              <option value="N8N Automation">N8N Automation</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
