"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#home",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full h-16
                 bg-black/60 backdrop-blur
                 flex items-center justify-between px-10
                 text-white z-50"
    >
      <span className="font-bold">Priti</span>
      <div className="flex gap-6 text-sm">
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
