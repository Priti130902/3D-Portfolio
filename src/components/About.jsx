"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      y: 80,
      opacity: 0,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={aboutRef}
      className="min-h-screen bg-black text-white px-20 py-40"
    >
      <h2 className="text-4xl font-bold mb-8">About Me</h2>
      <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
        I am a passionate MERN Stack Developer who enjoys building
        clean, user-friendly and scalable web applications.
        I focus on smooth user experience, modern UI and
        performance-driven development.
      </p>
    </section>
  );
}
