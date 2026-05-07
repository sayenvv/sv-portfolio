import { ReactNode } from "react";

import { navLinks } from "@/data/portfolio-data";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            AKM.AI
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-200 transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </>
  );
}
