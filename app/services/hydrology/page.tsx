import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Hidrología en Guatemala — Drenaje, Manejo de Aguas y Estudios Hidrológicos'
const description = 'Servicios de ingeniería hidrológica en Guatemala: diseño de drenaje, manejo de aguas pluviales, estudios de caudales y soluciones contra inundaciones para proyectos residenciales e industriales.'
const url = absoluteUrl('/services/hydrology')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'hidrología Guatemala',
    'drenaje Guatemala',
    'manejo aguas pluviales Guatemala',
    'soluciones inundaciones Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios Hidrológicos</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Hidrología — Drenaje y Manejo de Aguas</h1>
          <p className="mt-4 text-lg text-muted-foreground">Ofrecemos estudios hidrológicos y diseño de drenaje pluvial en Guatemala, sistemas de desagüe pluvial, diseño de canaletas y soluciones contra inundaciones adaptadas al clima y a la topografía local.</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Servicios hidrológicos</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Estudios de caudales y modelado de escorrentía.</li>
              <li>Diseño de drenaje urbano y rural.</li>
              <li>Sistemas de captación y manejo de aguas pluviales.</li>
              <li>Mejoras para reducir riesgo de inundación en parcelas y desarrollos.</li>
              <li>Coordinación con diseño arquitectónico y de obras civiles.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Hacen modelado de escorrentía para lotes?</strong>
                <p>Sí. Realizamos cálculos de caudales y proponemos medidas de drenaje adaptadas a la topografía y uso del terreno.</p>
              </div>
              <div>
                <strong>¿Pueden coordinar con el proyecto estructural?</strong>
                <p>Sí. Integramos soluciones hidrológicas con cimentaciones y muros de contención para evitar problemas futuros por agua.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Contacta para tu estudio hidrológico</h3>
            <p className="text-muted-foreground">Solicita una revisión del sitio y un presupuesto para estudio hidrológico y diseño de drenaje.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
