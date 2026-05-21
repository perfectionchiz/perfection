"use client";
import { useState } from "react";
import Loader from "@/components/loader/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
    {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
        
    </>

  );
}
