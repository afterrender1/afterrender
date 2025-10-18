"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white tracking-tight hover:text-purple-400 transition"
        >
          AfterRender
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-300 hover:text-white transition"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition"
          >
            Contact
          </Link>
          <Link
            href="/pricing"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            <RiMoneyDollarCircleLine size={20} /> Pricing
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-3 text-center"
        >
          <Link href="/" className="block text-gray-300 hover:text-white">Home</Link>
          <Link href="/portfolio" className="block text-gray-300 hover:text-white">Portfolio</Link>
          <Link href="/blog" className="block text-gray-300 hover:text-white">Blog</Link>
          <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
          <Link
            href="/pricing"
            className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded-full transition"
          >
            Pricing
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
