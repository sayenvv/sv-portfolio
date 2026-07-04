import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] tracking-wide text-muted transition-colors hover:border-accent/30 hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
