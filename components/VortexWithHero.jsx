"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Playfair_Display, Space_Grotesk } from "next/font/google";

// Fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// -----------------------------
// 🎨 VORTEX BACKGROUND EFFECT
// -----------------------------
function Vortex({
  particleCount = 900,
  baseHue = 280,
  baseSpeed = 0.2,
  rangeSpeed = 2.5,
  backgroundColor = "#ffffff",
  containerClassName = "h-[140vh]",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Handle resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle setup
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2,
      hue: baseHue + Math.random() * 60,
      speed: baseSpeed + Math.random() * rangeSpeed,
      angle: Math.random() * Math.PI * 2,
    }));

    // Draw loop
    function draw() {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.angle += 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 70%, 0.4)`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => window.removeEventListener("resize", handleResize);
  }, [particleCount, baseHue, baseSpeed, rangeSpeed, backgroundColor]);

  return (
    <div className={`relative ${containerClassName}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

// -----------------------------
// 💜 HERO SECTION WITH VORTEX
// -----------------------------
export default function VortexWithHero() {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Background Vortex */}
      <div className="absolute inset-0 z-0">
        <Vortex
          particleCount={900}
          baseHue={280}
          baseSpeed={0.2}
          rangeSpeed={2.5}
          backgroundColor="#ffffff"
          containerClassName="h-[140vh]"
        />
      </div>

      {/* Foreground Hero Section */}
      <div className="relative z-50 mx-auto my-10 flex max-w-7xl flex-col items-center justify-center px-4 py-20">
        {/* Heading */}
        <h1
          className={`${spaceGrotesk.className} text-center text-3xl md:text-5xl lg:text-7xl font-extrabold text-purple-800`}
        >
          {"Design. Animate. Launch. Instantly."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.12,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`${playfair.className} mx-auto max-w-2xl py-5 text-center text-lg text-neutral-700`}
        >
          With AfterRender’s AI-powered tools, you can bring your creative ideas
          to life — design and deploy stunning web experiences in just minutes.
        </motion.p>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 w-full rounded-3xl border border-purple-300 bg-gradient-to-b from-purple-50 to-white p-3 shadow-2xl"
        >
          
          <div className="w-full overflow-hidden rounded-2xl border border-purple-200">
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[16/9] h-auto w-full object-cover"
            >
              <source src="/herovideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
