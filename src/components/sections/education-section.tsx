"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { education } from "@/data/portfolio-data";

export function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading eyebrow="Qualifications" title="Education and continuous professional growth" />
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
          >
            <Card className="h-full">
              <CardContent>
                <div className="mb-3 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-500/10 p-2 text-cyan-200">
                  <GraduationCap size={18} />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-cyan-100">{item.institution}</CardDescription>
                <CardDescription>{item.period}</CardDescription>
                <CardDescription>{item.details}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
