"use client";

import { motion } from "framer-motion";
import { Banknote, BriefcaseBusiness, CalendarClock, Globe2, MapPin, PlaneTakeoff } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { availabilityInfo, salaryExpectations } from "@/data/portfolio-data";

const details = [
  {
    icon: Banknote,
    label: "Compensation",
    value: salaryExpectations.expectedSalary,
  },
  {
    icon: BriefcaseBusiness,
    label: "Engagement",
    value: salaryExpectations.preferredEmploymentType,
  },
  {
    icon: CalendarClock,
    label: "Availability",
    value: salaryExpectations.availability,
  },
  {
    icon: MapPin,
    label: "Based in",
    value: availabilityInfo.currentLocation,
  },
  {
    icon: Globe2,
    label: "Remote",
    value: `${availabilityInfo.remoteOpportunities} — ${availabilityInfo.timezone}`,
  },
  {
    icon: PlaneTakeoff,
    label: "Relocation",
    value: availabilityInfo.relocation,
  },
];

export function EngagementSection() {
  return (
    <section id="availability" className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <span id="salary" className="sr-only" aria-hidden="true" />
      <SectionHeading
        eyebrow="06 — Working Together"
        title="Engagement preferences, availability, and logistics"
      />
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
        {details.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col gap-4 bg-[#0e0e11] p-8 transition-colors duration-300 hover:bg-[#131316]"
          >
            <item.icon size={18} strokeWidth={1.75} className="text-accent" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">{item.value}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
