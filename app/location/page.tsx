import Link from "next/link"
import { departments } from "@/lib/departments"

export default function LocationsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Departments
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Guatemala location coverage
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
            Discover the specific services InnovazionE delivers in every department of Guatemala. Select a location to review regional risk management and engineering support.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <Link
              key={department.slug}
              href={`/location/${department.slug}`}
              className="group rounded-3xl border border-border bg-card p-8 transition hover:border-primary/60 hover:bg-primary/5"
            >
              <h2 className="text-2xl font-semibold text-foreground transition group-hover:text-primary">
                {department.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {department.description}
              </p>
              <span className="mt-6 inline-flex text-sm font-medium text-primary">
                View department details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
