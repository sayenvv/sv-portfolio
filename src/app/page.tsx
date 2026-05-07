import dynamic from "next/dynamic";
import { Suspense } from "react";

import { SiteShell } from "@/components/shared/site-shell";

const HeroSection = dynamic(() =>
  import("@/components/sections/hero-section").then((module) => module.HeroSection),
);
const AboutSection = dynamic(() =>
  import("@/components/sections/about-section").then((module) => module.AboutSection),
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/skills-section").then((module) => module.SkillsSection),
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/experience-section").then((module) => module.ExperienceSection),
);
const EducationSection = dynamic(() =>
  import("@/components/sections/education-section").then((module) => module.EducationSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/projects-section").then((module) => module.ProjectsSection),
);
const SalarySection = dynamic(() =>
  import("@/components/sections/salary-section").then((module) => module.SalarySection),
);
const AvailabilitySection = dynamic(() =>
  import("@/components/sections/availability-section").then((module) => module.AvailabilitySection),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/contact-section").then((module) => module.ContactSection),
);
const FooterSection = dynamic(() =>
  import("@/components/sections/footer-section").then((module) => module.FooterSection),
);
const RecruiterAIAssistant = dynamic(() =>
  import("@/components/sections/recruiter-ai-assistant").then((module) => module.RecruiterAIAssistant),
);
const SectionSkeleton = dynamic(() =>
  import("@/components/sections/section-skeleton").then((module) => module.SectionSkeleton),
);

export default function Home() {
  return (
    <SiteShell>
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.22),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.14),transparent_42%),linear-gradient(180deg,#020617,#020617)]" />
        <Suspense fallback={<SectionSkeleton />}>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SalarySection />
          <AvailabilitySection />
          <ContactSection />
          <FooterSection />
          <RecruiterAIAssistant />
        </Suspense>
      </main>
    </SiteShell>
  );
}
