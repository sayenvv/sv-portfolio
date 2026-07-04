"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { aboutBio, aboutFacts } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="01 — About" title="Engineering AI systems that deliver measurable business impact" />
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg leading-[1.9] text-foreground/85"
        >
          {aboutBio}
        </motion.p>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="h-fit divide-y divide-white/[0.08] border-y border-white/[0.08]"
        >
          {aboutFacts.map((fact) => (
            <div key={fact.label} className="flex items-baseline justify-between gap-6 py-5">
              <dt className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {fact.label}
              </dt>
              <dd className="text-right text-sm text-foreground">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
