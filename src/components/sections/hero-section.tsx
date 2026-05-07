"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { ParticlesBg } from "@/components/effects/particles-bg";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio-data";
import { useTypewriter } from "@/hooks/use-typewriter";

export function HeroSection() {
  const typed = useTypewriter(["AI Engineer", "Full Stack Engineer", "Python Developer"]);

  return (
    <section id="home" className="relative overflow-hidden pt-16 md:pt-28">
      <ParticlesBg />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-20 md:grid-cols-[1.15fr_0.85fr] md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-300">Futuristic Portfolio</p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            {profile.name}
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-slate-300 md:text-lg">
            Building production-grade AI products, LLM systems, and scalable cloud-native architectures for modern businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.cvUrl} download>
              <Button size="lg">
                <Download size={16} /> Download CV
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="lg">
                <Mail size={16} /> Contact Me
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" size="lg">
                <ArrowRight size={16} /> View Projects
              </Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative mx-auto h-[320px] w-[320px] rounded-[2.5rem] border border-cyan-300/25 bg-gradient-to-br from-cyan-500/25 via-sky-500/10 to-emerald-500/25 p-3 shadow-[0_0_90px_-35px_rgba(56,189,248,0.9)] backdrop-blur-xl">
            <div className="flex h-full w-full items-center justify-center rounded-[2rem] border border-white/10 bg-slate-950/80">
              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Profile</p>
                <p className="mt-2 text-6xl font-semibold text-cyan-300">AK</p>
                <p className="mt-2 text-sm text-slate-300">Professional image placeholder</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
