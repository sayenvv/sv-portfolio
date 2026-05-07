import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from "@/types";

export const profile = {
  name: "Sayen VV",
  headline: "AI Engineer | Full Stack Engineer | Python Developer",
  location: "Kochi, India",
  timezone: "IST (UTC+5:30)",
  email: "sayen.bit01@gmail.com",
  phone: "+91 95392 88508",
  linkedin: "https://www.linkedin.com/in/sayen-vv/",
  github: "https://github.com/sayen-v-v",
  cvUrl: "/cv-placeholder.txt",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutBio =
  "I design and ship production-grade AI systems that turn complex business problems into scalable digital products. As an AI Engineer and Python specialist, I build Generative AI applications, LLM-integrated platforms, and robust FastAPI/Django backends using clean architecture and high engineering standards. I have led microservice-based builds, cloud deployments, and enterprise automation products including Excel and Visio workflow engines, AI-powered flowchart systems, and MCP server ecosystems. I combine product thinking, API craftsmanship, and system architecture depth to deliver reliable, maintainable solutions that hiring teams can trust in mission-critical environments.";

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
    role: "Full Stack Engineer",
    company: "Cloudium Software Pvt Ltd",
    period: "2022 - 2023",
    summary:
      "Developed full-stack platforms that connected intelligent backend services with modern, performant frontend interfaces.",
    highlights: [
      "Architected React + Python modules for data-heavy internal tools.",
      "Built secure REST APIs and reusable component libraries for rapid delivery.",
      "Created monitoring-friendly services aligned to microservices best practices.",
    ],
  },
  {
    role: "Python Developer",
    company: "Primalcodes Technologies Pvt Ltd",
    period: "2020 - 2022",
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
    githubUrl: "https://github.com/alex-ai-engineer/ai-flowchart-generator",
    liveUrl: "https://demo.ai-flowchart-generator.dev",
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
    githubUrl: "https://github.com/alex-ai-engineer/mcp-server-platform",
    liveUrl: "https://demo.mcp-platform.dev",
  },
  {
    id: "snipbox",
    title: "SnipBox",
    image: "/projects/snipbox.jpg",
    description: "Developer snippet manager with AI-assisted retrieval and categorization.",
    features: ["Semantic search", "Tag automation", "Workspace sync", "Role access"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    architecture: "App router frontend + API layer + vector-friendly metadata indexing.",
    challengeSolved:
      "Improved code reuse velocity by making team knowledge discoverable through natural language search.",
    githubUrl: "https://github.com/alex-ai-engineer/snipbox",
    liveUrl: "https://demo.snipbox.dev",
  },
  {
    id: "fastapi-microservices-platform",
    title: "FastAPI Microservices Platform",
    image: "/projects/fastapi-microservices.jpg",
    description: "Production-ready microservices backbone for enterprise applications.",
    features: ["Service registry", "Rate limiting", "JWT auth", "Tracing hooks"],
    technologies: ["FastAPI", "Docker", "PostgreSQL", "Redis"],
    architecture: "Containerized services behind API gateway with shared observability and CI/CD.",
    challengeSolved:
      "Enabled independent team scaling and faster releases via service isolation and standardized patterns.",
    githubUrl: "https://github.com/alex-ai-engineer/fastapi-microservices",
    liveUrl: "https://demo.fastapi-microservices.dev",
  },
  {
    id: "excel-flowchart-ai",
    title: "Excel to Flowchart AI System",
    image: "/projects/excel-flowchart.jpg",
    description: "Converts structured spreadsheet logic into intelligent flow diagrams.",
    features: ["Sheet parser", "Rule detection", "Flow engine", "Bulk processing"],
    technologies: ["Python", "Pandas", "FastAPI", "React"],
    architecture: "Batch ingestion pipeline with mapping engine and async diagram renderer.",
    challengeSolved:
      "Transformed legacy spreadsheet operations into visual, auditable process assets.",
    githubUrl: "https://github.com/alex-ai-engineer/excel-flowchart-ai",
    liveUrl: "https://demo.excel-flowchart-ai.dev",
  },
  {
    id: "visio-automation",
    title: "Visio Diagram Automation",
    image: "/projects/visio-automation.jpg",
    description: "Automates Visio diagram generation from business and technical rules.",
    features: ["Template automation", "Dynamic connector logic", "Versioning", "Export suite"],
    technologies: ["Python", "COM Automation", "FastAPI"],
    architecture: "Automation worker pool connected to API layer and versioned artifact storage.",
    challengeSolved:
      "Eliminated repetitive manual Visio operations while improving consistency and delivery speed.",
    githubUrl: "https://github.com/alex-ai-engineer/visio-automation",
    liveUrl: "https://demo.visio-automation.dev",
  },
  {
    id: "genai-chat-apps",
    title: "Generative AI Chat Applications",
    image: "/projects/genai-chat.jpg",
    description: "Domain-tuned conversational applications for enterprise support workflows.",
    features: ["Context memory", "Prompt guardrails", "Knowledge grounding", "Analytics"],
    technologies: ["OpenAI", "Python", "Next.js", "Redis"],
    architecture: "Hybrid chat orchestrator with retrieval-ready context and audit logging.",
    challengeSolved:
      "Delivered safer, more accurate assistant behavior through controllable context and response policies.",
    githubUrl: "https://github.com/alex-ai-engineer/genai-chat-apps",
    liveUrl: "https://demo.genai-chat-apps.dev",
  },
  {
    id: "outsourcing-application",
    title: "Outsourcing Application",
    image: "/projects/outsourcing-app.jpg",
    description: "Workflow platform for outsourcing operations and delivery governance.",
    features: ["Task pipeline", "SLA dashboard", "Role-based access", "Automated notifications"],
    technologies: ["Django", "React", "PostgreSQL"],
    architecture: "Monolith-to-modular architecture with asynchronous worker services for heavy jobs.",
    challengeSolved:
      "Improved visibility and execution quality across distributed outsourcing teams.",
    githubUrl: "https://github.com/alex-ai-engineer/outsourcing-application",
    liveUrl: "https://demo.outsourcing-application.dev",
  },
  {
    id: "company-profile-dashboard",
    title: "Company Profile Dashboard",
    image: "/projects/company-profile.jpg",
    description: "Interactive dashboard for company intelligence, KPIs, and strategic reporting.",
    features: ["KPI widgets", "Exportable reports", "Comparative trends", "Secure access"],
    technologies: ["Next.js", "TypeScript", "MongoDB"],
    architecture: "SSR-first dashboard with API aggregation and caching strategy for snappy UX.",
    challengeSolved:
      "Consolidated fragmented business metrics into a single decision-ready interface.",
    githubUrl: "https://github.com/alex-ai-engineer/company-profile-dashboard",
    liveUrl: "https://demo.company-profile-dashboard.dev",
  },
  {
    id: "svg-shape-detection-engine",
    title: "SVG Shape Detection Engine",
    image: "/projects/svg-shape-detection.jpg",
    description: "Parses and detects SVG shapes for automation and diagram intelligence tasks.",
    features: ["Path detection", "Geometry analysis", "Batch conversion", "JSON output"],
    technologies: ["Python", "FastAPI", "TypeScript"],
    architecture: "Compute pipeline with geometry parser core and API-based processing endpoints.",
    challengeSolved:
      "Made complex diagram assets machine-readable for downstream AI and automation workflows.",
    githubUrl: "https://github.com/alex-ai-engineer/svg-shape-detection-engine",
    liveUrl: "https://demo.svg-shape-detection.dev",
  },
];

export const salaryExpectations = {
  expectedSalary: "Competitive, aligned with role scope and impact",
  preferredEmploymentType: "Full-time (Senior/Lead AI Engineering roles)",
  availability: "Immediate to 30 days notice",
  workPreference: "Remote / Hybrid / Onsite",
};

export const availabilityInfo = {
  currentLocation: "Bengaluru, Karnataka, India",
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
