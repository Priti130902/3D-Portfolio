"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(sectionRef.current.children, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-20 py-32"
    >
      <h2 className="text-4xl font-bold mb-12">
        Selected Projects
      </h2>

      <div className="space-y-10">
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
  );
}
