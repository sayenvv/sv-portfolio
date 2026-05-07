export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  details: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
  technologies: string[];
  architecture: string;
  challengeSolved: string;
  githubUrl: string;
  liveUrl: string;
};

export type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  createdAt: number;
};
