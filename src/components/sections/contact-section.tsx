"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, GitFork, Mail, PhoneCall } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
      <SectionHeading eyebrow="Contact" title="Let us build intelligent systems together" />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="h-full">
            <CardContent>
              <CardTitle>Direct Contact</CardTitle>
              <div className="space-y-4 text-sm text-slate-200">
                <p className="flex items-center gap-3">
                  <Mail size={16} className="text-cyan-200" />
                  <a className="hover:text-cyan-200" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <PhoneCall size={16} className="text-cyan-200" />
                  <a className="hover:text-cyan-200" href={`tel:${profile.phone}`}>
                    {profile.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <BriefcaseBusiness size={16} className="text-cyan-200" />
                  <a className="hover:text-cyan-200" href={profile.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn Profile
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <GitFork size={16} className="text-cyan-200" />
                  <a className="hover:text-cyan-200" href={profile.github} target="_blank" rel="noreferrer">
                    GitHub Profile
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
        >
          <Card>
            <CardContent>
              <CardTitle>Contact Form</CardTitle>
              <CardDescription>Share your role context and I will respond quickly.</CardDescription>
              <form className="space-y-3">
                <Input placeholder="Your Name" aria-label="Your Name" />
                <Input type="email" placeholder="Work Email" aria-label="Work Email" />
                <Input placeholder="Company" aria-label="Company" />
                <Textarea placeholder="Tell me about the role, team, and priorities" aria-label="Message" />
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
