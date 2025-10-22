"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Poppins } from "next/font/google";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/MenuItem";
import Link from "next/link";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const pricingData = [
  {
    id: 1,
    category: "Video Editing",
    title: "Starter Edit Plan",
    price: "$199",
    period: "per video",
    features: [
      "HD Editing",
      "Color Grading",
      "Basic Motion Graphics",
      "3 Revisions",
    ],
  },
  {
    id: 2,
    category: "Web Development",
    title: "Pro Website",
    price: "$499",
    period: "one-time",
    features: [
      "5 Pages Website",
      "SEO Optimized",
      "Responsive Design",
      "1 Month Support",
    ],
  },
  {
    id: 3,
    category: "Product Design",
    title: "UX/UI Kit",
    price: "$199",
    period: "per project",
    features: [
      "Wireframes + Mockups",
      "Interactive Prototype",
      "Design System",
      "Figma File Delivery",
    ],
  },
  {
    id: 4,
    category: "n8n Automation",
    title: "Workflow Setup",
    price: "$299",
    period: "per workflow",
    features: [
      "Custom Node Setup",
      "API Integration",
      "Error Handling",
      "Dashboard Analytics",
    ],
  },
];

export default function PricingPage() {
  const [filter, setFilter] = useState("All");
    const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);

  const filteredPlans =
    filter === "All"
      ? pricingData
      : pricingData.filter((plan) => plan.category === filter);

  const categories = [
    "All",
    "Video Editing",
    "Web Development",
    "Product Design",
    "n8n Automation",
  ];



  return (
    <>
<div
  
  className="w-full"
>

      <div className="fixed top-0 left-0 w-full z-50 ">
          <Menu setActive={setActive} className="bg-transparent backdrop-blur-md">
            {/* Menu Items */}
<MenuItem setActive={setActive} active={active} item="Pricing">
  <Link
    href="/pricing"
    className="text-white text-base font-semibold hover:text-purple-400 duration-300  p-5 transition"
  >
  <span className="flex justify-center items-center gap-2">
    <RiMoneyDollarCircleLine size={23} />  Go to Pricing 
  </span>

  </Link>
</MenuItem>

            <MenuItem setActive={setActive} active={active} item="Capabilities">
               <div className="grid grid-cols-2 gap-6 p-4">
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
           <MenuItem setActive={setActive} active={active} item="Contact">
              <Link setActive={setActive} active={active}
                
                href="/contact"
                className="text-white text-base font-semibold hover:text-purple-400 duration-300 p-5 transition flex items-center gap-2"
              >
              <MdContactSupport  size={22}/>
 Go to Contact
              </Link>
            </MenuItem>
          </Menu>
        </div>
    
    
    <main
      className={`${poppins.className} min-h-screen px-6 py-20 `}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-purple-900">
          Our <span className="text-purple-600">Pricing Plans</span>
        </h2>
        <p className="text-purple-800/80 mb-12 text-lg max-w-2xl mx-auto">
          Choose the perfect plan for your needs — whether it’s editing, web
          development, product design, or automation. Powered by our top-tier
          creative team.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 ">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-purple-700 border-purple-700 text-white shadow-md shadow-purple-400/50"
                  : "border-purple-500 text-purple-800 hover:bg-purple-200/70"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
          <AnimatePresence>
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8 text-left shadow-lg hover:shadow-xl hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.03]"
              >
                <h4 className="text-lg font-semibold text-purple-600 mb-2">
                  {plan.category}
                </h4>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {plan.title}
                </h3>
                <p className="text-5xl font-extrabold mb-1 text-purple-700">
                  {plan.price}
                </p>
                <p className="text-purple-500 mb-6">{plan.period}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-purple-800/90"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="w-5 h-5 mr-2 text-green-500"
                      >
                        <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300">
                  Start Now
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
</div>

    </>
  );
}
