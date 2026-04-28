import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[2rem] border border-border bg-card p-10 shadow-sm">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Terms of Service</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Website Terms and Conditions
            </h1>
            <p className="text-base leading-8 text-muted-foreground">
              These terms describe how you may use the InnovazionE website and the content available here. By accessing the site, you agree to these terms for informational purposes only.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Use of the Site</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                The site is provided for informational and contact purposes. You may not reproduce or redistribute any content without prior written permission from InnovazionE.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">No Professional Advice</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                Content on this website is not a substitute for professional engineering, legal, or financial advice. Please contact InnovazionE directly for project-specific guidance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                InnovazionE is not liable for any indirect or consequential damages arising from the use of the website or reliance on its content. Use the site at your own discretion.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/"
              className="text-sm font-medium text-accent hover:text-foreground"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
