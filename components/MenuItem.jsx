"use client";
import React, { useState, useEffect } from "react";
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
        className={`${poppins.className} cursor-pointer font-medium hover:opacity-90 tracking-wide`}
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
            <div className="absolute top-[calc(100%+1rem)] left-1/2 transform -translate-x-1/2 pt-4 z-50">
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

export const Menu = ({ setActive, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled((prev) => {
        const shouldBeScrolled = scrollTop > 20;
        return prev !== shouldBeScrolled ? shouldBeScrolled : prev;
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      suppressHydrationWarning
      className={`fixed w-full z-[100] flex flex-wrap items-center justify-between px-6 py-3 text-white transition-all duration-300
        ${mounted && scrolled ? "bg-white/90 text-white dark:bg-black/40 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <div className="relative w-8 h-8">
          <Image
            src="/arlogo.png"
            alt="AfterRender Logo"
            fill
            className="object-contain"
            priority
            sizes="32px"
          />
        </div>
        <span className={`${poppins.className} text-2xl font-semibold tracking-wide`}>
          AfterRender
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 text-white">
        {children}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:flex items-center space-x-2">
        <Link href="/contact" className="relative group">
          <div className="flex items-center gap-3 px-8 py-3 rounded-lg font-semibold text-white bg-[#0047d6] transition-all duration-500 ease-out relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative z-10 p-2 bg-white/10 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </motion.div>
            <span className="relative z-10 tracking-wide">Get Started</span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center relative z-[150]">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#386DFF] text-white shadow-lg rounded-b-2xl px-4 sm:px-6 py-1 flex flex-col space-y-4 z-[400]"
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { isMobile: true })
          )}
          <Link href="/contact" className="mt-2 w-full text-center bg-white text-[#386DFF] px-4 py-3 rounded-full font-medium hover:bg-purple-100 transition">
            Get Started
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => (
<Link

  href={href}
  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-4 transition-transform hover:scale-[1.02]"
>
  <img
    src={src}
    alt={title}
    className="shrink-0 rounded-md shadow-lg
      w-20 h-12          /* xs */
      sm:w-24 sm:h-14    /* sm */
      md:w-28 md:h-16    /* md */
      lg:w-32 lg:h-18    /* lg */
      object-cover"
  />

  <div className="flex flex-col">
    <h4
      className="font-semibold text-white leading-snug mb-0.5
      text-sm sm:text-base md:text-lg lg:text-xl"
    >
      {title}
    </h4>

    <p
      className="text-neutral-300 leading-tight
      text-[11px] sm:text-xs md:text-sm lg:text-base
      max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem]"
    >
      {description}
    </p>
  </div>
</Link>


);
