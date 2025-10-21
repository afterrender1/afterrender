"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat, Playfair_Display } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCogs, FaConnectdevelop, FaBolt, FaServer } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Heading } from "@/components/Heading";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function N8NAutomationPage() {
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
              <ProductItem title="Video Editing" description="Smooth scroll animation section." href="/video-editing" src="/images/video-editing-image.jpg" />
              <ProductItem title="Video Production" description="Interactive 3D motion cards." href="/video-production" src="/images/video-production-image.jpg" />
              <ProductItem title="Website Development" description="Interactive 3D motion cards." href="/website-development" src="/images/website-development-image.jpeg" />
              <ProductItem title="N8N Automation" description="Interactive 3D motion cards." href="/n8n-automation" src="/images/n8n-automation-image.jpg" />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Our Works">
            <div className="p-4 w-64 text-sm text-gray-300">Automation workflows for startups & enterprises.</div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Portfolio">
            <div className="p-4 w-64 text-sm text-gray-300">Explore N8N automations and workflow integrations.</div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="p-4 w-64 text-sm text-gray-300">Let’s discuss your automation needs.</div>
          </MenuItem>
        </Menu>
      </motion.div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32">
        <Heading text={"N8N Automation"} />
        <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-46 py-16 md:py-24 gap-12 md:gap-20">
          {/* Left */}
          <div className="flex flex-col md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Automate. Integrate. Innovate ⚙️
            </h1>
            <p className="text-gray-900 text-lg leading-relaxed">
              Supercharge your business with N8N automations that connect apps, streamline workflows, and save hours of manual work — every day.
            </p>
            <div className="flex gap-4 pt-4 text-white">
              <button className="px-10 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-600 transition">
                Build My Automation
              </button>
              <button className="px-6 py-3 bg-black rounded-lg font-medium hover:bg-gray-600 transition">
                Explore Use Cases
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/n8n-automation.png"
                alt="N8N Automation"
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
      <section className="relative z-10 pt-32 pb-24 text-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Automation Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We simplify complex business operations through smart workflow design and seamless integrations.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaCogs className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Workflow Design</h3>
              <p className="text-sm text-gray-600">We map out your processes and identify where automation drives impact.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaConnectdevelop className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">App Integrations</h3>
              <p className="text-sm text-gray-600">Connecting CRMs, APIs, and databases with N8N for full synchronization.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <FaBolt className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Launch & Optimization</h3>
              <p className="text-sm text-gray-600">Deploy, test, and scale your automations for long-term efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS SECTION */}
      <section className="relative z-10 py-24 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tools & Integrations 🔗</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We build automations that connect the tools you already love — saving you time, reducing costs, and boosting productivity.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "N8N", img: "/logos/n8nlogo.jpg" },
              { name: "Slack", img: "/logos/slacklogo.png" },
              { name: "Airtable", img: "/logos/airtablelogo.png" },
              { name: "Google Sheets", img: "/logos/gsheetslogo.png" },
              { name: "Make (Integromat)", img: "/logos/makelogo.png" },
              { name: "Notion", img: "/logos/notionlogo.png" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="group relative cursor-pointer bg-white w-64 h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="flex items-center justify-center h-80">
                  <img src={tool.img} alt={tool.name} className="w-20 h-20" />
                </div>
                <div className="absolute bg-white -bottom-28 w-64 px-5 py-2 flex flex-col gap-2 rounded-t-3xl hover:bg-purple-100 group-hover:bottom-0 transition-all duration-500 shadow-lg">
                  <span className="text-black font-bold text-2xl">{tool.name}</span>
                  <p className="text-gray-600 text-sm">Integrated seamlessly with N8N.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative z-10 py-24 text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Automation Plans 💰</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            Simple, transparent pricing for every business — from startups to enterprises.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Starter", price: "$299", features: ["Up to 5 Workflows", "Basic Integrations", "Email Support"] },
              { title: "Professional", price: "$699", features: ["Up to 20 Workflows", "Custom Nodes", "Priority Support"] },
              { title: "Enterprise", price: "$1499", features: ["Unlimited Workflows", "Dedicated Server Setup", "24/7 Support"] },
            ].map((plan) => (
              <div
                key={plan.title}
                className="bg-gray-50 border border-gray-200 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
                <span className="block text-5xl font-bold text-gray-800 mb-3">{plan.price}</span>
                <p className="text-gray-600 mb-6">One-time setup fee</p>
                <button className="relative group inline-block w-full py-4 px-6 text-center bg-purple-300 text-gray-800 hover:text-white font-semibold rounded-full overflow-hidden transition duration-300">
                  <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full transition duration-500"></div>
                  <span className="relative">Start Automating</span>
                </button>
                <ul className="mt-6 text-left text-gray-700 space-y-2">
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
      <section className="relative py-24 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="mx-20 backdrop-blur-xl bg-black rounded-3xl shadow-2xl p-10 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate Smarter with N8N 🤖
            </h2>
            <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Scale your operations without scaling your workload. Let’s automate your success story today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 shadow-md hover:shadow-xl">
                Start Your Workflow
              </button>
              <button className="px-10 py-4 bg-transparent border border-white font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Book a Free Automation Call
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
