"use client"

import { Briefcase, Building2, LineChart, Scale } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const icons = [Briefcase, Building2, LineChart, Scale]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            {t.services.label}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl max-w-xl text-balance">
            {t.services.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {t.services.categories.map((category, index) => {
            const Icon = icons[index]
            return (
              <div
                key={category.number}
                className="group relative p-8 bg-background border border-border rounded-lg hover:border-foreground/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-light text-muted-foreground/40">
                    {category.number}
                  </span>
                  <Icon className="size-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-accent mb-6 italic">
                  {category.target}
                </p>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium text-foreground mb-1">{item.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
