import { notFound } from "next/navigation"
import { getDepartment, departments } from "@/lib/departments"

type LocationPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return departments.map((department) => ({ slug: department.slug }))
}

export default function LocationPage({ params }: LocationPageProps) {
  const department = getDepartment(params.slug)

  if (!department) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl mb-6">
          {department.name}
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-10">
          {department.description}
        </p>

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Location Focus</h2>
          <p className="text-base leading-8 text-muted-foreground">
            We provide localized engineering expertise for {department.name}. Each department page highlights how
            InnovazionE supports infrastructure resilience, risk reduction, and project success in that region.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-background p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Regional Needs</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Every department has different terrain, weather, and asset types. We adapt our evaluations to local
                conditions and project risks.
              </p>
            </div>
            <div className="rounded-2xl bg-background p-6 shadow-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Our Services</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                Structural assessment, site risk analysis, project management support, and mitigation planning for
                critical infrastructure and development projects.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
