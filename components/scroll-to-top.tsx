"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  useEffect(() => {
    if (isVisible) {
      gsap.to(".scroll-btn", { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.5, ease: "power4.out" });
    } else {
      gsap.to(".scroll-btn", { opacity: 0, y: 20, pointerEvents: "none", duration: 0.3 });
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
  <button
  onClick={scrollToTop}
  className="scroll-btn fixed bottom-20 cursor-pointer right-8 z-50 flex flex-col items-center gap-2 opacity-0 group"
>
  {/* Viewfinder Circle */}
  <div className="relative w-10 h-10 flex items-center justify-center border border-foreground/20 rounded-full hover:border-foreground/60 transition-all duration-500 bg-background/50 backdrop-blur-md">
    <svg 
      width="16" height="16" viewBox="0 0 24 24" fill="none" 
      className="stroke-foreground transition-transform duration-500 group-hover:-translate-y-0.5"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
    
    {/* Subtle rotating glow effect */}
    <div className="absolute inset-0 rounded-full border border-foreground/5 animate-[spin_10s_linear_infinite]" />
  </div>

  {/* Technical Label */}
  <span className="text-[8px] font-mono tracking-[0.2em] uppercase opacity-30 group-hover:opacity-70 transition-opacity">
    Top
  </span>
</button>
  );
}