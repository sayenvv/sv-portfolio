"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

import { navLinks, profile } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

export function SiteShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled ? "border-b border-white/[0.06] bg-[#0a0a0c]/80 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="font-serif text-lg tracking-tight text-foreground">
            Sayen<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 px-4 py-2 text-[13px] font-medium text-foreground hover:border-accent/50 hover:text-accent"
          >
            Get in touch
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>
      {children}
    </>
  );
}
