import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Arquitectura en Guatemala — Diseño de Casas, Planos y Proyectos Comerciales'
const description = 'Servicios de arquitectura en Guatemala: diseño de casas, planos para permisos, remodelaciones, diseño de locales comerciales y coordinación integral con ingeniería estructural y geotécnica.'
const url = absoluteUrl('/services/architecture')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'diseño de casas Guatemala',
    'diseño de planos Guatemala',
    'arquitecto Guatemala',
    'planos para permiso municipal',
    'remodelación casa Guatemala',
    'diseño arquitectura comercial Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios de Arquitectura</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Arquitectura — Diseño de Casas y Planos</h1>
          <p className="mt-4 text-lg text-muted-foreground">Diseñamos casas, planos y proyectos comerciales pensados para aprobación municipal y funcionamiento real. Tenemos experiencia en planos de vivienda familiar, diseño de locales comerciales, remodelación de cocinas y permisos municipales en Guatemala.</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Qué ofrecemos</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Diseño arquitectónico de viviendas unifamiliares y multifamiliares.</li>
              <li>Planos para permisos municipales y memorias técnicas.</li>
              <li>Diseño de interiores y optimización de espacios.</li>
              <li>Proyectos comerciales, locales y remodelaciones.</li>
              <li>Coordinación con cálculo estructural y estudios de suelo.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Preguntas frecuentes</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Hacen planos listos para permiso municipal?</strong>
                <p>Sí. Entregamos planos de licencia, detalles estructurales y memorias técnicas para presentar en cualquier municipalidad de Guatemala.</p>
              </div>
              <div>
                <strong>¿Trabajan con ingenieros estructurales?</strong>
                <p>Sí. Coordinamos diseño arquitectónico con cálculo estructural y estudios de suelo para crear proyectos seguros y aprobables.</p>
              </div>
              <div>
                <strong>¿Diseñan casas y remodelaciones?</strong>
                <p>Diseñamos desde casas nuevas y planos arquitectónicos hasta remodelaciones de cocinas, ampliaciones y fachadas comerciales.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
            <p className="text-muted-foreground">Solicita una consulta para tu proyecto: planos, presupuesto y tiempos. Podemos trabajar remotamente o en sitio en Guatemala.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
