"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitFork, Sparkles } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/portfolio-data";
import { ProjectItem } from "@/types";

import { ProjectModal } from "./project-modal";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Product-grade portfolio across AI systems, automation, and platform engineering"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <Card className="group h-full overflow-hidden p-0 transition hover:-translate-y-1 hover:border-cyan-300/40">
              <div className="relative h-40 w-full bg-gradient-to-br from-cyan-500/35 via-blue-500/20 to-emerald-500/30">
                <div className="absolute inset-0 flex items-center justify-center text-slate-100">
                  <Sparkles className="mr-2" size={17} />
                  <span className="text-sm">Project image placeholder</span>
                </div>
              </div>
              <CardContent className="p-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <Badge key={`${project.id}-${technology}`}>{technology}</Badge>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Button variant="secondary" size="sm">
                      <GitFork size={14} /> GitHub
                    </Button>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Button size="sm">
                      <ExternalLink size={14} /> Live Demo
                    </Button>
                  </a>
                  <Button variant="outline" size="sm" onClick={() => setActiveProject(project)}>
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectModal project={activeProject} open={Boolean(activeProject)} onClose={() => setActiveProject(null)} />
    </section>
  );
}
