"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { experiences } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline across AI, backend, and full-stack engineering"
      />
      <div className="relative space-y-6 border-l border-cyan-300/25 pl-6 md:pl-8">
        {experiences.map((item, idx) => (
          <motion.div
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="relative"
          >
            <span className="absolute -left-[33px] top-8 h-3 w-3 rounded-full border border-cyan-200 bg-cyan-300 shadow-[0_0_18px_2px_rgba(103,232,249,0.8)] md:-left-[41px]" />
            <Card>
              <CardContent>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{item.period}</p>
                <CardTitle className="mt-2">{item.role}</CardTitle>
                <CardDescription className="text-cyan-100">{item.company}</CardDescription>
                <CardDescription>{item.summary}</CardDescription>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
