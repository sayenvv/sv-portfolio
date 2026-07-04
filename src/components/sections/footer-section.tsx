"use client";

import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { navLinks, profile } from "@/data/portfolio-data";

export function FooterSection() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="font-serif text-2xl tracking-tight text-foreground">
            Sayen<span className="text-accent">.</span>
          </a>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="rounded-full border border-white/10 p-2.5 text-muted hover:border-accent/40 hover:text-accent"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon size={15} />
            </a>
            <a
              className="rounded-full border border-white/10 p-2.5 text-muted hover:border-accent/40 hover:text-accent"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              className="rounded-full border border-white/10 p-2.5 text-muted hover:border-accent/40 hover:text-accent"
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.06] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted/70">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted/50">
            Kochi, India — {profile.timezone}
          </p>
        </div>
      </div>
    </footer>
  );
}
