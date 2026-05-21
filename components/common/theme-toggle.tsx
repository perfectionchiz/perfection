/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Function to load voices
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      // Target reliable female voices
      const femaleVoice = voices.find(v => 
        v.name.includes("Samantha") || 
        v.name.includes("Google US English Female") || 
        v.name.includes("Microsoft Zira")
      );
      if (femaleVoice) voiceRef.current = femaleVoice;
    };

    // Chrome/Edge loads voices asynchronously
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    const message = new SpeechSynthesisUtterance(
      nextTheme === "dark" ? "Dark mode activated" : "Light mode activated"
    );
    
    message.rate = 1.0;
    message.pitch = 1.4;
    message.volume = 0.5;
    
    // Use the pre-fetched female voice
    if (voiceRef.current) message.voice = voiceRef.current;
    
    setTimeout(() => {
      window.speechSynthesis.speak(message);
    }, 250);
  };

  if (!mounted) return null; // Or your loading state

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 cursor-pointer right-6 z-50 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase shadow-xl hover:scale-105 transition-all duration-300"
    >
      {theme === "dark" ? "Mode // Light ☼" : "Mode // Dark ☾"}
    </button>
  );
}