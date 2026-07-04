"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";

import { GitHubIcon } from "@/components/shared/brand-icons";
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
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && project ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0a0c]/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[88vh] w-full max-w-2xl overflow-auto rounded-3xl border border-white/10 bg-[#111114] p-8 md:p-10"
            initial={{ y: 32, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-accent/60" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">Case Study</p>
                </div>
                <h3 className="mt-3 font-serif text-3xl tracking-tight text-foreground">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2.5 text-muted hover:border-white/25 hover:text-foreground"
                aria-label="Close project modal"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-[15px] leading-relaxed text-foreground/85">{project.description}</p>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <section>
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Features</h4>
                <ul className="space-y-2.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-8 space-y-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6">
              <div>
                <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Architecture</h4>
                <p className="text-sm leading-relaxed text-foreground/75">{project.architecture}</p>
              </div>
              <div>
                <h4 className="mb-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">Challenge Solved</h4>
                <p className="text-sm leading-relaxed text-foreground/75">{project.challengeSolved}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    <GitHubIcon size={16} /> View source
                  </Button>
                </a>
              ) : null}
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <Button>
                    Live demo <ArrowUpRight size={16} />
                  </Button>
                </a>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
