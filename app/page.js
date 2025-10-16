"use client"
import Image from "next/image";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/MenuItem";
import Hero from "@/components/Hero"
import { useState } from "react";
import VortexWithHero from "@/components/VortexWithHero";



export default function Home() {
  const [active, setActive] = useState(null);


  return (
   <>
   <Menu setActive={setActive} >
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

          <MenuItem setActive={setActive} active={active} item="Capablities">
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
   {/* <Navbar/> */}
   {/* <Hero/> */}
   <VortexWithHero/>

   </>
  );
}
