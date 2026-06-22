import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SITE_NAME, absoluteUrl } from '@/lib/site-config'

const title = 'Ingeniería Geotécnica en Guatemala — Estudios de Suelo, Propiedades Dinámicas y Cimentaciones'
const description = 'Estudios geotécnicos en Guatemala: perfiles de suelo, propiedades dinámicas del suelo, ensayos de campo y laboratorio, recomendaciones de cimentación y diseño de muros de contención.'
const url = absoluteUrl('/services/geotechnical')

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'estudio de suelos Guatemala',
    'propiedades dinámicas del suelo Guatemala',
    'ensayo SPT Guatemala',
    'CPT Guatemala',
    'ingeniería geotécnica Guatemala',
    'perfil de suelo Guatemala',
    'muros de contención Guatemala',
    'cimentación sismorresistente Guatemala',
  ],
  alternates: { canonical: url },
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">Ingeniería Geotécnica</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Ingeniería Geotécnica — Estudios de Suelo</h1>
          <p className="mt-4 text-lg text-muted-foreground">Ofrecemos estudios de suelos, muros de contención y recomendaciones de cimentación para proyectos en Guatemala. Trabajamos con perfiles geotécnicos que definen cimientos seguros para casas, bodegas e instalaciones industriales.</p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Propiedades dinámicas del suelo y métodos de obtención</h2>
            <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify mb-4">
              Estudiamos las propiedades dinámicas del suelo que influyen en el comportamiento sísmico: velocidad de onda de corte, módulo dinámico y factor de amortiguamiento. Utilizamos ensayos como SPT, CPT, resonancia de masas, corte directo y consolidación para obtener datos confiables y dimensionar cimentaciones adecuadas.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Ensayos de campo SPT y CPT para determinar resistencia y rigidez del suelo.</li>
              <li>Pruebas de laboratorio de corte directo, consolidación y resonancia para propiedades dinámicas.</li>
              <li>Análisis de capacidad portante, asentamientos y respuesta sísmica del terreno.</li>
              <li>Diseño de cimentaciones superficiales y profundas según condiciones locales.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">Servicios geotécnicos</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Perfiles de suelo y muestreos.</li>
              <li>Recomendaciones de cimentación superficial y profunda.</li>
              <li>Análisis de capacidad portante y asentamientos.</li>
              <li>Diseño de muros de contención y estabilización de taludes.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <strong>¿Realizan perforaciones y ensayos in situ?</strong>
                <p>Sí, coordinamos perforaciones y ensayos de laboratorio o en sitio según el alcance.</p>
              </div>
              <div>
                <strong>¿Pueden integrar estudio geotécnico con diseño estructural?</strong>
                <p>Sí. Entregamos recomendaciones que el ingeniero estructural usará para dimensionar cimentaciones y muros.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Contacta</h3>
            <p className="text-muted-foreground">Solicita un presupuesto para estudio geotécnico y recomendaciones de cimentación.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
