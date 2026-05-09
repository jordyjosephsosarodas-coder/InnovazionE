"use client"

import Link from "next/link"
import type { Department } from "@/lib/departments"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

type LocationPageViewProps = {
  department: Department
}

export function LocationPageView({ department }: LocationPageViewProps) {
  const { language, t } = useLanguage()
  const copy = department[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/images/engineering-team.jpg')" }}
            />
            <div className="relative space-y-10 px-6 py-14 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">{t.locationPage.badge}</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    {department.name}
                  </h1>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/location"
                    className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                  >
                    {t.locationPage.allDepartments}
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                  >
                    {t.locationPage.home}
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify">{copy.description}</p>
              </div>

              <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                  {t.locationPage.whyInnovazionLeading}
                  {department.name}
                  {t.locationPage.whyInnovazionTrailing}
                </h2>
                <p className="mb-4 text-base leading-8 text-muted-foreground hyphens-auto text-justify">{copy.riskDescription}</p>
                <p className="mb-8 text-base leading-8 text-muted-foreground hyphens-auto text-justify">{copy.additionalRisk}</p>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {t.locationPage.regionalStrengthTitle}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">{copy.regionalStrength}</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {t.locationPage.keyServicesTitle}
                    </h3>
                    <ul className="list-disc pl-5 text-sm leading-7 text-muted-foreground [&>li]:hyphens-auto [&>li]:text-justify">
                      {t.locationPage.keyServiceBullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
