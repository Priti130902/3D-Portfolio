"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageStack() {
  const containerRef = useRef(null);
  const pagesRef = useRef([]);

  useEffect(() => {
    const pages = pagesRef.current;

    gsap.set(pages, {
      opacity: 0,
      rotateX: 10,
      scale: 0.95,
    });

    gsap.set(pages[0], { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${pages.length * 100}%`,
        scrub: true,
        pin: true,
      },
    });

    pages.forEach((page, i) => {
      tl.to(page, {
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1,
      });

      if (i !== pages.length - 1) {
        tl.to(page, {
          opacity: 0,
          rotateX: -10,
          scale: 0.9,
          duration: 1,
        });
      }
    });
  }, []);

  return (
    <section ref={containerRef} className="h-screen bg-black">
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* PAGE 1 */}
        <div
          ref={(el) => (pagesRef.current[0] = el)}
          className="absolute w-[900px] h-[520px] bg-zinc-900 rounded-3xl
                     flex items-center justify-between px-20 text-white"
        >
          <div>
            <h1 className="text-6xl font-bold">
              Hi, I’m <span className="text-red-400">Priti</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              MERN Stack Developer
            </p>
          </div>

          <div className="w-[260px] h-[340px] rounded-2xl overflow-hidden">
            <Image
              src="/images/priti.jpg"
              alt="Priti"
              width={260}
              height={340}
              className="object-cover"
            />
          </div>
        </div>

        {/* PAGE 2 */}
        <div
          ref={(el) => (pagesRef.current[1] = el)}
          className="absolute w-[900px] h-[520px] bg-zinc-800 rounded-3xl
                     px-20 py-32 text-white"
        >
          <h2 className="text-5xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-xl text-lg">
            I am a MERN Stack Developer with internship experience,
            focused on building clean and scalable applications.
          </p>
        </div>

        {/* PAGE 3 */}
        <div
          ref={(el) => (pagesRef.current[2] = el)}
          className="absolute w-[900px] h-[520px] bg-zinc-900 rounded-3xl
                     px-20 py-32 text-white"
        >
          <h2 className="text-5xl font-bold mb-6">Projects</h2>
          <ul className="text-gray-400 space-y-4">
            <li>NetflixGPT – AI movie app</li>
            <li>DevNet – Developer network</li>
            <li>CodeInsight – AI code analysis</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
