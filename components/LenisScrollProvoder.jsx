"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,          // smoothness speed
      smooth: true,           // enable smooth scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing curve
      smoothWheel: true,      // enable smooth wheel scroll
      smoothTouch: false,     // disable touch smoothing for better mobile feel
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
