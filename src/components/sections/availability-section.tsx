"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin, PlaneTakeoff } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { availabilityInfo } from "@/data/portfolio-data";

export function AvailabilitySection() {
  return (
    <section id="availability" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading eyebrow="Location & Availability" title="Ready for remote, relocation, and high-impact collaboration" />
      <div className="grid gap-5 md:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card>
            <CardContent>
              <MapPin className="mb-3 text-cyan-200" size={20} />
              <CardDescription>Current Location: {availabilityInfo.currentLocation}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
        >
          <Card>
            <CardContent>
              <PlaneTakeoff className="mb-3 text-cyan-200" size={20} />
              <CardDescription>{availabilityInfo.relocation}</CardDescription>
              <CardDescription>{availabilityInfo.remoteOpportunities}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
        >
          <Card>
            <CardContent>
              <Globe2 className="mb-3 text-cyan-200" size={20} />
              <CardDescription>Timezone Availability: {availabilityInfo.timezone}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
