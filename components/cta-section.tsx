"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {t.cta.description}
          </p>
        </div>
      </div>
    </section>
  )
}
