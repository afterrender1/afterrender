"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-500 animate-gradient-x text-white p-4 md:p-6 lg:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Logo and Contact Info */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">AfterRender</h3>
          <p>71-75, Shelton Street, Covent Garden, London, WC2H 9JQ, UNITED KINGDOM</p>
          <div className="flex justify-center md:justify-start space-x-2 mt-2">
            <a href="#"><span>Be</span></a>
            <a href="#"><span>fb</span></a>
            <a href="#"><span>in</span></a>
            <a href="#"><span>ig</span></a>
            <a href="#"><span>yt</span></a>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/case-studies">Our Case Studies</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><Link href="/hire-designer">Hire a Designer</Link></li>
            <li><Link href="/no-code">No-code</Link></li>
            <li><Link href="/time-material">Time and material</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
          </ul>
        </div>

        {/* Capabilities and Contact */}
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">Capabilities</h4>
            <ul className="space-y-1">
              <li>Graphic Design</li>
              <li>Motion Graphics</li>
              <li>Infographic Design & Illustration</li>
              <li>Brand Identity Design</li>
              <li>UI/UX Design</li>
              <li>App UI/UX Design</li>
              <li>Website Design</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>contact@duck.design</p>
            <p>+1 267 799 1800</p>
            <p>+44 1183 282090</p>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded mt-2">BOOK A CALL</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-center md:flex md:justify-between">
        <div className="mb-2 md:mb-0">
          <a href="/refund-policy">Refund Policy</a> | <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="https://www.upwork.com" target="_blank">upwork</a>
          <a href="https://clutch.co" target="_blank">Clutch</a>
          <a href="https://sortlist.com" target="_blank">sortlist</a>
          <a href="https://www.trustpilot.com" target="_blank">Trustpilot</a>
        </div>
      </div>

      <p className="text-center mt-4 text-sm">© 2025 DuckDesign. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;