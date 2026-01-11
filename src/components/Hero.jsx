"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroCinematic() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // HERO CINEMATIC ZOOM OUT
    gsap.fromTo(
      heroRef.current,
      {
        scale: 1,
        rotateX: 0,
      },
      {
        scale: 0.85,
        rotateX: 8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=500",
          scrub: true,
          pin: true,
        },
      }
    );

    // TEXT FADE (VERY SUBTLE)
    gsap.fromTo(
      contentRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=300",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-screen bg-black flex items-center justify-center">
      <div
        ref={heroRef}
        className="w-[900px] h-[520px] bg-zinc-900 rounded-3xl
                   flex items-center justify-between px-20
                   shadow-[0_60px_160px_rgba(0,0,0,0.9)]"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* LEFT TEXT */}
        <div ref={contentRef} className="text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Hi, I’m <br />
            <span className="text-red-400">Priti</span>
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            MERN Stack Developer
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden">
          <Image
            src="/images/Priti.jpg"
            alt="Priti"
            width={260}
            height={340}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
