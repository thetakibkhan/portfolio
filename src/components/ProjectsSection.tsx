import { motion } from "framer-motion";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import placeholderImg from "@/assets/project-ayojon.jpg";
import ayojonImg from "@/assets/project-ayojon.jpg";
import taskorbitImg from "@/assets/project-taskorbit.jpg";

const projects = [
  {
    title: "AI Ticket Pipeline",
    subtitle: "Async AI-Powered Support",
    description:
      "Two-phase AI-powered support pipeline that classifies tickets, assigns priority, routes requests, and drafts responses with real-time status updates. Exponential backoff with jitter, DLQ routing, manual replay for failed tickets, and Zod-validated AI outputs.",
    tech: [
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "AWS SQS",
      "LocalStack",
      "OpenRouter",
      "Portkey AI",
      "Socket.io",
      "Zod",
      "Vitest",
    ],
    image: placeholderImg,
    github: "https://github.com/thetakibkhan/AI-Ticket-Processing-Pipeline",
    live: null,
    color: "bg-gradient-orange",
  },
  {
    title: "Ayojon E-Commerce",
    subtitle: "Multi-Vendor Marketplace",
    description:
      "Full-stack multi-vendor e-commerce platform for event products. Vendor onboarding, product CRUD, hybrid cart sync, multi-step bKash/COD checkout, dashboards with KPI analytics, and separate prepaid/COD order workflows.",
    tech: [
      "React 19",
      "TypeScript",
      "TanStack Router/Query",
      "Hono",
      "Bun",
      "oRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "S3",
    ],
    image: ayojonImg,
    github: "https://github.com/khalludi03/Ayojon",
    live: null,
    color: "bg-gradient-orange",
  },
  {
    title: "TaskOrbit",
    subtitle: "Micro-Task Earning Platform",
    description:
      "Full-stack micro-task marketplace connecting buyers and workers. Role-based auth (worker/buyer/admin), task posting with coin budgets, submission/approval workflow, and coin-based payout system with withdrawal management.",
    tech: [
      "React",
      "Vite",
      "TanStack Router",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "RBAC",
    ],
    image: taskorbitImg,
    github: "https://github.com/thetakibkhan/microtask-server",
    live: "https://taskrbit.netlify.app/",
    color: "bg-gradient-lime",
  },
  {
    title: "Assignment Submission System",
    subtitle: "Full-Stack Web Application",
    description:
      "Full-stack assignment-submission platform with a layered backend architecture, secure role-based authentication, PostgreSQL persistence, automated testing, API documentation, and containerized deployment.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "ASP.NET Core",
      "C#",
      "PostgreSQL",
      "Entity Framework Core",
      "JWT",
      "RBAC",
      "xUnit",
      "Docker",
    ],
    image: placeholderImg,
    github: "https://github.com/thetakibkhan/assignment-submission-system",
    live: "https://assignment-submission-system-web.onrender.com/",
    color: "bg-gradient-orange",
  },
  {
    title: "404 Project Not Found",
    subtitle: "Medical Annotation Platform",
    description:
      "Medical-image annotation workspace for labeling scans, managing frontend state, reviewing annotation work, and storing structured data through backend APIs.",
    tech: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Konva",
      "Django REST Framework",
      "PostgreSQL",
    ],
    image: placeholderImg,
    github: "https://github.com/thetakibkhan/404-client",
    live: "https://404-client.netlify.app/",
    color: "bg-gradient-orange",
  },
  {
    title: "Blog Platform",
    subtitle: "Django Web Application",
    description:
      "Full-stack blog application with post pages, CSRF-protected comments, server-side validation, and Django admin-based content management.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS"],
    image: placeholderImg,
    github: "https://github.com/thetakibkhan/Blog-App/tree/main",
    live: "https://blog-app-1-5svb.onrender.com/",
    color: "bg-gradient-lime",
  },
  {
    title: "Video Chat App",
    subtitle: "Real-Time Streaming",
    description:
      "Real-time video chat application built with Django and Agora WebRTC for low-latency peer-to-peer streaming.",
    tech: ["Django", "Agora WebRTC", "Python"],
    image: placeholderImg,
    github: "https://github.com/thetakibkhan/Chat-App",
    live: "https://chat-app-1-vqtx.onrender.com/",
    color: "bg-gradient-lime",
  },
  {
    title: "Natural Scene Classification",
    subtitle: "Transfer Learning — ResNet50",
    description:
      "Transfer-learning image classifier using ResNet50 trained on 5,723 natural-scene images, achieving 92.67% test accuracy.",
    tech: ["Python", "ResNet50", "Transfer Learning", "Computer Vision", "Image Classification"],
    image: placeholderImg,
    github: null,
    live: "https://drive.google.com/file/d/1MIFk6DvAxkRlphUdnrwoJlMifizqrNtg/view?usp=drive_link",
    color: "bg-gradient-orange",
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "ML — Meta-Stacking Ensemble",
    description:
      "Analysis of the Cleveland Clinic dataset (303 records, 13 features) with a meta-stacking ensemble, achieving 90.16% test accuracy.",
    tech: ["Python", "Scikit-learn", "Meta-Stacking", "Ensemble", "SHAP", "XAI"],
    image: placeholderImg,
    github: null,
    live: "https://drive.google.com/file/d/13GwUREC1oizV7MuIG8bJcu2eT1Re81CI/view?usp=drive_link",
    color: "bg-gradient-lime",
  },
  {
    title: "Hospital Management System",
    subtitle: "C++ Application",
    description:
      "Hospital management system with hierarchical user roles, patient registration, appointment scheduling, and file-based data storage.",
    tech: ["C++", "File System"],
    image: placeholderImg,
    github: "https://github.com/Tanjim605/Hospital_Management_System",
    live: null,
    color: "bg-gradient-lime",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 scroll-mt-24">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          RECENT <span className="text-gradient-orange">PROJECTS</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40"
            >
              {project.image && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
              )}
              <div className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 flex-grow text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
