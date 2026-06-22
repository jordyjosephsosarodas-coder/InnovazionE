import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Diseño de Todo Tipo de Infraestructura en Guatemala — Casas, Planos, Muros, Sistemas Digitales'
const description = 'Servicios de diseño de infraestructura en Guatemala: diseño de casas, planos, sótanos, muros de contención, bodegas y también infraestructuras digitales, páginas web y aplicaciones. Encontranos para proyectos residenciales, comerciales e industriales.'
const url = absoluteUrl('/services/infrastructure-design')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'diseño de infraestructura Guatemala',
    'diseño de casas Guatemala',
    'diseño de planos Guatemala',
    'diseño de sótanos',
    'diseño muros de contención',
    'diseño de bodegas',
    'diseño de almacenes Guatemala',
    'ingeniería geotécnica Guatemala',
    'ingeniería sanitaria Guatemala',
    'hidrología Guatemala',
    'diseño de infraestructuras digitales',
    'creación de páginas web Guatemala',
    'desarrollo de aplicaciones Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios Especializados</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Diseño de Todo Tipo de Infraestructura
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Diseñamos soluciones integrales en Guatemala: desde viviendas, planos arquitectónicos y sótanos, hasta muros de contención, bodegas y toda la infraestructura física. También concebimos y desarrollamos infraestructuras digitales: páginas web, aplicaciones y sistemas que conectan procesos y datos.
          </p>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">Qué buscamos resolver</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Diseñamos proyectos completos de infraestructura: casas, planos arquitectónicos, sótanos, muros de contención, bodegas y plataformas digitales. Nuestro trabajo integra arquitectura, ingeniería civil y sistemas digitales para proyectos funcionales y aprobables.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Servicios físicos que ofrecemos</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Diseño de casas y planos constructivos (vivienda unifamiliar y multifamiliar).</li>
              <li>Diseño de sótanos y cimentaciones profundas o superficiales.</li>
              <li>Muros de contención, gaviones y terraplenes.</li>
              <li>Diseño de bodegas y naves industriales (almacenes, parques logísticos).</li>
              <li>Diseño estructural sismorresistente y reforzamiento de estructuras existentes.</li>
              <li>Estudios geotécnicos y recomendaciones de cimentación.</li>
              <li>Proyectos hidrológicos y manejo de aguas pluviales y drenaje.</li>
              <li>Ingeniería sanitaria: agua potable, alcantarillado y tratamiento de aguas.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Servicios digitales e integración</h3>
            <p className="text-muted-foreground">
              La infraestructura incluye sistemas digitales: diseñamos y desarrollamos páginas web, tiendas en línea y aplicaciones que integran operaciones, gestión de inventario, monitoreo de activos y reportes técnicos para obras. Ofrecemos hosting, SEO básico y soporte para poner tu presencia digital en marcha.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3 text-muted-foreground">
              <li>Creación de páginas web profesionales y visibles en internet.</li>
              <li>Desarrollo de aplicaciones a medida (web y móviles) para gestión de proyectos e infraestructuras.</li>
              <li>Integración de sensores, telemetría y dashboards para monitoreo de obra.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Preguntas frecuentes (FAQ)</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Hacen planos para permisos municipales?</strong>
                <p>Sí. Entregamos planos y memorias técnicas preparados para trámites municipales y licencias según normativas locales.</p>
              </div>
              <div>
                <strong>¿Ofrecen estudios de suelo?</strong>
                <p>Sí. Realizamos estudios geotécnicos y recomendaciones de cimentación.</p>
              </div>
              <div>
                <strong>¿Hacen páginas web y SEO?</strong>
                <p>Sí. Desarrollamos páginas web orientadas a resultados y optimizadas para búsquedas locales en Guatemala.</p>
              </div>
            </div>
          </section>

          <section className="mt-8"> 
            <h3 className="text-xl font-semibold mb-2">Contáctanos</h3>
            <p className="text-muted-foreground">Si buscas diseño de infraestructura en Guatemala —desde una casa hasta una plataforma digital—, contáctanos para una consulta inicial y presupuesto.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
