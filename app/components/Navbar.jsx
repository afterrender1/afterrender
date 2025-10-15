"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/#hero" },
    { name: "Tutorials", href: "/#tutorials" },
    { name: "Intro", href: "/#intro" },
    { name: "Cuts", href: "/#cuts" },
    { name: "Contact", href: "/#contact" },
    { name: "Process", href: "/#process" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 transparent">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold text-xl text-sky-900">
          <span className="text-sky-600">Deigo</span> Hair Studio
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.name}>
              <Link
                href={l.href}
                className="text-sky-900 hover:text-sky-700 transition-colors font-medium"
              >
                {l.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-sky-500 text-white px-5 py-2 rounded-md font-medium hover:bg-sky-600 transition"
          >
            Get in Touch!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md text-sky-900 hover:bg-white/30"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/60 backdrop-blur-md px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sky-900 font-medium hover:text-sky-700"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-sky-500 text-white text-center py-2 rounded-md font-medium hover:bg-sky-600 transition"
            >
              Get in Touch!
            </Link>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3 text-sky-500 text-sm">
            <Phone size={16} /> +1 245 6484388
          </div>
        </div>
      )}
    </header>
  );
}
