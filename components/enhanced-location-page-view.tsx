"use client"

import Link from "next/link"
import type { Department } from "@/lib/departments"
import type {
  DepartmentRichContent,
  DepartmentRichSection,
} from "@/lib/department-rich-content"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

type EnhancedLocationPageViewProps = {
  department: Department
  rich: DepartmentRichContent
}

function RichSectionBlock({
  section,
  index,
  language,
}: {
  section: DepartmentRichSection
  index: number
  language: "es" | "en"
}) {
  switch (section.type) {
    case "prose":
      return (
        <div className="space-y-4">
          {section.heading ? (
            <h2 className="text-2xl font-semibold text-foreground">{section.heading}</h2>
          ) : null}
          {section.paragraphs.map((paragraph, pIndex) => (
            <p
              key={`${index}-p-${pIndex}`}
              className="text-base leading-8 text-muted-foreground hyphens-auto text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )
    case "highlight":
      return (
        <aside className="rounded-3xl border border-accent/30 bg-accent/5 p-8 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-foreground">{section.title}</h2>
          <p className="text-base leading-8 text-muted-foreground hyphens-auto text-justify">
            {section.body}
          </p>
        </aside>
      )
    case "municipalities":
      return (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
          <ol className="space-y-5 border-l-2 border-accent/40 pl-6">
            {section.items.map((item, index) => (
              <li key={item.name} className="relative">
                <span className="absolute -left-[1.65rem] flex size-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>
      )
    case "checklist":
      return (
        <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">{section.title}</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-7 text-muted-foreground"
              >
                <span className="mt-0.5 text-accent" aria-hidden>
                  ✓
                </span>
                <span className="hyphens-auto text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )
    case "serviceLinks":
      return (
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
            {section.intro ? (
              <p className="mt-3 text-base leading-8 text-muted-foreground hyphens-auto text-justify">
                {section.intro}
              </p>
            ) : null}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/50 hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent">
                  {link.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  {link.description}
                </p>
                <span className="mt-4 text-sm font-medium text-accent">
                  {language === "es" ? "Ver servicio →" : "View service →"}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )
    default:
      return null
  }
}

function layoutSections(
  layout: DepartmentRichContent["layout"],
  sections: DepartmentRichSection[],
): DepartmentRichSection[][] {
  if (layout === "agies-first") {
    return [sections.slice(0, 1), sections.slice(1, 3), sections.slice(3)]
  }
  if (layout === "corridor-split") {
    return [sections.slice(0, 2), sections.slice(2, 4), sections.slice(4)]
  }
  return [sections.slice(0, 2), sections.slice(2, 4), sections.slice(4)]
}

export function EnhancedLocationPageView({ department, rich }: EnhancedLocationPageViewProps) {
  const { language, t } = useLanguage()
  const localized = language === "es" ? rich : rich.en
  const groups = layoutSections(rich.layout, localized.sections)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-15"
              style={{ backgroundImage: "url('/images/finite-element-model.jpg')" }}
            />
            <div className="relative space-y-12 px-6 py-14 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">{localized.badge}</p>
                  <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                    {localized.headline}
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify">
                    {localized.subheadline}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link
                    href="/location"
                    className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                  >
                    {t.locationPage.allDepartments}
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
                  >
                    {t.cta.button}
                  </Link>
                </div>
              </div>

              {groups.map((group, groupIndex) => (
                <div
                  key={`group-${groupIndex}`}
                  className={
                    groupIndex === 1
                      ? "grid gap-8 rounded-3xl border border-border bg-background/85 p-8 shadow-sm backdrop-blur-sm lg:grid-cols-2 lg:items-start"
                      : "space-y-8 rounded-3xl border border-border bg-background/85 p-8 shadow-sm backdrop-blur-sm"
                  }
                >
                  {group.map((section, sectionIndex) => (
                    <RichSectionBlock
                      key={`${groupIndex}-${sectionIndex}-${section.type}`}
                      section={section}
                      index={sectionIndex}
                      language={language}
                    />
                  ))}
                </div>
              ))}

              <p className="text-center text-sm text-muted-foreground">
                {department.name} · InnovazionE ·{" "}
                <Link href="/" className="underline underline-offset-4 hover:text-foreground">
                  {t.locationPage.home}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
