import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Ingeniería Sanitaria en Guatemala — Agua Potable, Alcantarillado y Tratamiento'
const description = 'Ingeniería sanitaria en Guatemala: diseño de redes de agua potable, alcantarillado sanitario y sistemas de tratamiento para proyectos residenciales e industriales.'
const url = absoluteUrl('/services/sanitary-engineering')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ingeniería sanitaria Guatemala',
    'diseño agua potable Guatemala',
    'alcantarillado Guatemala',
    'tratamiento aguas Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Ingeniería Sanitaria</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Ingeniería Sanitaria — Agua y Alcantarillado</h1>
          <p className="mt-4 text-lg text-muted-foreground">Realizamos diseño de redes de agua potable, alcantarillado sanitario y soluciones de tratamiento adaptadas a normativas locales y a las condiciones particulares de Guatemala.</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Servicios</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Diseño de redes de agua potable y toma domiciliaria.</li>
              <li>Diseño de alcantarillado sanitario y pluvial.</li>
              <li>Sistemas de tratamiento de aguas residuales (plantas compactas).</li>
              <li>Análisis de calidad de agua y recomendaciones.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Aplicaciones prácticas</h3>
            <p className="text-muted-foreground">Realizamos diseño de redes de agua potable para viviendas y edificios, alcantarillado sanitario y sistemas de tratamiento de aguas residuales en proyectos residenciales y comerciales en Guatemala.</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Realizan diseño para comunidades o barrios?</strong>
                <p>Sí, trabajamos con proyectos comunitarios y desarrollos residenciales.</p>
              </div>
              <div>
                <strong>¿Pueden integrar soluciones de tratamiento ecológico?</strong>
                <p>Sí. Ofrecemos alternativas de bajo mantenimiento según requisitos del proyecto.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Contacta</h3>
            <p className="text-muted-foreground">Solicita una evaluación técnica y presupuesto para tu proyecto de agua o saneamiento.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
