/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, {useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import BookingForm from "@/components/booking-form";
import { useRouter } from "next/navigation";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {back}=useRouter()

useGSAP(() => {
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

  // 1. Grid lines "draw" in with a wide expansion
  tl.fromTo(
    ".reveal-grid-line",
    { autoAlpha: 0, scaleX: 0 },
    { autoAlpha: 0.05, scaleX: 1, duration: 1, ease: "power2.inOut" }
  )
  // 2. Header: Snap in with a slight horizontal drift
  .fromTo(
    ".reveal-header-node",
    { autoAlpha: 0, x: -20 },
    { autoAlpha: 1, x: 0, duration: 0.8, stagger: 0.1 },
    "-=0.7"
  )
  // 3. Form: The "Stencil" Reveal
  // We set the clip-path to hide the element, then animate it to reveal
  .fromTo(
    ".reveal-form-field",
    { 
      autoAlpha: 0, 
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", 
      scale: 0.98 
    },
    { 
      autoAlpha: 1, 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
      scale: 1,
      duration: 1, 
      stagger: 0.08,
      ease: "power3.inOut"
    },
    "-=0.6"
  );
}, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-background text-foreground pt-28 pb-24 px-6 md:px-12 lg:px-12 relative overflow-hidden select-none flex flex-col justify-center"
    >
  {/* BACKGROUND GRAPHIC AXES METRICS — Restricted to Dark Mode only */}
<div className="absolute inset-0 pointer-events-none z-0 hidden dark:block">
  <div className="reveal-grid-line invisible absolute top-1/4 left-0 right-0 h-px bg-foreground origin-left" />
  <div className="reveal-grid-line invisible absolute top-2/4 left-0 right-0 h-px bg-foreground origin-right" />
  <div className="reveal-grid-line invisible absolute top-0 bottom-0 left-[25%] w-px bg-foreground origin-top" />
  <div className="reveal-grid-line invisible absolute top-0 bottom-0 left-[75%] w-px bg-foreground origin-bottom" />
</div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-start">
        {/* LEFT COLUMN: IDENTIFICATION & METRICS */}
        <div className="lg:col-span-5 relative z-50 space-y-12">
          <div className="space-y-4">
            <span onClick={back} className="reveal-header-node  flex items-center gap-x-2 cursor-pointer invisible text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">
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
              {` // TALENT_BOOKING // EDITORIAL_01`}
            </span>
            <h1 className="reveal-header-node invisible text-5xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tighter leading-[90%]">
              LOCK IN <br />
              A CAMPAIGN <br />
              <span className="text-transparent stroke-text">WITH ME.</span>
            </h1>
          </div>

          <p className="reveal-header-node invisible text-base dark:font-light  font-sans leading-relaxed text-foreground/70 max-w-sm">
            Whether booking an editorial campaign, arranging a movement or
            motion shoot, or securing placement for runway and commercial
            projects—drop your parameters below to connect directly via Gmail.
          </p>

          <div className="reveal-header-node invisible space-y-4 pt-6 border-t border-foreground/10 font-mono text-[11px] uppercase tracking-wider max-w-xs">
            <span className="dark:opacity-30 opacity-60 block">{`// TALENT_INDEX_METRICS`}</span>
            <div className="flex justify-between border-b border-foreground/5 pb-2">
              <span className="dark:opacity-50 opacity-70">Response Time</span>
              <span className="font-bold dark:text-emerald-400 text-emerald-600">&lt; 18 HOURS</span>
            </div>
            <div className="flex justify-between border-b border-foreground/5 pb-2">
              <span className="dark:opacity-50 opacity-70">Local Base</span>
              <span>LAGOS // REMOTE</span>
            </div>
            <div className="flex justify-between pb-2">
              <span className="dark:opacity-50 opacity-70">Current Status</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full dark:bg-emerald-500 bg-emerald-700 animate-pulse" />
                AVAILABLE FOR BOOKING
              </span>
            </div>
          </div>
        </div>

<BookingForm/>
      </div>

      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px var(--color-foreground, currentColor);
        }
      `}</style>
    </div>
  );
}
