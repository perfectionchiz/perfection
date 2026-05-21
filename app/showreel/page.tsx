"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Showreel() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(".reveal-stagger", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    )
    .fromTo(".reveal-video", 
      { scale: 0.95, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.2 }, 
      "-=0.7"
    );
  }, { scope: container });

  return (
    <main ref={container} className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pt-24 pb-12 px-6 md:px-12">
      
      {/* HEADER MATRIX */}
      <section className="max-w-7xl mx-auto mb-16 space-y-4">
        <span className="reveal-stagger text-[10px] font-mono opacity-50 tracking-[0.4em] uppercase block">{`// 05_REEL_ARCHIVE`}</span>
        <h1 className="reveal-stagger text-4xl md:text-8xl font-black italic uppercase tracking-tighter">
          MOTION // SEQUENCE
        </h1>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* MAIN REEL CARD */}
        <div className="reveal-video md:col-span-2 lg:col-span-4 group relative border border-foreground/10 p-2 bg-foreground/[0.02] cursor-pointer">
          <div className="aspect-[9/16] md:aspect-[21/9] w-full overflow-hidden bg-black relative">
             <video 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 scale-100 group-hover:scale-105 duration-700 ease-out"
              src="/assets/videos/smith-vid.mp4"
              autoPlay loop muted playsInline
             />
             {/* Decorative overlay for "best in class" feel */}
             <div className="absolute inset-0 border-[0.5px] border-white/10 pointer-events-none" />
             <div className="absolute top-4 left-4 text-[9px] font-mono text-white/70 bg-black/50 backdrop-blur px-2 py-1 rounded">
               [4K_UHD // 60FPS // RAW]
             </div>
          </div>
        </div>

        {/* SECONDARY PORTRAIT REELS */}
        {['/assets/videos/grwm.mp4', '/assets/videos/azach.mp4', '/assets/videos/casual-12.mp4', '/assets/videos/benard.mp4'].map((item, i) => (
          <div key={i} className="reveal-video group border border-foreground/10 p-2 bg-foreground/[0.02] hover:bg-foreground/[0.05] transition-all duration-500">
            <div className="aspect-[9/16] w-full overflow-hidden bg-neutral-900 relative">
              <video 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                src={item}
                autoPlay loop muted playsInline
              />
            </div>
            <div className="mt-4 flex justify-between items-center px-1">
              <span className="text-[10px] font-mono uppercase opacity-40 group-hover:opacity-100 transition-opacity">CAMPAIGN_0{i + 1}</span>
              <span className="text-[10px] font-mono opacity-20 group-hover:opacity-60 transition-opacity">[2026]</span>
            </div>
          </div>
        ))}
      </section>

      {/* FOOTER ACTION */}
      <footer className="reveal-stagger max-w-7xl mx-auto mt-32 border-t border-foreground/10 pt-12 text-center">
        <p className="text-sm font-mono opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
          {`// ALL MOTION ASSETS ARE OPTIMIZED FOR HIGH-FIDELITY PLAYBACK.`} <br/>
          {` // DIRECT INQUIRIES: PERFECTIONCHIZURUOKE@GMAIL.COM`}
        </p>
      </footer>
    </main>
  );
}