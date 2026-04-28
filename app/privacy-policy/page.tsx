import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-[2rem] border border-border bg-card p-10 shadow-sm">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Privacy Policy</p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Your privacy matters to InnovazionE
            </h1>
            <p className="text-base leading-8 text-muted-foreground">
              We collect only the information needed to respond to inquiries and support our client services. We do not sell personal data, and we protect any submitted contact details with appropriate security measures.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                When you contact us through the site, we may collect your name, email address, phone number, company, and project details to provide an accurate response and follow-up.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">How We Use It</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We use submitted information strictly to respond to requests, share relevant project resources, and communicate about engineering services. We do not share your personal contact details with third parties for marketing purposes.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground">Data Security</h2>
              <p className="text-sm leading-7 text-muted-foreground">
                We maintain reasonable safeguards to protect data collected through the website. If you have any concerns about your information, please contact us using the details in the footer.
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
