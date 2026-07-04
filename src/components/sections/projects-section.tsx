"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import { GitHubIcon } from "@/components/shared/brand-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio-data";
import { ProjectItem } from "@/types";

import { ProjectModal } from "./project-modal";

const coverGradients = [
  "from-[#2a2116] via-[#141210] to-[#0e0e11]",
  "from-[#16202a] via-[#101314] to-[#0e0e11]",
  "from-[#241627] via-[#131013] to-[#0e0e11]",
  "from-[#16261d] via-[#101312] to-[#0e0e11]",
  "from-[#26161a] via-[#131011] to-[#0e0e11]",
  "from-[#1a1a2c] via-[#111114] to-[#0e0e11]",
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeading
        eyebrow="05 — Selected Work"
        title="Product-grade projects across AI systems, automation, and platforms"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (idx % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e11] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25"
            onClick={() => setActiveProject(project)}
          >
            <div className={`relative h-52 w-full bg-gradient-to-br ${coverGradients[idx % coverGradients.length]}`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <span className="absolute left-6 top-6 font-mono text-[12px] text-muted/60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-6 left-6 right-6 font-serif text-3xl tracking-tight text-foreground/25 transition-colors duration-300 group-hover:text-accent/45">
                {project.title}
              </span>
              <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] p-2 text-muted opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-accent">
                <ArrowUpRight size={15} />
              </span>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-lg font-medium tracking-tight text-foreground">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((technology) => (
                  <Badge key={`${project.id}-${technology}`}>{technology}</Badge>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                <span className="text-[13px] font-medium text-accent">
                  Case study
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground"
                >
                  <GitHubIcon size={14} /> Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={activeProject} open={Boolean(activeProject)} onClose={() => setActiveProject(null)} />
    </section>
  );
}
