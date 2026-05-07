import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from "@/types";

export const profile = {
  name: "Sayen VV",
  headline: "AI Engineer | Full Stack Engineer | Python Developer",
  location: "Kochi, India",
  timezone: "IST (UTC+5:30)",
  email: "sayen.bit01@gmail.com",
  phone: "+91 95392 88508",
  linkedin: "https://www.linkedin.com/in/sayen-vv/",
  github: "https://github.com/sayenvv",
  cvUrl: "/sayen-vv.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutBio =
  "I build production-grade AI systems and full-stack applications that solve real business problems. With experience spanning Python development, backend engineering, and AI product delivery, I have worked on Generative AI chat applications, MCP server platforms, intelligent flowchart generators, and e-commerce systems like Zainbay. I specialize in Python, FastAPI, Django, React, and LLM integrations, delivering scalable microservices and cloud-native solutions across AWS and Azure. From building internal tools like outsourcing workflow platforms to crafting customer-facing products, I bring clean architecture, reliable APIs, and a strong product-delivery mindset to every project.";

export const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM",
    icon: "BrainCircuit",
    skills: ["OpenAI", "LLMs", "MCP Servers", "Generative AI", "Prompt Engineering"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Python", "FastAPI", "Django", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["Docker", "AWS", "Azure", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Automation",
    icon: "Workflow",
    skills: ["Excel Automation", "Visio Automation", "Workflow Engines"],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "Postman", "Linux", "Architecture Design"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Orion innovations pvt ltd",
    period: "2025 - Present",
    summary:
      "Leading AI-driven product engineering initiatives with focus on Generative AI systems, platform APIs, and cloud-native deployment workflows.",
    highlights: [
      "Built production AI applications with LLM integrations and structured agent workflows.",
      "Designed FastAPI microservices for high-throughput backend API delivery.",
      "Delivered enterprise automation systems for flowchart and process intelligence.",
      "Implemented scalable deployment pipelines across AWS and Azure environments.",
    ],
  },
  {
    role: "Associate Consultant",
    company: "Cloudium Software Pvt Ltd",
    period: "2023 - Present",
    summary:
      "Leading AI-driven product engineering initiatives with focus on Generative AI systems, platform APIs, and cloud-native deployment workflows.",
    highlights: [
      "Built production AI applications with LLM integrations and structured agent workflows.",
      "Designed FastAPI microservices for high-throughput backend API delivery.",
      "Delivered enterprise automation systems for flowchart and process intelligence.",
      "Implemented scalable deployment pipelines across AWS and Azure environments.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Cloudium Software Pvt Ltd",
    period: "2022 - 2023",
    summary:
      "Developed full-stack platforms that connected intelligent backend services with modern, performant frontend interfaces.",
    highlights: [
      "Architected Python modules for data-heavy internal tools.",
      "Built secure REST APIs and reusable component libraries for rapid delivery.",
      "Created monitoring-friendly services aligned to microservices best practices.",
    ],
  },
  {
    role: "Python Developer",
    company: "Primalcodes Technologies Pvt Ltd",
    period: "2021 - 2022",
    summary:
      "Delivered backend products and automation pipelines focused on business productivity and process digitization.",
    highlights: [
      "Engineered Excel and Visio automation systems for enterprise users.",
      "Built flowchart generation engines and process visualization tooling.",
      "Maintained and optimized Django/FastAPI APIs with production reliability focus.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    title: "Master of Computer Applications (MCA)",
    institution: "IGNOU",
    period: "Completed",
    details:
      "Advanced computing curriculum with strong foundations in software engineering, distributed systems, and data-centric application design.",
  },
  {
    title: "Bachelor of Computer Science (BCS)",
    institution: "University of Calicut",
    period: "Completed",
    details:
      "Core computer science fundamentals including programming, algorithms, databases, and operating systems.",
  },
  {
    title: "Technical Certifications",
    institution: "Professional Training Tracks",
    period: "Ongoing",
    details:
      "Cloud deployment, API architecture, and AI engineering certifications aligned to real-world product delivery.",
  },
  {
    title: "Professional Learning",
    institution: "Self-Directed Continuous Learning",
    period: "Active",
    details:
      "Focused study in system architecture, production LLM implementation, and workflow automation at scale.",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "ai-flowchart-generator",
    title: "AI Flowchart Generator",
    image: "/projects/ai-flowchart.jpg",
    description: "Generates intelligent process maps from plain-language descriptions.",
    features: ["NLP input parser", "Auto node linking", "Diagram export", "Template library"],
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    architecture:
      "Service-oriented backend with prompt orchestration, flow graph builder, and stateless UI rendering layer.",
    challengeSolved:
      "Reduced manual process diagramming time by translating unstructured requirements into structured workflow maps.",
    githubUrl: "https://github.com/sayen-v-v/ai-flowchart-generator",
    liveUrl: "",
  },
  {
    id: "mcp-server-platform",
    title: "MCP Server Platform",
    image: "/projects/mcp-platform.jpg",
    description: "Extensible platform for MCP server lifecycle, tools, and integrations.",
    features: ["Plugin architecture", "Auth layer", "Tool routing", "Observability dashboards"],
    technologies: ["Python", "FastAPI", "Docker", "Redis"],
    architecture: "Modular microservices with event-driven communication and centralized gateway.",
    challengeSolved:
      "Unified fragmented tool execution paths into a maintainable, scalable MCP service layer.",
    githubUrl: "https://github.com/sayen-v-v/mcp-server-platform",
    liveUrl: "",
  },
  {
    id: "genai-chat-app",
    title: "Generative AI Chat Application",
    image: "/projects/genai-chat.jpg",
    description: "Domain-tuned conversational application for enterprise support workflows.",
    features: ["Context memory", "Prompt guardrails", "Knowledge grounding", "Analytics"],
    technologies: ["OpenAI", "Python", "Next.js", "Redis"],
    architecture: "Hybrid chat orchestrator with retrieval-ready context and audit logging.",
    challengeSolved:
      "Delivered safer, more accurate assistant behavior through controllable context and response policies.",
    githubUrl: "https://github.com/sayen-v-v/genai-chat-app",
    liveUrl: "",
  },
  {
    id: "outsourcing-application",
    title: "Outsourcing Application",
    image: "/projects/outsourcing-app.jpg",
    description: "Internal self-service application for outsourcing operations and delivery governance.",
    features: ["Task pipeline", "SLA dashboard", "Role-based access", "Automated notifications"],
    technologies: ["Django", "React", "PostgreSQL"],
    architecture: "Monolith-to-modular architecture with asynchronous worker services for heavy jobs.",
    challengeSolved:
      "Improved visibility and execution quality across distributed outsourcing teams.",
    githubUrl: "https://github.com/sayen-v-v/outsourcing-application",
    liveUrl: "",
  },
  {
    id: "liyak",
    title: "Liyak",
    image: "/projects/liyak.jpg",
    description: "Full-stack web application built for streamlined business operations.",
    features: ["User management", "Dashboard analytics", "Responsive UI", "API integrations"],
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    architecture: "Django backend with React frontend, REST API layer, and role-based access control.",
    challengeSolved:
      "Consolidated multiple manual workflows into a single unified digital platform.",
    githubUrl: "https://github.com/sayen-v-v/liyak",
    liveUrl: "",
  },
  {
    id: "zainbay-ecommerce",
    title: "Zainbay E-Commerce",
    image: "/projects/zainbay.jpg",
    description: "Full-featured e-commerce platform with product catalog, cart, and payment integration.",
    features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management"],
    technologies: ["Python", "Django", "React", "PostgreSQL"],
    architecture: "Modular e-commerce backend with secure payment processing and responsive storefront.",
    challengeSolved:
      "Delivered a scalable online shopping experience with reliable order and inventory management.",
    githubUrl: "https://github.com/sayen-v-v/zainbay-ecommerce",
    liveUrl: "",
  },
];

export const salaryExpectations = {
  expectedSalary: "Competitive, aligned with role scope and impact",
  preferredEmploymentType: "Full-time (Senior/Lead AI Engineering roles)",
  availability: "Immediate to 30 days notice",
  workPreference: "Remote / Hybrid / Onsite",
};

export const availabilityInfo = {
  currentLocation: "Kochi, Kerala, India",
  relocation: "Open to relocation for strategic roles",
  remoteOpportunities: "Open globally",
  timezone: "IST with overlap for EU/US collaboration windows",
};

export const recruiterPrompts = [
  "Summarize your AI engineering strengths",
  "What are your most impactful projects?",
  "Share salary expectations and availability",
  "What cloud and backend experience do you have?",
  "How can I contact you quickly?",
];

export const recruiterFaq: Record<string, string> = {
  skills:
    "I specialize in Python, FastAPI, Django, React, Next.js, LLM integrations, MCP server development, and cloud-native engineering across AWS and Azure.",
  projects:
    "My key projects include AI Flowchart Generator, MCP Server Platform, FastAPI Microservices Platform, and enterprise automation systems for Excel and Visio workflows.",
  experience:
    "I have worked as Python Developer, Full Stack Engineer, and AI Engineer across Primalcodes Technologies and Cloudium Software, with strong focus on backend APIs, GenAI apps, and scalable microservices.",
  education:
    "I completed MCA from IGNOU and continue professional upskilling through technical certifications in AI engineering, cloud deployment, and architecture.",
  salary:
    "My compensation expectation is competitive and aligned with role impact; I am open to discussing based on responsibilities and location.",
  availability:
    "I am available for remote, hybrid, or onsite roles and can align start date from immediate to a short transition period.",
  contact:
    "You can reach me via email at alex.ai.engineer@example.com, phone +91 98765 43210, or LinkedIn for a faster conversation.",
};
