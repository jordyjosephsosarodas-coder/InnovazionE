"use client"

import Link from "next/link"
import { departments } from "@/lib/departments"
import { ENHANCED_DEPARTMENT_SLUGS } from "@/lib/department-rich-content"
import { useLanguage } from "@/lib/language-context"
import { SitePageShell } from "@/components/site-page-shell"

export function LocationsIndexPage() {
  const { language, t } = useLanguage()

  const featured = departments.filter((d) => ENHANCED_DEPARTMENT_SLUGS.includes(d.slug))
  const rest = departments.filter((d) => !ENHANCED_DEPARTMENT_SLUGS.includes(d.slug))

  return (
    <SitePageShell>
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              {t.locationsIndex.label}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {t.locationsIndex.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground hyphens-auto text-justify">
              {t.locationsIndex.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10"
              >
                {t.locationsIndex.backHome}
              </Link>
            </div>
          </div>

          <section
            aria-labelledby="featured-departments-heading"
            className="mb-16 rounded-[2rem] border border-accent/25 bg-accent/5 p-8 sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {t.locationsIndex.featuredLabel}
            </p>
            <h2
              id="featured-departments-heading"
              className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl"
            >
              {t.locationsIndex.featuredTitle}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
              {t.locationsIndex.featuredSubtitle}
            </p>

            <ul className="mt-8 grid gap-6 lg:grid-cols-3">
              {featured.map((department) => (
                <li key={department.slug}>
                  <Link
                    href={`/location/${department.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-sm transition hover:border-accent/50 hover:shadow-md"
                  >
                    <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      {t.locationsIndex.featuredBadge}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground group-hover:text-primary">
                      {department.name}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                      {department[language].description}
                    </p>
                    <span className="mt-6 inline-flex text-sm font-medium text-primary">
                      {t.locationsIndex.featuredCta}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <h2 className="mb-6 text-xl font-semibold text-foreground">
            {t.locationsIndex.allDepartmentsTitle}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {rest.map((department) => (
              <Link
                key={department.slug}
                href={`/location/${department.slug}`}
                className="group rounded-3xl border border-border bg-card p-8 transition hover:border-primary/60 hover:bg-primary/5"
              >
                <h3 className="text-2xl font-semibold text-foreground transition group-hover:text-primary">
                  {department.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  {department[language].description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-primary">
                  {t.locationsIndex.viewDetailsCta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SitePageShell>
  )
}
