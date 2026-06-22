import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Evaluación y Gestión de Riesgos de Infraestructura Civil en Guatemala'
const description = 'Evaluación y gestión de riesgos de infraestructura civil: análisis sísmico, estudios geotécnicos, seguridad estructural y mitigación de riesgos para proyectos en Guatemala.'
const url = absoluteUrl('/services/infrastructure-risk-management')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'gestión de riesgos infraestructura Guatemala',
    'evaluación de riesgos sísmicos Guatemala',
    'riesgos de infraestructura civil',
    'análisis geotécnico riesgos',
    'seguridad sísmica Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Evaluación y Gestión de Riesgos</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Evaluación y Gestión de Riesgos de Infraestructura Civil</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ejecutamos análisis de riesgo y planes de mitigación para obras civiles en Guatemala: estructuras, bodegas, muros, carreteras y sistemas digitales enlazados. Identificamos riesgos sísmicos, geotécnicos e hidráulicos antes de diseñar y construir.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Qué hacemos</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Análisis de riesgo sísmico y vulnerabilidad estructural.</li>
              <li>Estudios geotécnicos y de suelo para prevenir asentamientos.</li>
              <li>Evaluación de riesgos hidrológicos e inundaciones.</li>
              <li>Análisis de seguridad de muros de contención y taludes.</li>
              <li>Gestión de riesgo integral para infraestructuras físicas y digitales.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Aplicaciones y alcance</h3>
            <p className="text-muted-foreground">Realizamos evaluación de riesgos para edificaciones, naves industriales, muros de contención, carreteras y sistemas digitales. Identificamos amenazas sísmicas, geotécnicas e hidrológicas para entregar planes de mitigación técnicos.</p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Preguntas frecuentes</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Qué incluye la evaluación de riesgos?</strong>
                <p>Incluye análisis sísmico, geotécnico, hidráulico y recomendaciones para diseño estructural seguro.</p>
              </div>
              <div>
                <strong>¿Pueden revisar un proyecto existente?</strong>
                <p>Sí. Podemos evaluar condiciones actuales y proponer mitigaciones o reforzamientos.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Contacta</h3>
            <p className="text-muted-foreground">Solicita una consulta para evaluar riesgos en tu proyecto y obtener un plan técnico de mitigación.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
