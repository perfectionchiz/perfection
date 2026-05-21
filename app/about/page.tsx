"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import profileMain from "@/public/assets/images/viral-1.jpeg";
import casual2 from "@/public/assets/images/casual-2.jpeg";
import casual3 from "@/public/assets/images/blonde-1.jpeg";
import casual4 from "@/public/assets/images/oraimo.jpeg";
import casual5 from "@/public/assets/images/casual-5.jpeg";
import casual6 from "@/public/assets/images/casual-6.jpeg";
import casual7 from "@/public/assets/images/casual-7.jpeg";
import casual8 from "@/public/assets/images/model.jpeg";
import casual9 from "@/public/assets/images/model-2.jpeg";
import casual10 from "@/public/assets/images/casual-10.jpeg";
import casual11 from "@/public/assets/images/casual-12.jpeg";
import casual12 from "@/public/assets/images/casual-17.jpeg";
import casual13 from "@/public/assets/images/casual-13.jpeg";
import casual14 from "@/public/assets/images/casual-14.jpeg";
import casual15 from "@/public/assets/images/casual-16.jpeg";
import casual16 from "@/public/assets/images/viral-4.jpeg";
import casual17 from "@/public/assets/images/viral-5.jpeg";
import testshoot from "@/public/assets/images/test-shoot.jpeg";
import shopAkwa from "@/public/assets/images/shop-akwa.jpeg";
import azach from "@/public/assets/images/azach.jpeg";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GridImage {
  id: number;
  src: StaticImageData;
  speed: string;
  rotation: string;
  size: string;
  label: string;
}

const IMAGES_GRID: GridImage[] = [
  {
    id: 1,
    src: profileMain,
    speed: "1.15",
    rotation: "rotate-[-2deg]",
    size: "w-full aspect-[3/4]",
    label: "M_01 // MAIN_PORTFOLIO",
  },
  {
    id: 2,
    src: testshoot,
    speed: "0.90",
    rotation: "rotate-[4deg]",
    size: "w-full aspect-[4/5]",
    label: "TEST // STREET_WEAR",
  },
  {
    id: 3,
    src: shopAkwa,
    speed: "1.30",
    rotation: "rotate-[-4deg]",
    size: "w-full aspect-[3/4]",
    label: "COMMERCIAL // SHOP_AKWA",
  },
  {
    id: 4,
    src: azach,
    speed: "1.05",
    rotation: "rotate-[1deg]",
    size: "w-full aspect-[16/10]",
    label: "COLLAB // UPCYCLED_DENIM",
  },
  {
    id: 5,
    src: casual4,
    speed: "1.25",
    rotation: "rotate-[6deg]",
    size: "w-full aspect-[1/1]",
    label: "CASUAL // BACKSTAGE",
  },
  {
    id: 6,
    src: casual2,
    speed: "0.80",
    rotation: "rotate-[-5deg]",
    size: "w-full aspect-[3/4]",
    label: "M_02 // EDITORIAL_LOOK",
  },
  {
    id: 7,
    src: casual3,
    speed: "1.10",
    rotation: "rotate-[3deg]",
    size: "w-full aspect-[4/5]",
    label: "BTS // OUTDOOR_SHOOT",
  },
  {
    id: 8,
    src: casual5,
    speed: "1.40",
    rotation: "rotate-[-1deg]",
    size: "w-full aspect-[2/3]",
    label: "M_03 // STUDIO_FRAME",
  },
  {
    id: 9,
    src: casual6,
    speed: "0.95",
    rotation: "rotate-[2deg]",
    size: "w-full aspect-[16/11]",
    label: "TEST // STYLING_SELECTION",
  },
  {
    id: 10,
    src: casual7,
    speed: "1.20",
    rotation: "rotate-[-3deg]",
    size: "w-full aspect-[3/4]",
    label: "M_04 // RUNWAY_REHEARSAL",
  },
  {
    id: 11,
    src: casual8,
    speed: "1.00",
    rotation: "rotate-[5deg]",
    size: "w-full aspect-[1/1]",
    label: "CASUAL // OLD_MONEY_VIBE",
  },
  {
    id: 12,
    src: casual9,
    speed: "1.35",
    rotation: "rotate-[-6deg]",
    size: "w-full aspect-[3/4]",
    label: "BTS // SET_LIGHTING",
  },
  {
    id: 13,
    src: casual10,
    speed: "0.85",
    rotation: "rotate-[1deg]",
    size: "w-full aspect-[4/5]",
    label: "TEST // MOTION_CAPTURE",
  },
  {
    id: 14,
    src: casual11,
    speed: "1.15",
    rotation: "rotate-[-2deg]",
    size: "w-full aspect-[16/10]",
    label: "M_05 // HIGH_CONTRAST",
  },
  {
    id: 15,
    src: casual12,
    speed: "1.25",
    rotation: "rotate-[4deg]",
    size: "w-full aspect-[2/3]",
    label: "COMMERCIAL // NATIVE_WEAR",
  },
  {
    id: 16,
    src: casual13,
    speed: "0.90",
    rotation: "rotate-[-3deg]",
    size: "w-full aspect-[1/1]",
    label: "CASUAL // STREET_STYLE",
  },
  {
    id: 17,
    src: casual14,
    speed: "1.10",
    rotation: "rotate-[2deg]",
    size: "w-full aspect-[3/4]",
    label: "BTS // LOOKBOOK_SETUP",
  },
  {
    id: 18,
    src: casual15,
    speed: "1.30",
    rotation: "rotate-[-4deg]",
    size: "w-full aspect-[4/5]",
    label: "M_06 // TAILORING_STUDY",
  },
  {
    id: 19,
    src: casual16,
    speed: "0.75",
    rotation: "rotate-[5deg]",
    size: "w-full aspect-[16/9]",
    label: "TEST // MOVEMENT_FRAME",
  },
  {
    id: 20,
    src: casual17,
    speed: "1.45",
    rotation: "rotate-[-1deg]",
    size: "w-full aspect-[3/4]",
    label: "DIGITALS // POLAROID_SET",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {back}=useRouter()
  useGSAP(
    () => {
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Core header manifesto reveal
      introTl
        .fromTo(
          ".reveal-header-item",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.3, stagger: 0.1 },
        )
        // 2. Hardware clip mask execution on the initial visible grid elements
        .fromTo(
          ".reveal-initial-frame",
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.inOut",
          },
          "-=1.0",
        )
        // 3. Staggered fade for the data labels below the grid cards
        .fromTo(
          ".reveal-initial-meta",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.04 },
          "-=0.7",
        );

      // Parallax execution layer
      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-speed]");
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "1");
        gsap.fromTo(
          el,
          { y: 0 },
          {
            y: () => ScrollTrigger.maxScroll(window) * (speed - 1) * 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      // Spinning Vinyl records & technical crosshairs animation loop
      gsap.to(".spinning-vinyl", {
        rotation: 360,
        duration: 12,
        ease: "none",
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-background text-foreground py-24 px-12 relative overflow-hidden selection:bg-white selection:text-black"
    >
      {/* Decorative Technical UI Overlays — Kept hidden in light mode and visible only in dark mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 hidden dark:block">
        <div className="absolute top-0 bottom-0 left-[5%] w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 left-[33%] w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 left-[66%] w-px bg-foreground" />
        <div className="absolute top-0 bottom-0 right-[5%] w-px bg-foreground" />
      </div>

      {/* SECTION 1: MANIFESTO HEADLINE */}
      <section className="relative z-10 max-w-7xl mx-auto pt-10 md:pt-10">
       <span onClick={()=>back()} className="reveal-header-item cursor-pointer text-[10px] font-mono tracking-[0.4em] uppercase opacity-40 block mb-6 flex items-center gap-3">
  {/* The Back Arrow */}
  <svg 
    width="10" 
    height="10" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="square" 
    strokeLinejoin="round"
    className="opacity-60"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
  {`// ARCHIVE_MANIFEST // EDITORIAL_BIO`}
</span>
        <h1 className="reveal-header-item text-5xl sm:text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[85%] mb-12">
          HYBRID IDENTITY:
          <br />
          MODEL<span className="text-transparent stroke-text">×CODER</span>{" "}
          <br />×<span>ILLUSTRATOR.</span>
        </h1>
      </section>

      <section className="relative z-10 w-full my-32">
        <div className="w-full text-center mb-16 border-b border-foreground/10 pb-4">
          <span className="text-xs font-mono tracking-widest dark:opacity-40 opacity-60 uppercase">
            [VISUAL ARCHIVE INDEX // FEATURED SELECTIONS]
          </span>
        </div>

        {/* Clean, strict, non-rotated grid track system */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
          {IMAGES_GRID.map((img, index) => {
            // Apply intro reveal targets smoothly over the first row array outputs on initial loading state
            const isInitialRow = index < 4;

            return (
              <div
                key={img.id}
                data-speed={img.speed}
                /* Swapped out hardcoded neutrals for dynamic foreground alphas and removed raw translation triggers */
                className="w-full bg-foreground/[0.01] p-3 pb-5 border border-foreground/10 rounded-xs will-change-transform group cursor-crosshair hover:bg-foreground/[0.03] hover:border-foreground/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                {/* Image Container with Shutter Clip and Relative Scale Reveal */}
                <div
                  className={`w-full aspect-[3/4] overflow-hidden relative bg-foreground/[0.03] mb-4 rounded-xs ${isInitialRow ? "reveal-initial-frame" : ""}`}
                >
                  {/* Minimal High-End Tint Shutter Mask */}
                  <div className="absolute inset-0 bg-foreground/[0.03] dark:bg-transparent group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />

                  <Image
                    src={img.src}
                    alt={img.label}
                    /* Increased hover scale factor slightly for a more cinematic depth shift */
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    priority={img.id <= 4}
                  />

                  {/* Technical Info Pill Overlay - Clean contrast on both themes */}
                  <div className="absolute bottom-3 left-3 bg-background border border-foreground/20 px-2 py-0.5 rounded-xs text-[7px] font-mono text-foreground tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20">
                    REF_V.{img.id.toString().padStart(2, "0")}
                  </div>

                  <div className="absolute top-3 right-3 bg-foreground text-background px-1.5 py-0.5 rounded-xs text-[7px] font-mono font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    {img.speed}X
                  </div>
                </div>

                {/* Minimal Text Baseline with High-Contrast Text Highlight */}
                <div
                  className={`flex justify-between items-center px-1 ${isInitialRow ? "reveal-initial-meta" : ""}`}
                >
                  <span className="text-[9px] font-mono opacity-40 uppercase tracking-tighter group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </span>
                  <span className="text-[8px] font-mono opacity-20 group-hover:text-foreground group-hover:opacity-100 transition-all duration-300">
                    [{img.id.toString().padStart(2, "0")}]
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 w-full my-44 max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER MATRIX */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b border-foreground/10 pb-4 mb-16 gap-4">
          <div className="space-y-1">
            <span className="text-[9px] font-mono opacity-40 block">{`// MOTION_CAPTURE_INDEX`}</span>
            <h2 className="text-3xl font-black uppercase italic tracking-tight font-sans text-foreground">
              Moving Frames & Campaigns
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest opacity-40 uppercase">
            [CANDID REELS & RECTILINEAR CAMPAIGN LOOPS]
          </span>
        </div>

        {/* Asymmetrical 3-Column Kinetic Video Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reel 01 */}
          <div
            data-speed="1.1"
            className="w-full bg-foreground/[0.01] p-3 pb-6 border border-foreground/10 rounded-xs will-change-transform group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground/[0.03] hover:border-foreground/30"
          >
            <div className="w-full aspect-[9/16] bg-foreground/[0.03] overflow-hidden relative border border-foreground/10 mb-4 rounded-xs">
              {/* Subtle high-contrast light-mode overlay mask */}
              <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              <video
                src="/assets/videos/smith-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="flex justify-between px-1 text-[9px] font-mono opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-foreground">REEL_01 // EDITORIAL_PACE</span>
              <span className="text-foreground">[2026]</span>
            </div>
          </div>

          {/* Reel 02 - Asymmetric offset preserved */}
          <div
            data-speed="0.95"
            className="w-full bg-foreground/[0.01] p-3 pb-6 border border-foreground/10 rounded-xs will-change-transform mt-0 md:mt-12 group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground/[0.03] hover:border-foreground/30"
          >
            <div className="w-full aspect-[9/16] bg-foreground/[0.03] overflow-hidden relative border border-foreground/10 mb-4 rounded-xs">
              <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              <video
                src="/assets/videos/casual-11.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover    group-hover:scale-103 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="flex justify-between px-1 text-[9px] font-mono opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-foreground">REEL_02 // COFFEE_CANDID</span>
              <span className="text-foreground">[2025]</span>
            </div>
          </div>

          {/* Reel 03 */}
          <div
            data-speed="1.2"
            className="w-full bg-foreground/[0.01] p-3 pb-6 border border-foreground/10 rounded-xs will-change-transform group transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-foreground/[0.03] hover:border-foreground/30"
          >
            <div className="w-full aspect-[9/16] bg-foreground/[0.03] overflow-hidden relative border border-foreground/10 mb-4 rounded-xs">
              <div className="absolute inset-0 bg-foreground/[0.02] dark:bg-transparent z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              <video
                src="/assets/videos/casual-12.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
            </div>
            <div className="flex justify-between px-1 text-[9px] font-mono opacity-40 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-foreground">REEL_03 // LIGHT_SHATTER</span>
              <span className="text-foreground">[2026]</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE LIVING TRIPLE-THREAT DESCRIPTION BLOCKS */}
      <section className="relative z-10 max-w-5xl mx-auto my-32 space-y-24 font-sans">
        {/* BLOCK 01: THE MODELING MECHANICS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <h2 className="md:col-span-4 text-2xl font-black italic tracking-tight uppercase border-l-2 border-foreground pl-4 leading-none">
            01 / VISUAL PROFILE
          </h2>
          <p className="md:col-span-8 text-base md:text-lg font-light text-foreground/80 leading-relaxed">
            In front of the flash, I treat motion like architecture and form
            like sculpture. My work focus centers heavily on high-contrast
            directional lighting, clean structural silhouettes, and sharp
            graphic geometries. Operating as an independent freelance model, I
            bridge contemporary editorial concepts with high-fashion and
            commercial visual landscapes.
          </p>
        </div>

        {/* BLOCK 02: THE HACKER ARC (CODE INTENT) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative">
          {/* Floating Aesthetic Terminal Line Sticker Code Element */}

          <h2 className="md:col-span-4 text-2xl font-black italic tracking-tight uppercase border-l-2 border-foreground pl-4 leading-none">
            02 / DEVELOPMENT
          </h2>

          <div className="md:col-span-8 space-y-3 text-base md:text-lg font-light text-foreground/80 leading-relaxed">
            <p className="text-base md:text-lg font-light text-foreground/80 leading-relaxed">
              Beyond the camera, I engineer high-performance user interfaces and
              mobile applications. I build clean, interactive platforms
              utilizing{" "}
              <span className="font-mono bg-foreground/[0.04] border border-foreground/15 px-2 py-0.5 rounded-md text-xs sm:text-sm text-foreground font-medium uppercase tracking-wide">
                React Native
              </span>
              ,{" "}
              <span className="font-mono bg-foreground/[0.04] border border-foreground/15 px-2 py-0.5 rounded-md text-xs sm:text-sm text-foreground font-medium uppercase tracking-wide">
                Next.js
              </span>
              , and{" "}
              <span className="font-mono bg-foreground/[0.04] border border-foreground/15 px-2 py-0.5 rounded-md text-xs sm:text-sm text-foreground font-medium uppercase tracking-wide">
                Angular
              </span>
              .
            </p>
            <p className="text-sm font-mono opacity-50 leading-relaxed whitespace-pre-line">
              {`// I specialize in optimized state handling, modular hooks, and fluid real-time interactions.
  // console.log("MODEL_PROFILE:", { height: "6'0", agency_ready: true, git_commits: "flawless" });`}
            </p>
            <div
              data-speed="1.2"
              className=" hidden w-fit lg:block text-[11px] font-mono p-5 rounded-xl pointer-events-none will-change-transform shadow-2xl backdrop-blur-md border tracking-wide whitespace-nowrap bg-white/90 text-neutral-900 border-neutral-200/60 dark:bg-neutral-950/90 dark:text-neutral-100 dark:border-neutral-800/60"
            >
              <div className="leading-relaxed">
                <span className="text-purple-600 dark:text-pink-400 font-medium">
                  const
                </span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  schedule
                </span>{" "}
                <span className="text-purple-600 dark:text-pink-400">=</span>{" "}
                <span className="text-purple-600 dark:text-pink-400">
                  await
                </span>{" "}
                <span className="text-blue-600 dark:text-cyan-400">agency</span>
                <span className="text-neutral-400 dark:text-neutral-500">
                  .
                </span>
                <span className="text-blue-600 dark:text-blue-400">runway</span>
                <span className="text-neutral-400 dark:text-neutral-500">
                  .
                </span>
                <span className="text-yellow-600 dark:text-yellow-400">
                  getAvailability
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  ();
                </span>
              </div>

              {/* ROW 02: OVERBOOKED GUARD CLAUSE EXCEPTION */}
              <div className="leading-relaxed opacity-80 dark:opacity-90 mt-1">
                <span className="text-purple-600 dark:text-pink-400 font-medium">
                  if
                </span>{" "}
                <span className="text-neutral-500 dark:text-neutral-400">
                  (
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  schedule
                </span>
                <span className="text-neutral-400 dark:text-neutral-500">
                  .
                </span>
                <span className="text-red-600 dark:text-orange-400">
                  isOverbooked
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  )
                </span>{" "}
                <span className="text-purple-600 dark:text-pink-400 font-medium">
                  throw
                </span>{" "}
                <span className="text-purple-600 dark:text-pink-400 font-medium">
                  new
                </span>{" "}
                <span className="text-green-600 dark:text-emerald-400 font-medium">
                  RescheduleException
                </span>
                <span className="text-neutral-500 dark:text-neutral-400">
                  ();
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 03: CHARCOAL AND PIXELS (ANALOG DRAWING HABIT) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <h2 className="md:col-span-4 text-2xl font-black italic tracking-tight uppercase border-l-2 border-foreground pl-4 leading-none">
            03 / RAW DRAWING
          </h2>
          <p className="md:col-span-8 text-base md:text-lg font-light text-foreground/80 leading-relaxed">
            I draw to reconnect with physical imperfections. While coding forces
            strict mathematical layout systems, slapping raw charcoal patterns
            onto sketchpads or cross-hatching figures on digital tablets lets me
            break the canvas constraints intentionally. Many of my silhouette
            movements on set are direct physical translations of sketches I
            mapped out the night before.
          </p>
        </div>

        {/* BLOCK 04: LOUD SOUNDSCAPES (MUSIC CURATION) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-foreground/10 p-8 rounded-xl bg-foreground/[0.02] hover:bg-foreground/[0.04] hover:border-foreground/30 transition-all duration-500 relative overflow-hidden group/music">
          {/* Aesthetic Vinyl Rotating Accent Graphic with Chromatic Aurora Glow */}
          {/* Aesthetic Vinyl Rotating Accent Graphic with Chromatic Aurora Glow */}
          <div className="absolute -right-24 md:-right-16 w-64 h-64 md:w-72 md:h-72 flex items-center justify-center pointer-events-none z-0">
            {/* THE VINYL PLATER SUBSTRATE: A deep background disc that forces the colors to pop on white screens */}
            <div className="absolute inset-0 rounded-full bg-neutral-950 shadow-2xl border border-foreground/10" />

            {/* The Colorful Color-Shifting Aurora Core — Now sitting cleanly on a dark backdrop */}
            <div className="spinning-vinyl absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#ff4b4b,#ffab40,#2196f3,#e040fb,#ff4b4b)] opacity-30 dark:opacity-25 blur-[1px] mix-blend-screen transition-all duration-700 group-hover/music:opacity-40" />

            {/* High-End Gloss Specular Reflection Overlay (Adds that physical 3D record shine) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-75 z-10" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-white/10 to-transparent opacity-75 z-10" />

            {/* Grooves on the Record — Uses light/white tracking borders to contrast against the dark platter substrate */}
            <div className="absolute inset-4 rounded-full border border-white/10 border-dashed z-10" />
            <div className="absolute inset-12 rounded-full border border-white/5 border-double z-10" />
            <div className="absolute inset-20 rounded-full border border-white/5 z-10" />

            {/* Center Label Core */}
            <div className="w-16 h-16 rounded-full bg-background border border-foreground/10 flex items-center justify-center shadow-xl z-20">
              <div className="w-3 h-3 rounded-full bg-foreground" />
            </div>
          </div>

          {/* LEFT COLUMN: TITLE & EQUALIZER */}
          <div className="md:col-span-4 space-y-4 z-10">
            <h2 className="text-2xl font-black italic tracking-tight uppercase border-l-2 border-foreground pl-4 leading-none text-foreground">
              04 / FREQUENCY TASTE
            </h2>

            {/* Equalizer Wave: Highly visible static state, with clean scale animation instead of jittery translation bounces */}
            <div className="flex items-end gap-[3px] h-5 pl-4 opacity-60 dark:opacity-40 group-hover/music:opacity-100 transition-all duration-500">
              <span className="w-[2px] bg-foreground rounded-full h-4 origin-bottom transition-all duration-300 animate-[pulse_1.2s_infinite_0.1s]" />
              <span className="w-[2px] bg-foreground rounded-full h-2 origin-bottom transition-all duration-300 animate-[pulse_0.8s_infinite_0.4s]" />
              <span className="w-[2px] bg-foreground rounded-full h-5 origin-bottom transition-all duration-300 animate-[pulse_1.5s_infinite_0.2s]" />
              <span className="w-[2px] bg-foreground rounded-full h-3 origin-bottom transition-all duration-300 animate-[pulse_1.0s_infinite_0.6s]" />
              <span className="w-[2px] bg-foreground rounded-full h-4 origin-bottom transition-all duration-300 animate-[pulse_0.7s_infinite_0.3s]" />
            </div>
          </div>

          {/* RIGHT COLUMN: MANIFESTO TEXT & CHIPS */}
          <div className="md:col-span-8 space-y-5 z-10 font-sans">
            <p className="text-base font-light text-foreground/90 dark:text-foreground/80 leading-relaxed max-w-xl">
              My brain operates on a multi-genre frequency track loop. I curate
              high-contrast pacing playlists that anchor my focus states on set
              or behind the keyboard.
            </p>

            {/* Genre Tags Matrix */}
            <div className="flex flex-wrap gap-2 pt-1 text-[9px] font-mono tracking-wider">
              {[
                "CINEMATIC LANA POP",
                "MIDNIGHT R&B GROOVES",
                "ELEVATED HIP-HOP LO-FI",
                "SMOKY JAZZ MATRIX",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-foreground/20 bg-foreground/[0.03] text-foreground px-3 py-1 rounded-full font-medium transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto pb-16 font-sans grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-foreground/10 pt-16">
        {/* COLUMN 01: SPECIFICATIONS */}
        <div className="space-y-4">
          {/* Boosted opacity from 30 to 50 for high-contrast visibility on clear backgrounds */}
          <span className="text-[10px] font-mono opacity-50 dark:opacity-30 block">{`// SPECIFICATION_INDEX`}</span>
          <div className="space-y-2 text-sm uppercase tracking-wider font-light text-foreground">
            {/* Sharpened row line dividing tracks slightly */}
            <div className="flex justify-between border-b border-foreground/10 dark:border-foreground/5 pb-2">
              <span>Height // Build</span>
              <span className="font-mono">186cm // Linear</span>
            </div>
            <div className="flex justify-between border-b border-foreground/10 dark:border-foreground/5 pb-2">
              <span>Core Matrix</span>
              <span className="font-mono">94 / 76 / 90</span>
            </div>
            <div className="flex justify-between pb-2">
              <span>Hair // Eyes</span>
              <span className="font-mono">Black // Brown</span>
            </div>
          </div>
        </div>

        {/* COLUMN 02: BOOKING AVAILABILITY */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono opacity-50 dark:opacity-30 block">{`// BOOKING_AVAILABILITY`}</span>
          {/* Set opacity to a solid text value on light mode to keep the italic headers distinct */}
          <ul className="text-sm uppercase tracking-widest font-black italic space-y-1 text-foreground/90 dark:text-foreground/80">
            <li>DIRECT FREELANCE</li>
            <li>RUNWAY // EDITORIAL</li>
            <li>COMMERCIAL READY</li>
            <li>WORLDWIDE TRAVEL</li>
          </ul>
        </div>

        {/* COLUMN 03: CASTING ACTIONS */}
        <div className="space-y-4 md:text-right flex flex-col md:items-end justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono opacity-50 dark:opacity-30 block">{`// CASTING_STATUS`}</span>
            {/* Swapped text-foreground/60 for a crisper text-foreground/80 color profile */}
            <p className="text-xs uppercase tracking-wider text-foreground/80 dark:text-foreground/60">
              ON-SITE READY // GLOBAL DISPATCH
            </p>
          </div>
          <a
            href="mailto:perfectionchizuruoke@gmail.com"
            className="inline-block mt-4 bg-foreground text-background text-xs font-mono tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer shadow-xl"
          >
            PING ME // ↗
          </a>
        </div>
      </section>
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px var(--color-foreground, currentColor);
        }
      `}</style>
    </div>
  );
}
