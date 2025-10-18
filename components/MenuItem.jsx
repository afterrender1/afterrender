"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const MenuItem = ({ setActive, active, item, children }) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={`${poppins.className} cursor-pointer font-medium  hover:opacity-90  tracking-wide`}
      >
        {item}
      </motion.p>

      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};
// bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500 animate-gradient-x

export const Menu = ({ setActive, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative z-[100] flex flex-wrap items-center justify-around  rounded-b-4xl px-6 py-3 transparent text-neutral-800  hover:scale-110 duration-400 "
    >
      {/* Left — Logo */}
<Link href={"/"}>
      <div className="flex items-center gap-2 cursor-pointer hover:scale-110 duration-400">
        <Image
          src="/arlogo.png"
          alt="Logo"
          width={32}
          height={30}
          style={{ height: "auto", width: "auto" }}
          priority
        />
        <span
          className={`${poppins.className} text-2xl font-semibold tracking-wide`}
        >
          AfterRender
        </span>
      </div>

</Link>

      {/* Center — Links (visible on md and up) */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 text-black" style={{color: "bla"}}>
        {children}
      </div>

      {/* Right — Button */}
      <div className="hidden md:flex items-center space-x-2">
     
<button
  className={`${poppins.className}  relative group text-black transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-14 text-base cursor-pointer pl-[4rem]  pr-6 bg-[#ba9ffa] shadow-purple-400/30 hover:shadow-purple-400/30`}
>
  <div
    className="absolute left-0 top-0 mt-2 ml-2 bg-white text-black-600 p-[0.35rem] bottom-1 group-hover:w-[calc(100%-0.9rem)] transition-all rounded-md duration-300 h-10 w-10"
  >
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="h-full w-full"
>
  <path d="M10 8h.01" />
  <path d="M12 12h.01" />
  <path d="M14 8h.01" />
  <path d="M16 12h.01" />
  <path d="M18 8h.01" />
  <path d="M6 8h.01" />
  <path d="M7 16h10" />
  <path d="M8 12h.01" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
</svg>

  </div>

  <div>Get Started</div>

</button>

      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center relative z-[150]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-purple-800 text-white shadow-lg rounded-b-2xl px-6 py-4 flex flex-col space-y-4 z-[200]"
        >
          {children}
          <button className="bg-white text-purple-700 px-4 py-2 rounded-full font-medium hover:bg-purple-100 transition">
            Get Start
          </button>
        </motion.div>
      )}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <Link href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-100 hover:text-white dark:text-neutral-200 transition-colors "
    >
      {children}
    </a>
  );
};
