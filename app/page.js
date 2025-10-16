"use client";
import Image from "next/image";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/MenuItem";
import { useState, useEffect } from "react";
import VortexWithHero from "@/components/VortexWithHero";
import { AnimatedTestimonials } from "@/components/Testimonials";
import Footer from "@/components/Footer"

export default function Home() {
  const [active, setActive] = useState(null);

  // 👇 This controls pausing the Vortex animation
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = 600; // adjust based on layout height
      if (window.scrollY > triggerPoint && !paused) {
        setPaused(true);
        setTimeout(() => setPaused(false), 1000); // Pause for 1 second
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [paused]);

  return (
    <>
      {/* ------------------- MENU ------------------- */}
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="grid grid-cols-2 gap-6 p-4">
            <ProductItem
              title="Macbook Scroll"
              description="Smooth scroll animation section."
              href="#macbook"
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
            />
            <ProductItem
              title="3D Cards"
              description="Interactive 3D motion cards."
              href="#cards"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Capabilities">
          <div className="flex flex-col space-y-2 p-4">
            <HoveredLink href="https://nextjs.org">Next.js Docs</HoveredLink>
            <HoveredLink href="https://tailwindcss.com">Tailwind CSS</HoveredLink>
            <HoveredLink href="https://motion.dev">Motion React</HoveredLink>
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

        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="p-4 w-64 text-sm text-neutral-700 dark:text-neutral-300">
            A modern interactive UI built with Next.js, Motion, and Tailwind CSS.
          </div>
        </MenuItem>
      </Menu>

      {/* ------------------- HERO + VORTEX ------------------- */}
      <VortexWithHero paused={paused} /> {/* 👈 Pass the paused state */}

      {/* ------------------- TESTIMONIALS ------------------- */}
      <AnimatedTestimonials
        testimonials={[
          {
            name: "Mahmoud Khodur",
            designation: "Head of Project | Stealth Startup",
            quote:
              "HE WAS GREAT AT STORY TELLING WAS VERY CREATIVE IN HIGHLIGHTING CERTAIN POINTS, HE HAS A TREMENDOUS OPPORTUNITY FOR GROWTH",
            src: "/feedbackimg1.png",
          },
          {
            name: "Lauren",
            designation: "Founder | Regenerative Farmers of America",
            quote:
              "AFTERRENDER IS A DELIGHT TO WORK WITH, THEY MAKES GREAT VIDEOS AND IS QUICK TO RESPOND TO ANY CHANGES NEEDED, HIGHLY RECOMMEND! ",
            src: "/feedbackimg2.png",
          },
        ]}
        autoplay
      />
      <Footer/>
    </>
  );
}
