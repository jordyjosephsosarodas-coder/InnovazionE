"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const projectImages = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              {t.projects.label}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              {t.projects.title}
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            {t.projects.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <article key={project.title} className="group cursor-pointer">
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                <Image
                  src={projectImages[index]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                {project.category}
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-muted-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed hyphens-auto text-justify">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
