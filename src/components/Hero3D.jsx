"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScreen() {
  const screenRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Screen depth animation
    gsap.fromTo(
      screenRef.current,
      { scale: 1.1, rotateX: 10 },
      {
        scale: 1,
        rotateX: 0,
        scrollTrigger: {
          trigger: screenRef.current,
          start: "top top",
          end: "+=400",
          scrub: true,
        },
      }
    );

    // Inside content scroll
    gsap.to(contentRef.current, {
      y: "-70%",
      scrollTrigger: {
        trigger: screenRef.current,
        start: "top top",
        end: "+=1200",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-[200vh] bg-black flex justify-center pt-40">
      <div
        ref={screenRef}
        className="relative w-[900px] h-[520px] bg-zinc-900 rounded-3xl
                   overflow-hidden shadow-2xl"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* SCREEN CONTENT */}
        <div
  ref={contentRef}
  className="absolute inset-0 p-16 text-white space-y-60"
>
  {/* HERO */}
  <section className="min-h-screen flex flex-col justify-center">
    <h1 className="text-6xl font-bold">Hi, I’m Priti</h1>
    <p className="mt-4 text-2xl text-gray-400">
      MERN Stack Developer
    </p>
  </section>

  {/* SERVICES */}
  <section className="min-h-screen">
    <h2 className="text-4xl font-bold mb-10">Services</h2>

    <div className="grid grid-cols-3 gap-8">
      <div className="bg-white/5 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold">Web Development</h3>
        <p className="text-gray-400 mt-2">
          Modern, scalable web apps using React & Next.js
        </p>
      </div>

      <div className="bg-white/5 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold">MERN Stack</h3>
        <p className="text-gray-400 mt-2">
          Full-stack apps with Node, MongoDB & APIs
        </p>
      </div>

      <div className="bg-white/5 p-8 rounded-2xl">
        <h3 className="text-xl font-semibold">UI Development</h3>
        <p className="text-gray-400 mt-2">
          Clean, responsive & animated interfaces
        </p>
      </div>
    </div>
  </section>
</div>
{/* PROJECTS */}
<section className="min-h-screen">
  <h2 className="text-4xl font-bold mb-12">Projects</h2>

  <div className="space-y-8">
    <div className="border-b border-white/10 pb-6">
      <h3 className="text-2xl">NetflixGPT</h3>
      <p className="text-gray-400">
        AI powered movie recommendation app
      </p>
    </div>

    <div className="border-b border-white/10 pb-6">
      <h3 className="text-2xl">DevNet</h3>
      <p className="text-gray-400">
        Developer networking platform
      </p>
    </div>
  </div>
</section>

        </div>
    </section>
    
  );
}
