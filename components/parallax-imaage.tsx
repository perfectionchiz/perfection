"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import Image from "next/image";
import polariod1 from "@/public/assets/images/polaroid-1.jpeg";
import polariod2 from "@/public/assets/images/azach-5.jpeg";
export default function ParallaxImage() {
  const { theme } = useTheme();
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [currentSrc, setCurrentSrc] = useState(polariod1);

  useEffect(() => {
    if (!imgRef.current) return;

    const targetSrc = theme === "light" ? polariod2 : polariod1;
    if (currentSrc === targetSrc) return;

    const tl = gsap.timeline();

    tl.to(imgRef.current, {
      opacity: 0,
      duration: 0.25,
      ease: "power2.inOut",
      onComplete: () => {
        setCurrentSrc(targetSrc);
      },
    });

    tl.to(imgRef.current, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });

  }, [theme, currentSrc]);

  return (
    <div className="w-full overflow-hidden group relative">
      <Image
        ref={imgRef}
        className="w-full object-cover transition-transform duration-700 scale-102 group-hover:scale-108"
        alt="Editorial Cover Artwork"
        src={currentSrc}
        priority
      />
    </div>
  );
}