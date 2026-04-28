import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/engineering-team.jpg')" }}
          />
          <div className="relative space-y-10 px-6 py-14 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">Department location</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Quetzaltenango
                </h1>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/location"
                  className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                >
                  All Departments
                </Link>
                <Link
                  href="/"
                  className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                >
                  Home
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background/80 p-8 backdrop-blur-sm shadow-sm">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Urban resilience, slope stability, and structural assessment services for Western Highlands communities.
              </p>
            </div>

            <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Why InnovazionE in Quetzaltenango?</h2>
              <p className="text-base leading-8 text-muted-foreground mb-8">
                We combine deep local knowledge with technical engineering expertise to help projects succeed under the unique conditions of Quetzaltenango. Our approach covers risk evaluation, structural resilience, and project delivery support.
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Regional Strengths</h3>
                  <p className="text-sm leading-7 text-muted-foreground">
                    Quetzaltenango’s highland terrain and urban growth require thorough slope stability and seismic design expertise.
                  </p>
                </div>
                <div className="rounded-2xl bg-card p-6 shadow-sm border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Key Services</h3>
                  <ul className="list-disc pl-5 text-sm leading-7 text-muted-foreground">
                    <li>Site-specific risk assessment</li>
                    <li>Structural analysis and mitigation planning</li>
                    <li>Construction support and resilience design</li>
                    <li>Regulatory compliance and permitting guidance</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
