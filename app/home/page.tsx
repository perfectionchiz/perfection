"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ParallaxImage from "@/components/parallax-imaage";

export default function Home() {
  const pageContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(".reveal-axis-h", { scaleX: 0 }, { scaleX: 1, duration: 1.5 })
        .fromTo(
          ".reveal-axis-v",
          { scaleY: 0 },
          { scaleY: 1, duration: 1.5 },
          "-=1.5",
        )
        .fromTo(
          ".reveal-circle",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2 },
          "-=1.0",
        )

        .fromTo(
          ".reveal-polaroid-frame",
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=0.8",
        )
        .fromTo(
          ".reveal-spec-group",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.15 },
          "-=0.6",
        )
        .fromTo(
          ".reveal-geo-group",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 1, stagger: 0.15 },
          "-=1.0",
        )

        .fromTo(
          ".reveal-main-title",
          { y: "100%" },
          { y: "0%", duration: 1.2, ease: "power3.out" },
          "-=0.8",
        );
    },
    { scope: pageContainer },
  );

  return (
    <main
      ref={pageContainer}
      className="relative min-h-screen max-h-screen overflow-hidden text-foreground selection:bg-neutral-800 selection:text-white"
    >
      {/* Decorative Technical Background UI Crosshairs — Rendered strictly on Dark Theme */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 hidden dark:block">
        <div className="reveal-axis-v absolute top-0 bottom-0 left-1/2 w-px bg-foreground/10 -translate-x-1/2 origin-top" />
        <div className="reveal-axis-h absolute left-0 right-0 top-1/2 h-px bg-foreground/10 -translate-y-1/2 origin-left" />

        <div className="reveal-circle absolute top-1/2 left-1/2 w-[40vw] h-[40vw] max-w-125 max-h- border border-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-[85%] h-[85%] border border-dashed border-foreground/5 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-between px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between w-full my-auto gap-8">
          {/* LEFT SPEC BLOCK */}
          <div className="reveal-spec-group hidden md:flex flex-col gap-6 text-left pl-4 max-w-45">
            <div className="space-y-1">
              <span className="text-[9px] font-mono dark:opacity-30 block">{`// SPECIFICATION`}</span>
              <p className="uppercase font-medium text-[11px] tracking-[0.25em]">
                Fashion Model
              </p>
              <p className="uppercase font-medium text-[11px] tracking-[0.25em] dark:opacity-60 opacity-75">
                Editorial
              </p>
            </div>
            <div className="flex items-center gap-3  dark:opacity-40 opacity-60 mt-2">
              <div className="h-px w-8 dark:bg-foreground bg-gray-800" />
              <span className="text-[10px] font-mono tracking-tighter">
                ↘ OBJ_01
              </span>
            </div>
          </div>

          {/* MAIN IMAGE CENTER COMPONENT INTERFACE CONTAINER */}
          <div className="reveal-polaroid-frame w-full max-w-sm sm:max-w-md aspect-3/4 overflow-hidden relative group shadow-2xl border border-foreground/5">
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-foreground/20 pointer-events-none z-20 group-hover:scale-110 transition-transform" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-foreground/20 pointer-events-none z-20 group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-5 left-3 w-3 h-3 border-b border-l border-foreground/20 pointer-events-none z-20 group-hover:scale-110 transition-transform" />
            <div className="absolute bottom-5 right-3 w-3 h-3 border-b border-r border-foreground/20 pointer-events-none z-20 group-hover:scale-110 transition-transform" />

            <div className="absolute top-5 left-5 bg-background/80 backdrop-blur-xs border border-foreground/10 px-2 py-0.5 rounded-full z-20 pointer-events-none">
              <p className="text-[8px] font-mono tracking-widest uppercase">
                Scale 1.0x
              </p>
            </div>

            <ParallaxImage />
          </div>

          {/* RIGHT GEOLOCATION DATA BLOCK */}
          <div className="reveal-geo-group hidden md:flex flex-col gap-6 text-right pr-4 max-w-45 items-end">
            <div className="space-y-1">
              <span className="text-[9px] font-mono dark:opacity-30 block">{`// GEOLOCATION`}</span>
              <p className="uppercase font-medium text-[11px] tracking-[0.25em]">
                Lagos
              </p>
              <p className="uppercase font-medium text-[11px] tracking-[0.25em]  dark:opacity-60 opacity-75">
                Nigeria
              </p>
            </div>
            <div className="flex items-center gap-3 dark:opacity-40 opacity-60 mt-2 flex-row-reverse">
              <div className="h-px w-8 dark:bg-foreground bg-gray-800" />
              <span className="text-[10px]  font-mono tracking-tighter">
                06_NG ↙
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 w-full z-20 overflow-hidden h-[15vw] flex items-center justify-center">
          <h1 className="reveal-main-title text-[15vw] text-center font-black tracking-tight leading-[90%] select-none mix-blend-difference drop-shadow-xs will-change-transform">
            Per<span className="text-white dark:text-white">fecti</span>on
          </h1>
        </div>
      </div>
    </main>
  );
}
