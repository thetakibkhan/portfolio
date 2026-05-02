import { motion } from "framer-motion";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import ayojonImg from "@/assets/project-ayojon.jpg";
import taskorbitImg from "@/assets/project-taskorbit.jpg";

const projects = [
  {
    title: "Ayojon E-Commerce",
    subtitle: "Multi-Vendor Marketplace",
    description:
      "Full-stack multi-vendor e-commerce platform for event products in Bangladesh/South Asia. Vendor onboarding, product CRUD with variants, hybrid cart sync, multi-step bKash/COD checkout, and admin dashboards with KPI analytics.",
    tech: ["React 19", "TanStack Router/Query", "Hono", "Bun", "oRPC", "Drizzle ORM", "PostgreSQL", "Better Auth", "S3"],
    image: ayojonImg,
    github: "https://github.com/khalludi03/Ayojon",
    live: null,
    color: "bg-gradient-orange",
  },
  {
    title: "TaskOrbit",
    subtitle: "Micro-Task Earning Platform",
    description:
      "Full-stack micro-task marketplace connecting buyers and workers globally. Role-based auth (worker/buyer/admin), task posting with coin budgets, submission/approval workflow, and coin-based payout system.",
    tech: ["React 19", "TanStack Router", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    image: taskorbitImg,
    github: "https://github.com/thetakibkhan/microtask-server",
    live: "https://taskrbit.netlify.app/",
    color: "bg-gradient-lime",
  },
  {
    title: "Video Chat App",
    subtitle: "Real-Time Streaming",
    description:
      "Real-time video chat application built with Django and Agora WebRTC for low-latency peer-to-peer streaming.",
    tech: ["Django", "Agora WebRTC", "Python"],
    image: null,
    github: "https://github.com/thetakibkhan/Chat-App",
    live: "https://chat-app-1-vqtx.onrender.com/",
    color: "bg-gradient-orange",
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "ML Thesis — Meta-Stacking Ensemble",
    description:
      "Thesis achieving 90.16% accuracy with Meta-Stacking ensemble model. Used SHAP for explainable AI (XAI) to interpret predictions.",
    tech: ["Python", "Scikit-learn", "SHAP", "XAI"],
    image: null,
    github: null,
    live: null,
    color: "bg-gradient-lime",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
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
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
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
