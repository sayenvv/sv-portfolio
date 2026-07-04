"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 max-w-3xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-accent/60" />
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      </div>
      <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-[2.75rem]">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-relaxed text-muted">{description}</p> : null}
    </motion.div>
  );
}
