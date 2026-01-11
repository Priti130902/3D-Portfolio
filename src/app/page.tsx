"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  Download,
  Github,
  Linkedin,
  Zap,
  Database,
  Code,
  Send,
  Cpu,
  Layout,
  Server,
  Layers,
  Globe,
  Camera,
  Briefcase,
  Mail,
} from "lucide-react";
import Image from "next/image";
interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}


/* ---------- TOOL CARD ---------- */
const ToolCard: React.FC<ToolCardProps> = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-8 bg-white rounded-[40px] shadow-[15px_15px_30px_#d1d9e6] border border-white"
  >
    <div className="text-[#E8A838] mb-4 scale-125">{icon}</div>
    <h3 className="text-xl font-black italic text-[#2D4739]">{title}</h3>
    <p className="text-[10px] font-bold text-zinc-400 mt-1 uppercase tracking-widest">
      {desc}
    </p>
  </motion.div>
);



export default function PritiUltimatePortfolio() {
  return (
    <main className="bg-[#1a1a1a] selection:bg-[#E8A838]">
      {/* ================= HERO ================= */}
      <section className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#F3F2EC] z-10 overflow-hidden">
        <div className="absolute inset-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Environment preset="sunset" />
            <Float speed={4} rotationIntensity={2}>
              <mesh>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshDistortMaterial color="#E8A838" speed={5} distort={0.45} />
              </mesh>
            </Float>
            <ContactShadows
              opacity={0.25}
              scale={10}
              blur={3}
              far={10}
              color="#2D4739"
            />
          </Canvas>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-[14vw] font-black leading-none text-[#2D4739] uppercase">
            PRITI <br />
            <span className="text-white drop-shadow-2xl">KUMARI</span>
          </h1>
          <p className="mt-4 text-xl font-bold italic text-zinc-600 bg-white/60 px-8 py-2 rounded-full inline-block backdrop-blur-md">
            MERN Stack Developer
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="sticky top-0 h-screen bg-white flex items-center px-6 z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-[#E8A838] rounded-[60px] rotate-3 -z-10" />
            <Image
              src="/images/priti.jpg"
              alt="Priti"
              width={500}
              height={500}
              className="rounded-[60px] border-8 border-white shadow-2xl object-cover h-[500px]"
            />
          </div>

          <div>
            <span className="bg-[#E8A838]/10 text-[#E8A838] px-4 py-1 rounded-full font-bold uppercase tracking-widest text-xs">
              About Me
            </span>

            <h2 className="text-7xl font-black italic text-[#2D4739] mt-6 leading-tight">
              I build real <br /> products with code.
            </h2>

            <p className="text-xl text-zinc-600 mt-6 leading-relaxed italic">
              I am a MERN Stack Developer with real internship experience,
              focused on building modern, scalable, and user-centric web
              applications. I work with React, Next.js, Node.js, and MongoDB to
              create responsive interfaces, smooth interactions, and reliable
              full-stack solutions.
            </p>

            <a
              href="/resume/Full Stack Resume_Priti.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-8 bg-[#2D4739] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#E8A838] transition flex items-center gap-4">
                Download Resume <Download size={20} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="sticky top-0 h-screen bg-[#f8f9fa] flex items-center px-6 z-30 ">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-7xl font-black italic text-[#2D4739] mb-14">
            Tech Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ToolCard icon={<Database />} title="MongoDB" desc="Database" />
            <ToolCard icon={<Server />} title="Express" desc="Backend" />
            <ToolCard icon={<Code />} title="React" desc="Frontend" />
            <ToolCard icon={<Cpu />} title="Node.js" desc="Runtime" />
            <ToolCard icon={<Layers />} title="Next.js" desc="Framework" />
            <ToolCard icon={<Layout />} title="Tailwind" desc="Styling" />
            <ToolCard icon={<Zap />} title="TypeScript" desc="Typed JS" />
            <ToolCard icon={<Globe />} title="Deployment" desc="Vercel" />
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="sticky top-0 h-screen bg-[#2D4739] text-white flex items-center px-6 z-40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-8xl font-black italic uppercase mb-16 flex items-center gap-6">
            <Briefcase size={50} className="text-[#E8A838]" />
            Journey
          </h2>

          <div className="border-l-4 border-[#E8A838] pl-10">
            <h3 className="text-5xl font-black italic uppercase">
              Frontend Intern
            </h3>
            <p className="text-[#E8A838] uppercase text-sm mt-2">
              Asha Learnology
            </p>
            <p className="mt-6 text-white/70 italic leading-relaxed text-lg">
              Built responsive dashboards and reusable components using React
              and Tailwind CSS. Collaborated with designers and backend
              developers to deliver production-ready features.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS (Z-45) ================= */}
      <section
        id="projects"
        className="sticky top-0 min-h-screen w-full bg-[#E8A838]
             text-white flex items-center py-16 px-4 sm:px-10
             shadow-[0_-50px_100px_rgba(0,0,0,0.4)]
             rounded-t-[60px] z-50"
        style={{ perspective: "1600px" }}
      >
        <div className="max-w-6xl mx-auto w-full">
          {/* TITLE */}
          <div className="mb-14 flex items-center gap-4 sm:gap-6">
            <Camera size={42} className="text-[#2D4739]" />
            <h2 className="text-5xl sm:text-7xl font-black italic tracking-tighter uppercase">
              Projects
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* PROJECT CARD */}
            <div
              className="group bg-[#2D4739] p-8 sm:p-10 rounded-[36px]
                   border border-white/10
                   transition-transform duration-500
                   hover:-translate-y-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase">
                NetflixGPT
              </h3>

              <p className="text-white/70 mt-4 leading-relaxed text-sm sm:text-base">
                AI-powered movie recommendation platform using OpenAI API.
                Features authentication, search-based suggestions, and modern
                responsive UI built with React and Tailwind CSS.
              </p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-3 mt-5 text-xs font-bold uppercase">
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Tailwind
                </span>
              </div>

              {/* LINKS */}
              <div className="flex gap-6 mt-6">
                <a
                  href="https://github.com/yourusername/netflixgpt"
                  target="_blank"
                  className="text-[#E8A838] font-bold uppercase text-sm"
                >
                  GitHub →
                </a>
                <a
                  href="https://netflixgpt.vercel.app"
                  target="_blank"
                  className="text-[#E8A838] font-bold uppercase text-sm"
                >
                  Live →
                </a>
              </div>
            </div>

            {/* PROJECT CARD 2 */}
            <div
              className="group bg-[#2D4739] p-8 sm:p-10 rounded-[36px]
                   border border-white/10
                   transition-transform duration-500
                   hover:-translate-y-4"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase">
                DevNet
              </h3>

              <p className="text-white/70 mt-4 leading-relaxed text-sm sm:text-base">
                A full-stack developer networking platform with authentication,
                profile creation, and real-time chat using MERN stack and
                Socket.IO.
              </p>

              <div className="flex flex-wrap gap-3 mt-5 text-xs font-bold uppercase">
                <span className="px-3 py-1 bg-white/10 rounded-full">MERN</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Socket.IO
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full">JWT</span>
              </div>

              <div className="flex gap-6 mt-6">
                <a
                  href="https://github.com/yourusername/devnet"
                  target="_blank"
                  className="text-[#E8A838] font-bold uppercase text-sm"
                >
                  GitHub →
                </a>
                <a
                  href="https://devnet.vercel.app"
                  target="_blank"
                  className="text-[#E8A838] font-bold uppercase text-sm"
                >
                  Live →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="sticky top-0 h-screen bg-white flex items-center px-6 z-60 rounded-t-[60px]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-[9vw] font-black italic text-[#2D4739] uppercase leading-none">
              Let’s <span className="text-[#E8A838]">Talk</span>
            </h2>
            <div className="flex gap-6 mt-10">
              <a className="p-6 bg-[#2D4739] text-white rounded-[30px]">
                <Linkedin />
              </a>
              <a className="p-6 bg-[#2D4739] text-white rounded-[30px]">
                <Github />
              </a>
              <a className="p-6 bg-[#2D4739] text-white rounded-[30px]">
                <Mail />
              </a>
            </div>
          </div>

          <form className="bg-[#F3F2EC] p-10 rounded-[60px] shadow-2xl space-y-6">
            <input
              placeholder="Your Name"
              className="w-full bg-transparent border-b-2 p-4 font-black italic"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-b-2 p-4 h-24 font-black italic"
            />
            <button className="w-full py-6 bg-[#2D4739] text-white rounded-full font-black italic uppercase flex items-center justify-center gap-4">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
