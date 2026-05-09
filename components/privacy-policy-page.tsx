"use client"

import Link from "next/link"
import { SitePageShell } from "@/components/site-page-shell"
import { useLanguage } from "@/lib/language-context"

export function PrivacyPolicyPage() {
  const { t } = useLanguage()
  const doc = t.privacyPolicy

  return (
    <SitePageShell>
      <main className="min-h-screen bg-background px-6 pb-20 pt-28 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="rounded-[2rem] border border-border bg-card p-10 shadow-sm">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-accent">{doc.badge}</p>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{doc.title}</h1>
              <p className="text-base leading-8 text-muted-foreground hyphens-auto text-justify">{doc.intro}</p>
            </div>

            <div className="mt-10 space-y-8">
              {doc.sections.map((section, index) => (
                <section key={`${section.title}-${index}`} className="space-y-3">
                  <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
                  <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">{section.body}</p>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Link href="/" className="text-sm font-medium text-accent hover:text-foreground">
                {doc.backHome}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </SitePageShell>
  )
}
