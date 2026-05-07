"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardDescription } from "@/components/ui/card";
import { aboutBio } from "@/data/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering AI systems that deliver measurable business impact"
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <Card>
          <CardDescription className="text-base leading-8 text-slate-200">{aboutBio}</CardDescription>
        </Card>
      </motion.div>
    </section>
  );
}
