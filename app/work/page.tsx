/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import polariod1 from "@/public/assets/images/mr-smith.jpeg";
import polariod2 from "@/public/assets/images/polaroid-1.jpeg";
import polariod3 from "@/public/assets/images/polaroid-2.jpeg";
import polariod4 from "@/public/assets/images/polaroid-3.jpeg";
import polariod5 from "@/public/assets/images/polaroid-4.jpeg";
import smith2 from "@/public/assets/images/smith-2.jpeg";
import smith3 from "@/public/assets/images/smith-3.jpeg";
import smith4 from "@/public/assets/images/smith-4.jpeg";
import testshoot from "@/public/assets/images/test-shoot.jpeg";
import testshoot2 from "@/public/assets/images/test-shhot-2.jpeg";
import testshoot3 from "@/public/assets/images/test-shoot-3.jpeg";
import testshoot4 from "@/public/assets/images/test-shoot-4.jpeg";
import shopAkwa from "@/public/assets/images/shop-akwa.jpeg";
import shopAkwa2 from "@/public/assets/images/shop-akwa-2.jpeg";
import shopAkwa3 from "@/public/assets/images/shop-akwa-3.jpeg";
import shopAkwa4 from "@/public/assets/images/shop-akwa-4.jpeg";
import shopAkwa5 from "@/public/assets/images/shop-akwa-5.jpeg";

import azach from "@/public/assets/images/azach.jpeg";
import azach2 from "@/public/assets/images/azach-2.jpeg";
import azach3 from "@/public/assets/images/azach-3.jpeg";
import azach4 from "@/public/assets/images/azach-4.jpeg";
import azach5 from "@/public/assets/images/azach-5.jpeg";
import benardSamuel from "@/public/assets/images/benard-samuel.jpg";
import benard2 from "@/public/assets/images/benard-2.jpg";
import benard3 from "@/public/assets/images/benard-3.jpg";
import benard4 from "@/public/assets/images/benard-4.jpg";
import tricia from "@/public/assets/images/tricia.jpg";
import tricia2 from "@/public/assets/images/tricia-2.jpeg";
import tricia3 from "@/public/assets/images/tricia-3.jpeg";
import tricia4 from "@/public/assets/images/tricia-4.jpeg";
import tricia5 from "@/public/assets/images/tricia-5.jpeg";
import viral1 from "@/public/assets/images/viral-1.jpeg";
import viral2 from "@/public/assets/images/viral-2.jpeg";
import viral3 from "@/public/assets/images/viral-3.jpeg";
import viral4 from "@/public/assets/images/viral-4.jpeg";
import viral5 from "@/public/assets/images/viral-5.jpeg";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
interface GalleryItem {
  type: "image" | "video";
  src: StaticImageData | any;
}
interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  src: StaticImageData;
  align: "left" | "right" | "center";
  description: string;
  meta: {
    location: string;
    shutter: string;
    iso: string;
  };
  gallery?: GalleryItem[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    title: "MR & MRS SMITH",
    category: "CAMPAIGN / EDITORIAL",
    year: "2026",
    src: polariod1,
    align: "left",
    description:
      "A collaborative editorial captured in Lagos, framing a modern bridegroom concept. In partnership with a lead photographer and female co-model, the narrative explores avant-garde traditional silhouettes juxtaposed with sharp tailoring.",
    meta: { location: "LAGOS, NG", shutter: "1/250s", iso: "ISO 100" },
    gallery: [
      { type: "video", src: "/assets/videos/smith-vid.mp4" },
      { type: "image", src: polariod1 },
      { type: "image", src: smith2 },
      { type: "image", src: smith3 },
      { type: "image", src: smith4 },
    ],
  },
  {
    id: "02",
    title: "BACK TO SCHOOL",
    category: "TEST SHOOT",
    year: "2025",
    src: testshoot,
    align: "right",
    description:
      "A collaborative street-wear test shoot with a lead photographer in Lagos that went viral on Pinterest. The project focuses on raw textures, film grain aesthetics, and unpolished structural movement.",
    meta: { location: "LAGOS, NG", shutter: "1/160s", iso: "ISO 400" },
    gallery: [
      { type: "image", src: testshoot },
      { type: "image", src: testshoot2 },
      { type: "image", src: testshoot3 },
      { type: "image", src: testshoot4 },
    ],
  },
  {
    id: "03",
    title: "SHOP AKWA",
    category: "COMMERCIAL",
    year: "2024",
    src: shopAkwa,
    align: "left",
    description:
      "A commercial print and lifestyle campaign for upcoming fashion brand Shop Akwa in Lagos, utilizing expansive framing, sharp lighting, and lightweight technical drapery movement.",
    meta: { location: "LAGOS, NG", shutter: "1/500s", iso: "ISO 50" },
    gallery: [
      { type: "image", src: shopAkwa },
      { type: "image", src: shopAkwa2 },
      { type: "image", src: shopAkwa3 },
      { type: "image", src: shopAkwa4 },
      { type: "image", src: shopAkwa5 },
    ],
  },
  {
    id: "04",
    title: "AZACH",
    category: "COLLABORATION",
    year: "2025",
    src: azach,
    align: "right",
    description:
      "A sustainable fashion campaign for AZACH focused on recycled and upcycled denim transformed into high-fashion streetwear. Shot in Lagos, this project was a creative collaboration alongside photographer Tricia and co-model Dapo.",
    meta: { location: "LAGOS, NG", shutter: "1/200s", iso: "ISO 160" },
    gallery: [
      { type: "image", src: azach },
      { type: "image", src: azach2 },
      { type: "image", src: azach3 },
      { type: "image", src: azach4 },
      { type: "image", src: azach5 },
    ],
  },
  {
    id: "05",
    title: "BENARD SAMUEL",
    category: "COMMERCIAL",
    year: "2026",
    src: benardSamuel,
    align: "left",
    description:
      "A commercial campaign for Benard Samuel shot in Lagos, Nigeria. The lookbook spotlights modern traditional aesthetics, emphasizing sharp structural cuts, textured fabrics, and sophisticated native wear tailoring.",
    meta: { location: "LAGOS, NG", shutter: "1/80s", iso: "ISO 1600" },
    gallery: [
      { type: "image", src: benardSamuel },
      { type: "image", src: benard2 },
      { type: "image", src: benard3 },
      { type: "image", src: benard4 },
    ],
  },
  {
    id: "06",
    title: "SILENT SYMMETRY",
    category: "COLLABORATION",
    year: "2025",
    src: tricia,
    align: "right",
    description:
      "An organic, passion-driven test collaboration with photographer Tricia in Lagos. Built as a mutual creative exercise to push visual boundaries, the shoot tests geometric compositions, sharp focal thresholds, and high-contrast styling.",
    meta: { location: "LAGOS, NG", shutter: "1/125s", iso: "ISO 200" },
    gallery: [
      { type: "image", src: tricia },
      { type: "image", src: tricia2 },
      { type: "image", src: tricia3 },
      { type: "image", src: tricia4 },
      { type: "image", src: tricia5 },
    ],
  },
  {
    id: "07",
    title: "VIRAL POST",
    category: "CASUAL / EDITORIAL",
    year: "2025",
    src: viral1,
    align: "left",
    description:
      "A casual outdoor shoot in Lagos that went viral online, featuring an old money aesthetic styled with a sweatshirt, tie, pants, and loafers.",
    meta: { location: "LAGOS, NG", shutter: "1/400s", iso: "ISO 100" },
    gallery: [
      { type: "image", src: viral1 },
      { type: "image", src: viral2 },
      { type: "image", src: viral3 },
      { type: "image", src: viral5 },
      { type: "image", src: viral4 },
    ],
  },
  {
    id: "08",
    title: "POLAROIDS",
    category: "DIGITALS / POLAROIDS",
    year: "2025",
    src: polariod2,
    align: "right",
    description:
      "Standard agency digitals and polaroids captured in Lagos, showing raw, unedited frames to highlight natural proportions and features.",
    meta: { location: "LAGOS, NG", shutter: "1/60s", iso: "ISO 400" },
    gallery: [
      { type: "image", src: polariod2 },
      { type: "image", src: polariod4 },
      { type: "image", src: polariod3 },
      { type: "image", src: polariod5 },
    ],
  },
];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const {back}=useRouter()

  // INTEGRATED PAGE-LOAD REVEAL TIMELINE (DOES NOT ALTER SCROLLTRIGGER MAPPINGS)
  useGSAP(
    () => {
      const introTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Title components slide up smoothly from baseline boundaries
      introTl
        .fromTo(
          ".reveal-idx-header",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 },
        )
        // 2. Initial viewable structural viewport elements pull open via hardware masks
        .fromTo(
          ".reveal-initial-card",
          { clipPath: "inset(100% 0% 0% 0%)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=0.9",
        )
        // 3. Identification layout metrics execute an offset slide sequence
        .fromTo(
          ".reveal-initial-text",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.05 },
          "-=0.6",
        );

      // ORIGINAL PARALLAX WORKSPACE ROW ENGINE
      const projects = gsap.utils.toArray<HTMLElement>(".project-row");
      projects.forEach((row) => {
        const imageContainer = row.querySelector(".parallax-container");
        const img = row.querySelector(".parallax-img");
        const title = row.querySelector(".project-title");
        const sidebar = row.querySelector(".project-sidebar");

        if (!imageContainer || !img) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.75,
          },
        });
        tl.fromTo(img, { yPercent: -12 }, { yPercent: 12, ease: "none" }, 0);
        if (title) {
          tl.fromTo(
            title,
            { yPercent: 15 },
            { yPercent: -15, ease: "none" },
            0,
          );
        }
        if (sidebar) {
          tl.fromTo(
            sidebar,
            { yPercent: 8 },
            { yPercent: -8, ease: "none" },
            0,
          );
        }
      });
    },
    { scope: containerRef },
  );

  useGSAP(() => {
    if (activeProject && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
        {
          clipPath: "circle(150% at 50% 50%)",
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
        },
      );

      gsap.fromTo(
        ".carousel-slide",
        { scale: 1.2, opacity: 0, x: 100 },
        {
          scale: 1,
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.4,
          ease: "power3.out",
        },
      );
    }
  }, [activeProject]);

  const slide = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.75;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-background text-foreground py-32 relative "
    >
      <div className="px-8 md:px-12 mb-36 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1 overflow-hidden">
          <span onClick={back} className="reveal-idx-header cursor-pointer text-[10px] font-mono opacity-30 flex items-center gap-x-2"> <svg 
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
  </svg>{`// INDEXED PORTFOLIO`}</span>
          <h2 className="reveal-idx-header text-4xl md:text-5xl font-black uppercase italic tracking-tight font-sans">
            Selected Works [{PROJECTS_DATA.length}]
          </h2>
        </div>
        <p className="reveal-idx-header text-xs uppercase font-mono tracking-widest opacity-40 max-w-xs md:text-right">
          A careful curation of raw concepts, movement captures, and structural
          shapes.
        </p>
      </div>

      <div className="w-full flex flex-col gap-56 md:gap-56 relative">
        {PROJECTS_DATA.map((project, idx) => {
          const alignmentClass =
            project.align === "left"
              ? "justify-start pl-8 md:pl-24 pr-8 md:pr-[35vw]"
              : project.align === "right"
                ? "justify-end pr-8 md:pr-24 pl-8 md:pl-[35vw]"
                : "justify-center px-8";

          const isLeft = project.align === "left";
          const isCenter = project.align === "center";

          // We apply the setup hooks dynamically onto the first workspace matrix layout row on init mount
          const isInitialView = idx === 0;

          return (
            <section
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`project-row w-full flex cursor-pointer ${alignmentClass} relative items-center group`}
            >
              <div
                className={`bg-number absolute text-[26vw] font-black tracking-tighter dark:text-zinc-900   text-zinc-200 select-none pointer-events-none z-0 uppercase italic font-sans will-change-transform
                ${isLeft ? "right-4 md:right-16" : ""}
                ${project.align === "right" ? "left-4 md:left-16" : ""}
                ${isCenter ? "top-[-5%] left-1/2 -translate-x-1/2" : ""}`}
              >
                {project.id}
              </div>

              {!isCenter && (
                <div
                  className={`project-sidebar hidden xl:flex flex-col gap-6 absolute top-12 max-w-60 font-sans z-20 pointer-events-none
                    ${isLeft ? "left-[68vw] text-left" : "right-[68vw] text-right"}
                    ${isInitialView ? "reveal-initial-text" : ""}`}
                >
                  <p className="text-xs tracking-wide leading-relaxed dark:font-light text-neutral-700 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div
                    className={`flex flex-col gap-1 text-[10px] font-mono dark:opacity-30 opacity-75 ${isLeft ? "items-start" : "items-end"}`}
                  >
                    <span>LOC // {project.meta.location}</span>
                    <span>SHUTTER // {project.meta.shutter}</span>
                    <span>INDEX // {project.meta.iso}</span>
                  </div>

                  <div
                    className={`w-12 h-px bg-foreground/20 mt-2 ${!isLeft && "self-end"}`}
                  />
                </div>
              )}

         <div className="w-full max-w-xs sm:max-w-md md:max-w-lg aspect-3/4 relative z-10 flex flex-col">
  <div
    className={`parallax-container w-full h-full overflow-hidden relative border border-foreground/10 shadow-xl bg-foreground/[0.03] ${isInitialView ? "reveal-initial-card" : ""}`}
  >
    {/* Dynamic Corner Accents: Using 'border-foreground/40' ensures they adapt to the theme */}
    <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-foreground/40 z-20" />
    <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-foreground/40 z-20" />
    <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-foreground/40 z-20" />
    <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-foreground/40 z-20" />

    <Image
      className="parallax-img w-full h-[124%] object-cover absolute top-0 left-0 scale-105 select-none pointer-events-none will-change-transform"
      alt={project.title}
      src={project.src}
      priority
      quality={100}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>

  <div
    className={`mt-6 flex justify-between items-start font-sans px-1 ${isInitialView ? "reveal-initial-text" : ""}`}
  >
    <div className="space-y-1">
      <h3 className="project-title text-xl md:text-2xl font-black italic tracking-tight uppercase leading-none text-foreground">
        {project.title}
      </h3>
      <span className="text-[10px] tracking-[0.2em] font-medium opacity-60 block uppercase">
        {project.category}
      </span>
      <p className="text-xs mt-3 block xl:hidden opacity-70 leading-relaxed max-w-sm font-light font-sans">
        {project.description}
      </p>
    </div>
    <span className="text-xs font-mono tracking-tighter opacity-50">
      [{project.year}]
    </span>
  </div>
</div>
            </section>
          );
        })}
      </div>
{activeProject && (
  <div
    ref={modalRef}
    className="fixed z-999 inset-0 w-full h-screen flex flex-col justify-between p-6 md:p-12 will-change-transform transition-colors duration-500
      /* Reads variables directly from your root theme configuration */
      bg-background text-foreground"
  >
    {/* TOP BAR MATRIX */}
    <div className="w-full flex justify-between items-start z-[200]">
      <div className="space-y-1">
        <span className="text-[9px] font-mono tracking-widest dark:opacity-40 opacity-70  block">
          CASE STUDY // {activeProject.id}
        </span>
        <h4 className="text-2xl font-black italic tracking-tight uppercase font-sans leading-none">
          {activeProject.title}
        </h4>
      </div>

<button
  onClick={() => {
    gsap.to(modalRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => setActiveProject(null),
    });
  }}
  className="group flex items-center gap-2.5 bg-current/5 border border-current/10 px-4 py-2 rounded-full cursor-pointer transition-all duration-300
    /* Light Mode (White bg, Black text): Hovers to black background with white text */
    hover:bg-neutral-950 hover:text-neutral-50
    /* Dark Mode (Black bg, White text): Hovers to white background with black text */
    dark:hover:bg-white dark:hover:text-neutral-950"
>
  <span className="text-[10px] font-mono tracking-widest uppercase">
    Close Shield
  </span>
  <svg 
    className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-90" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
</button>
    </div>

    {/* CINEMATIC CAROUSEL RUNWAY */}
    <div className="relative w-full my-auto h-[60vh] flex items-center">
{/* Left Slider Arrow Container */}
<button
  onClick={() => slide("left")}
  className="absolute left-4 z-20 bg-current/5 text-current border border-current/10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md group/arrow transition-all duration-300
    /* Light Mode hover state */
    hover:bg-neutral-950 hover:text-neutral-50
    /* Dark Mode hover state */
    dark:hover:bg-white dark:hover:text-neutral-950"
>
  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/arrow:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
</button>

{/* Right Slider Arrow Container */}
<button
  onClick={() => slide("right")}
  className="absolute right-4 z-20 bg-current/5 text-current border border-current/10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md group/arrow transition-all duration-300
    /* Light Mode hover state */
    hover:bg-neutral-950 hover:text-neutral-50
    /* Dark Mode hover state */
    dark:hover:bg-white dark:hover:text-neutral-950"
>
  <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/arrow:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
</button>
      <div
        ref={carouselRef}
        className="w-full h-full flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-[10vw] items-center"
      >
        {activeProject.gallery?.map((item, idx) => (
          <div
            key={idx}
            className="carousel-slide min-w-[75vw] sm:min-w-[50vw] md:min-w-[35vw] h-[90%] flex-shrink-0 overflow-hidden relative border border-current/5 shadow-2xl rounded-xs group transition-colors duration-500 bg-current/5"
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt="Shoot Asset Frame"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-102"
                priority
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
            )}

            <span className="absolute bottom-4 right-4 text-[9px] font-mono bg-background text-foreground border border-current/10 px-2 py-1 rounded-xs tracking-wider opacity-80">
              [FR_{(idx + 1).toString().padStart(2, "0")}]
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-end border-t border-current/10 pt-6">
      <p className="text-xs text-current dark:opacity-70 opacity-70 max-w-sm leading-relaxed dark:font-light font-sans">
        {activeProject.description}
      </p>
      
      <div className="justify-center gap-12 text-[10px] font-mono dark:opacity-40 opacity-70  hidden md:flex tracking-wider">
        <span>LOC // {activeProject.meta.location}</span>
        <span>INDEX // {activeProject.meta.iso}</span>
      </div>
      
      <span className="text-right text-[10px] font-mono dark:opacity-20 opacity-50  hidden md:block tracking-widest">
        ©/2026 // STUDIO_ARCHIVE
      </span>
    </div>
  </div>
)}
    </div>
  );
}
