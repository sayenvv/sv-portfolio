"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Database, Monitor, Server, Workflow, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data/portfolio-data";

const iconMap = {
  BrainCircuit,
  Server,
  Monitor,
  Cloud,
  Database,
  Workflow,
  Wrench,
};

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="02 — Capabilities"
        title="A modern stack across AI, backend engineering, and cloud delivery"
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, idx) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group h-full bg-[#0e0e11] p-8 transition-colors duration-300 hover:bg-[#131316]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-accent transition-colors group-hover:border-accent/30">
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <span className="font-mono text-[11px] text-muted/50">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-medium tracking-tight text-foreground">{category.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
