"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/portfolio-data";

const channels = [
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
  { icon: LinkedInIcon, label: "LinkedIn", value: "in/sayen-vv", href: profile.linkedin },
  { icon: GitHubIcon, label: "GitHub", value: "@sayenvv", href: profile.github },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-[-40%] left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-accent/60" />
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">07 — Contact</p>
            </div>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-6xl">
              Let&apos;s build something
              <span className="text-accent italic"> intelligent </span>
              together.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Whether it&apos;s a senior AI role, a platform build, or a conversation about LLM
              systems — my inbox is open.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-10 inline-flex items-center gap-3 border-b border-white/20 pb-2 text-xl text-foreground transition-colors hover:border-accent hover:text-accent md:text-2xl"
            >
              {profile.email}
              <ArrowUpRight
                size={22}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <div className="mt-12 flex flex-col gap-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 text-sm text-muted hover:text-foreground"
                >
                  <span className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-muted transition-colors group-hover:border-accent/30 group-hover:text-accent">
                    <channel.icon size={15} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted/60">
                    {channel.label}
                  </span>
                  {channel.value}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="h-fit rounded-3xl border border-white/[0.08] bg-[#0e0e11] p-8 md:p-10"
          >
            <h3 className="text-lg font-medium tracking-tight text-foreground">Send a message</h3>
            <p className="mt-1.5 text-sm text-muted">
              Share the role context and I&apos;ll respond quickly.
            </p>
            <form className="mt-7 space-y-4">
              <Input placeholder="Your name" aria-label="Your Name" />
              <Input type="email" placeholder="Work email" aria-label="Work Email" />
              <Input placeholder="Company" aria-label="Company" />
              <Textarea placeholder="Tell me about the role, team, and priorities" aria-label="Message" />
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
