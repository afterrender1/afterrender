"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Youtube, Linkedin, Dribbble } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${spaceGrotesk.className} relative m-6 rounded-3xl text-gray-100 mt-8 bg-gradient-to-br from-gray-900/70 via-gray-950/60 to-gray-900/70 backdrop-blur-xl`}
      style={{
        borderImage: "linear-gradient(to right, #a855f7, #ec4899) 1",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* --- Company --- */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">AfterRender</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Creative studio building digital experiences that inspire and convert.
          </p>
          <div className="flex space-x-4 mt-4">
            {[
              { Icon: Instagram, href: "https://instagram.com" },
              { Icon: Youtube, href: "https://youtube.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Dribbble, href: "https://behance.net" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-2 rounded-full bg-white/10 hover:bg-purple-600/30 transition"
              >
                <Icon className="w-5 h-5 text-purple-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* --- Navigation --- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            {["Home", "Pricing", "Portfolio", "Blog", "Contact"].map((item, i) => (
              <motion.li key={i} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for design tips, updates, and exclusive offers.
          </p>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center bg-white/10 border border-white/10 rounded-2xl p-2 backdrop-blur-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 w-full"
          >
            {/* motion wrapper for animated input */}
            <motion.div
              whileFocus={{ scale: 1.02, boxShadow: "0 0 15px rgba(168,85,247,0.4)" }}
              className="flex-1 w-full"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent text-sm px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/5 rounded-xl sm:rounded-full transition-all duration-300"
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold px-6 py-3 rounded-xl sm:rounded-full transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </motion.form>

          <p className="text-xs text-gray-400 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>

        {/* --- Contact --- */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Karachi, Pakistan RJ Mall Gate 3</li>
            <li>contact@afterrender.com</li>
            <li>+92 325373433</li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="border-t border-gray-700/50 text-center py-6 text-white text-sm">
        © {currentYear} AfterRender. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
