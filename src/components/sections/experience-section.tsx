"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { experiences } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="03 — Experience"
        title="A professional timeline across AI, backend, and full-stack engineering"
      />
      <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
        {experiences.map((item, idx) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group grid gap-5 py-12 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-accent">{item.period}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.company}</p>
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-tight text-foreground transition-colors group-hover:text-accent md:text-[1.75rem]">
                {item.role}
              </h3>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{item.summary}</p>
              <ul className="mt-5 space-y-2.5">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
