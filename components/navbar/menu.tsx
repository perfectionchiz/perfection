/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "../common/theme-toggle";
import ScrollToTop from "../scroll-to-top";

const menuItems = [
  { title: "Home", href: "/home" },
  { title: "Work", href: "/work" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Menu = () => {
  const container = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const phoneNumber = "+2347038517961";
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [pendingRoute, setPendingRoute] = useState<string | null>(null);

  const formattedNumber = phoneNumber.replace(
    /(\+234)(\d{3})(\d{3})(\d{4})/,
    "$1 $2 $3 $4",
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    setPendingRoute(href);
    setIsMenuOpen(false);
  };

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });
      gsap.set(".sleek-route-loader", { scaleY: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%,100% 0%,100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container },
  );

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((err) => {
        console.log(
          "Audio playback blocked by browser autocomplete rules:",
          err,
        );
      });
      setIsPlaying(true);
    }
  };

  // Handle menu animations and loading triggers
  useEffect(() => {
    if (isMenuOpen) {
      setPendingRoute(null);
      tl.current?.play();
    } else {
      tl.current?.eventCallback("onReverseComplete", () => {
        if (pendingRoute) {
          // GUARD: If user targets the current page, close out layout clean
          if (pendingRoute === pathname) {
            setPendingRoute(null);
            return;
          }

          gsap
            .timeline({
              onComplete: () => {
                router.push(pendingRoute);
                setPendingRoute(null);
              },
            })
            .to(".sleek-route-loader", {
              scaleY: 1,
              duration: 0.4,
              ease: "power3.in",
            })
            .to(".sleek-loader-progress", {
              width: "100%",
              duration: 0.8,
              ease: "power2.inOut",
            });
        }
      });
      tl.current?.reverse();
    }
  }, [isMenuOpen, pendingRoute, router, pathname]);

  // Clean layout reset immediately upon successful route confirmation
  useEffect(() => {
    gsap
      .timeline()
      .to(".sleek-route-loader", {
        scaleY: 0,
        duration: 0.3,
        ease: "power3.out",
      })
      .set(".sleek-loader-progress", {
        width: "0%",
      });
  }, [pathname]);

  useEffect(() => {
    audioRef.current = new Audio("/audio/jazz.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={container} className="relative">
      {/* SLEEK NATIVE LINEAR ROUTE LOADER MATRIX */}
<div className="sleek-route-loader fixed top-0 left-0 w-screen h-1.5 bg-neutral-200/50 dark:bg-neutral-800/50 origin-top z-[9999]">
  <div className="sleek-loader-progress w-0 h-full bg-neutral-950 dark:bg-white" />
</div>

      <header className="w-full fixed z-20 flex justify-between items-center p-12 mix-blend-difference">
        <div
          onClick={() => router.push("/home")}
          className="flex items-center cursor-pointer gap-2"
        >
          <span className="font-bold text-sm tracking-widest uppercase text-white">
            P.
          </span>
          <span className="text-[10px] tracking-wider dark:opacity-40 opacity-60 font-light font-mono text-white">
            [2026_PRTFL]
          </span>
        </div>
        <div className="flex gap-8 text-[11px] tracking-[0.2em] uppercase font-medium text-white">
          <ThemeToggle />
          <span
            onClick={toggleAudio}
            className={`cursor-pointer transition-all duration-300 flex items-center gap-1.5 ${
              isPlaying ? " font-bold" : "hover:opacity-60"
            }`}
          >
            {isPlaying ? (
              <>
                PAUSE JAZZ
                <span className="flex gap-0.5 h-2.5 items-end">
                  <span className="w-[1.5px] bg-current h-full rounded-xs animate-[bounce_0.6s_infinite_0.1s]" />
                  <span className="w-[1.5px]  bg-current h-[60%] rounded-xs animate-[bounce_0.4s_infinite_0.3s]" />
                  <span className="w-[1.5px] bg-current h-[80%] rounded-xs animate-[bounce_0.5s_infinite_0.2s]" />
                </span>
              </>
            ) : (
              "PLAY // ♫"
            )}
          </span>
          <span
            onClick={toggleMenu}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            Menu
          </span>
        </div>
      </header>
      <div
        className="menu-overlay fixed z-[1000] top-0 left-0 w-screen h-screen flex p-[2em] [clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] transition-colors duration-500
  /* Light Mode Website: Menu opens up as a solid, dramatic void of black with white text */
  bg-neutral-950 text-neutral-50 
  /* Dark Mode Website: Menu opens up as a crisp, stark sheet of white with black text */
  dark:bg-white dark:text-neutral-950"
      >
        <div className="menu-bar fixed top-0 left-0 w-screen flex justify-between items-center z-20 p-[2em]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-widest uppercase">
              P.
            </span>
            <span className="text-[10px] tracking-wider opacity-80 font-light font-mono">
              [2026_PRTFL]
            </span>
          </div>

          <div
            className="text-[11px] tracking-[0.2em] uppercase font-medium cursor-pointer"
            onClick={toggleMenu}
          >
            close
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="menu-close-icon flex-2 flex items-end cursor-pointer text-[100px] leading-[70%] select-none hover:opacity-50 transition-opacity duration-300
    /* Light Mode Website (Black Menu): Outline blends with the deep black backdrop */
    [-webkit-text-stroke:3px_#0a0a0a] 
    /* Dark Mode Website (White Menu): Outline blends with the pure white backdrop */
    dark:[-webkit-text-stroke:3px_#ffffff]"
        >
          &#x2715;
        </div>

        <div className="menu-copy flex flex-col flex-4 justify-between pt-[2em]">
          <div className="relative menu-links">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="menu-link-item [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
              >
                <div className="uppercase relative w-max menu-link-item-holder">
                <button
  onClick={(e) => handleNavigation(e, item.href)}
  // Added tracking-tight to keep it grounded
  className="menu-link text-[70px] md:text-[80px] tracking-tight leading-[0.85] block relative overflow-hidden group/nav text-left w-full bg-transparent border-none outline-none cursor-pointer select-none"
>
  {/* Using font-medium provides a substantial feel without the 'bulky' stroke */}
  <span className="block transition-transform duration-500 ease-out font-medium tracking-tight transform translate-y-0 group-hover/nav:translate-y-[-120%] will-change-transform">
    {item.title}
  </span>

  <span className="absolute left-0 top-[120%] block transition-transform duration-500 ease-out font-medium italic tracking-tight transform translate-y-0 group-hover/nav:translate-y-[-120%] will-change-transform">
    {item.title}
  </span>
</button>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info flex">
            <div className="menu-info-col flex flex-1 flex-col justify-end text-[11px] uppercase font-bold tracking-wider space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:opacity-60 transition-opacity w-max"
              >
                Instagram
                {/* Precision custom Behance-style tiny external arrow */}
                <svg
                  className="w-2.5 h-2.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 will-change-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:opacity-60 transition-opacity w-max"
              >
                Pinterest
                <svg
                  className="w-2.5 h-2.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 will-change-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 hover:opacity-60 transition-opacity w-max"
              >
                Tiktok
                <svg
                  className="w-2.5 h-2.5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 will-change-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>

            <div className="menu-info-col flex-1 flex flex-col justify-end text-right font-mono text-[11px] font-bold opacity-80 space-y-1">
              <p className="hover:opacity-60 cursor-pointer transition-opacity">
                perfectionchizuruoke@gmail.com
              </p>
              <p className="hover:opacity-60 cursor-pointer transition-opacity">
                {formattedNumber}
              </p>
            </div>
          </div>
        </div>

        <div onClick={(e)=>handleNavigation(e as any, '/showreel')} className="menu-preview cursor-pointer flex-4 flex items-end justify-end">
          <div  className="group/preview relative overflow-hidden pb-1 border-b border-current/20 hover:border-current transition-colors duration-300">
            <p className="uppercase text-[11px] tracking-[0.2em] font-bold">
              Watch Showreel
            </p>
            {/* bg-current forces the animated line to match the theme color perfectly */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-current translate-x-[-100%] group-hover/preview:translate-x-0 transition-transform duration-500 ease-out" />
          </div>
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default Menu;
