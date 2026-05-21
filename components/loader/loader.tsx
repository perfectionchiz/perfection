"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/navigation";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const { push } = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        value: 100,
        duration: 2.8,
        ease: "power4.inOut",
        onUpdate: () => {
          setProgress(Math.floor(obj.value));
        },
        onComplete: () => {
          const tl = gsap.timeline({
            onComplete: () => {
              onComplete();
              push('/home');
            }
          });

          // Text falls away cleanly
          tl.to(".loader-text-element", {
            y: -40,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power3.in"
          })
          // Left Shutter translates out of sight
          .to(".loader-panel-left", {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            duration: 1.2,
            ease: "power4.inOut"
          }, "-=0.2")
          // Right Shutter translates simultaneously 
          .to(".loader-panel-right", {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            duration: 1.2,
            ease: "power4.inOut"
          }, "-=1.2");
        }
      });

      // Subtle atmospheric flicker on loading status
      gsap.fromTo(".loader-flicker", 
        { opacity: 0.3 }, 
        { opacity: 1, duration: 0.1, repeat: 12, yoyo: true, ease: "none" }
      );

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete, push]);

  return (
    <div ref={containerRef} className="fixed z-1000 inset-0 grid grid-cols-2 pointer-events-auto select-none font-sans overflow-hidden">
      
      {/* LEFT SPLIT SHUTTER PANEL */}
      <div className="loader-panel-left bg-neutral-950 border-r border-white/5 w-full h-full flex flex-col justify-between p-8 md:p-12 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-transform">
        <div className="loader-text-element flex items-center gap-2 text-white">
          <span className="font-black text-sm tracking-widest">P.</span>
          <span className="text-[9px] font-mono tracking-wider opacity-30">[BOOK_2026]</span>
        </div>
        
        <div className="relative overflow-hidden h-[120px] sm:h-[160px] md:h-[200px] flex items-end">
         <h1 
  ref={counterRef} 
  className="loader-text-element text-[120px] sm:text-[160px] md:text-[220px] font-black italic text-white tracking-tighter leading-none translate-x-4 md:translate-x-8"
>
  {progress.toString().padStart(3, "0")}
</h1>
        </div>

        <div className="loader-text-element text-[9px] font-mono text-white/40 uppercase tracking-[0.2em]">
          {`// PORTFOLIO INDEX INITIALIZATION`}
        </div>
      </div>

      {/* RIGHT SPLIT SHUTTER PANEL */}
      <div className="loader-panel-right bg-neutral-950 w-full h-full flex flex-col justify-between p-8 md:p-12 items-end [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] will-change-transform">
        <div className="loader-text-element text-[9px] font-mono text-white/40 tracking-wider text-right uppercase">
          BASE // LAGOS, NG <br />
          STATUS // <span className="text-[#c5fb45] loader-flicker font-bold">TUNING VISUALS</span>
        </div>

        <div className="loader-text-element hidden md:block text-right font-mono text-[9px] text-white/20 max-w-xs space-y-1">
          <p>[TALENT_BOARD] CALIBRATING PRESETS...</p>
          <p>[DIGITALS_V2] LOADING IMAGE COMPOSITIONS...</p>
          <p>[MOTION_REEL] SYNCING CINEMATIC FRAMES...</p>
        </div>

        <div className="loader-text-element flex items-center gap-4 text-[9px] font-mono text-white/40 tracking-[0.15em]">
          <span>INDEX_V1.04</span>
          <span className="w-12 h-px bg-white/10 relative overflow-hidden">
            <span 
              className="absolute left-0 top-0 h-full bg-[#c5fb45] transition-all duration-300 ease-out" 
              style={{ width: `${progress}%` }}
            />
          </span>
        </div>
      </div>

    </div>
  );
}