"use client"

import { Search, Stethoscope, Wrench, Handshake } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const stepIcons = [Search, Stethoscope, Wrench, Handshake]

export function ApproachSection() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
            {t.approach.label}
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-4 text-balance">
            {t.approach.title}
          </h2>
          {t.approach.subtitle ? (
            <p className="text-lg text-accent font-medium mb-4 hyphens-auto text-justify">
              {t.approach.subtitle}
            </p>
          ) : null}
          <p className="text-muted-foreground leading-relaxed hyphens-auto text-justify">
            {t.approach.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.approach.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div
                key={step.title}
                className="relative p-8 bg-background border border-border rounded-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center size-12 rounded-full bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-accent italic mb-6 hyphens-auto text-justify">
                  {step.tagline}
                </p>
                <ul className="space-y-4">
                  {step.items.map((item) => (
                    <li key={item.name}>
                      <p className="font-medium text-foreground mb-1">{item.name}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed hyphens-auto text-justify">
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
