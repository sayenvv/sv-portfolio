"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Database, Monitor, Server, Workflow, Wrench } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Modern stack across AI, backend engineering, and cloud delivery"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, idx) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <Card className="h-full transition hover:-translate-y-1 hover:border-cyan-300/45">
                <CardContent>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 p-2 text-cyan-200">
                      <Icon size={18} />
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
