"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroStats, profile, techMarquee } from "@/data/portfolio-data";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Backdrop */}
      <div className="noise pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-20%] h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pt-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for senior AI roles
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-4xl font-serif text-[2.75rem] leading-[1.06] tracking-tight text-foreground md:text-7xl"
        >
          AI engineer building
          <span className="text-accent italic"> intelligent systems </span>
          that make it to production.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          I&apos;m {profile.name} — I design and ship LLM applications, platform APIs, and
          cloud-native architecture from {profile.location}, collaborating with teams worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.34, ease }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href={profile.cvUrl} download>
            <Button size="lg">
              <Download size={16} /> Download CV
            </Button>
          </a>
          <a href="#projects">
            <Button variant="secondary" size="lg">
              View projects <ArrowUpRight size={16} />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-y-8 border-t border-white/[0.08] pt-8 pb-16 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl text-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-1.5 text-[13px] text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.015] py-5">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex shrink-0 items-center">
            {[...techMarquee, ...techMarquee].map((tech, idx) => (
              <span key={`${tech}-${idx}`} className="flex items-center">
                <span className="px-6 font-mono text-[12px] uppercase tracking-[0.22em] text-muted/80">
                  {tech}
                </span>
                <span className="h-1 w-1 rounded-full bg-accent/50" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-28 right-8 hidden text-muted/60 hover:text-accent lg:block"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
