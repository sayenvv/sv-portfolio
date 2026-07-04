"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { education } from "@/data/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading eyebrow="04 — Qualifications" title="Education and continuous professional growth" />
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group h-full rounded-2xl border border-white/[0.08] bg-[#0e0e11] p-8 transition-colors duration-300 hover:border-accent/25"
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-accent">
                <GraduationCap size={18} strokeWidth={1.75} />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/60">
                {item.period}
              </span>
            </div>
            <h3 className="text-base font-medium tracking-tight text-foreground">{item.title}</h3>
            <p className="mt-1 text-sm text-accent/90">{item.institution}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
