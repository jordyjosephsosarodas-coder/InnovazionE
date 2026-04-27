"use client"

import { useLanguage } from "@/lib/language-context"

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm sm:text-base text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
