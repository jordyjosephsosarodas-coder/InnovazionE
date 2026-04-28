"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image
              src="/images/finite-element-model.jpg"
              alt={t.about.imageAlt}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-4">
              {t.about.label}
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-6 text-balance">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
