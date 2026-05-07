"use client";

import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { salaryExpectations } from "@/data/portfolio-data";

export function SalarySection() {
  return (
    <section id="salary" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading eyebrow="Compensation" title="Professional salary expectations and engagement preferences" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card>
          <CardContent>
            <div className="mb-4 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-500/10 p-2 text-cyan-200">
              <CircleDollarSign size={18} />
            </div>
            <CardTitle>Salary Expectations</CardTitle>
            <CardDescription>Expected Salary: {salaryExpectations.expectedSalary}</CardDescription>
            <CardDescription>
              Preferred Employment Type: {salaryExpectations.preferredEmploymentType}
            </CardDescription>
            <CardDescription>Availability: {salaryExpectations.availability}</CardDescription>
            <CardDescription>Work Preference: {salaryExpectations.workPreference}</CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
