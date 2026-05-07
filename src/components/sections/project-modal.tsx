"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitFork, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectItem } from "@/types";

export function ProjectModal({
  project,
  open,
  onClose,
}: {
  project: ProjectItem | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[88vh] w-full max-w-3xl overflow-auto rounded-2xl border border-white/15 bg-slate-900/95 p-6"
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Project Details</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-white/15 p-2 text-slate-200 hover:bg-white/10"
                aria-label="Close project modal"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-slate-200">{project.description}</p>

            <section className="mt-6">
              <h4 className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200">Features</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h4 className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-200">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </section>

            <section className="mt-6 space-y-4">
              <div>
                <h4 className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Architecture Overview</h4>
                <p className="text-sm text-slate-200">{project.architecture}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm uppercase tracking-[0.2em] text-cyan-200">Challenge Solved</h4>
                <p className="text-sm text-slate-200">{project.challengeSolved}</p>
              </div>
            </section>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary">
                  <GitFork size={16} /> GitHub
                </Button>
              </a>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button>
                  <ExternalLink size={16} /> Live Demo
                </Button>
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
