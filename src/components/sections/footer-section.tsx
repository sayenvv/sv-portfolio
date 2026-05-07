"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GitFork, Mail } from "lucide-react";

import { navLinks, profile } from "@/data/portfolio-data";

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 border-t border-white/10 bg-slate-950/60"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-8 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-300">Built with Next.js, React, Tailwind CSS, Framer Motion, and shadcn-style UI.</p>
          <div className="flex items-center gap-3 text-slate-300">
            <a className="hover:text-cyan-200" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitFork size={16} />
            </a>
            <a
              className="hover:text-cyan-200"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={16} />
            </a>
            <a className="hover:text-cyan-200" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-cyan-200">
              {item.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </motion.footer>
  );
}
