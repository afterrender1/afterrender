"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Poppins , Space_Grotesk} from "next/font/google";
import { Menu, MenuItem, ProductItem } from "@/components/MenuItem";
import Link from "next/link";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
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
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
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
      </div>

      {/* Main Section */}
      <main
        className={`${spaceGrotesk.className} min-h-screen px-6 py-24 `}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold mb-4 text-white/90 "
          >
            Our <span className="text-white/90 ">Pricing Plans</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto"
          >
            Choose the perfect plan for your needs — whether it’s editing, web
            development, product design, or automation. Powered by our top-tier
            creative team.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border font-semibold transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#0047D6] border-[#0047D6] text-white shadow-md shadow-purple-400/50"
                    : "border[#0047D6] text-white/90  hover:bg-purple-200/70"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Pricing Cards with Animation Fix */}
          <LayoutGroup>
            <motion.div
              layout
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center"
            >
              <AnimatePresence mode="popLayout">
                {filteredPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white border border-purple-400/30 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h4 className="text-lg font-semibold text-[#0047D6] mb-2">
                      {plan.category}
                    </h4>
                    <h3 className="text-2xl font-bold text-[#0047D6] mb-4">
                      {plan.title}
                    </h3>
                    <p className="text-5xl font-extrabold mb-1 text-[#0047D6]">
                      {plan.price}
                    </p>
                    <p className="text-[#0047D6] mb-6">{plan.period}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-[#0047D6]"
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
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-3 rounded-full bg-[#0047D6] text-white font-semibold hover:bg-[#0342be] transition duration-300"
                    >
                      Start Now
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>
      </main>
    </>
  );
}
