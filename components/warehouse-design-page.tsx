"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function WarehouseDesignPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section with Image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm mb-12">
            <div
              className="h-80 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/project-2.jpg')" }}
            />
            <div className="space-y-6 px-6 py-14 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios Especializados</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Diseño de Naves Industriales (Bodegas)
                  </h1>
                  <p className="mt-2 text-lg text-muted-foreground">(Bodegas y Almacenes)</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/"
                    className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                  >
                    Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Estructuras Específicas</h2>
            <p className="text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify mb-6">
              InnovazionE ofrece diseño estructural especializado en naves industriales, bodegas y almacenes sismorresistentes. Nuestros proyectos combinan análisis de elementos finitos con normativa guatemalteca para crear estructuras duraderas que protegen su inversión ante riesgos sísmicos, climatológicos y de uso industrial intensivo. Ya sea para almacenamiento agrícola, logística, industria manufacturera o comercio, diseñamos bodegas que maximizan espacio, aseguran estabilidad estructural y cumplen con todos los requisitos de seguridad.
            </p>
          </div>

          {/* Key Benefits Section */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Por qué Elegirnos para Diseño de Naves Industriales
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Diseño Sismorresistente
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Bodegas diseñadas con consideración de la amenaza sísmica de Guatemala, maximizando durabilidad durante temblores y reduciendo riesgo de colapso estructural.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Optimización de Espacios
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Estructura eficiente con luces grandes, columnas bien distribuidas y alturas optimizadas para máxima capacidad de almacenamiento y operaciones.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Análisis Geotécnico
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Evaluación completa del terreno, cimentaciones adaptadas a condiciones de suelo locales y garantía de estabilidad a largo plazo.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Cumplimiento Normativo
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Diseños que cumplen con normas de construcción de Guatemala, códigos sísmicos y regulaciones de seguridad industrial.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Durabilidad y Mantenimiento
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Especificaciones de materiales y construcción que minimalizan mantenimiento y aseguran vida útil extendida de la estructura.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Consultoría Integral
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Asesoría desde diseño conceptual hasta revisión de construcción, asegurando que tu bodega se ejecute conforme a planos.
                </p>
              </div>
            </div>
          </section>

          {/* Services for Different Industries */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Diseño de Naves Industriales para Diversos Sectores
            </h2>
            <ul className="space-y-4 text-base leading-8 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Almacenes agrícolas:</strong> Bodegas para granos, café y productos perecederos con protección estructural ante lluvia y sismo.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Instalaciones logísticas:</strong> Estructuras de gran claro para movimiento ágil de carga y optimización de operaciones.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Plantas de manufactura:</strong> Naves con cargas puntuales por maquinaria, resistencia a vibraciones y sistemas de infraestructura integrados.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Almacenes comerciales:</strong> Espacios flexibles para distribución y retail con sistemas de carga bien definidos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Instalaciones especiales:</strong> Bodegas frigoríficas, químicas o de carga pesada con requisitos estructurales específicos.</span>
              </li>
            </ul>
          </section>

          {/* Process Section */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestro Proceso de Diseño
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">1. Evaluación de Sitio</h3>
                <p className="text-sm leading-7 text-muted-foreground">Análisis geotécnico, caracterización sísmica y valuación de cargas operacionales para tu proyecto específico.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">2. Diseño Conceptual</h3>
                <p className="text-sm leading-7 text-muted-foreground">Desarrollo de opciones estructurales que optimizan costos, funcionalidad y seguridad sísmica.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">3. Modelado Estructural</h3>
                <p className="text-sm leading-7 text-muted-foreground">Análisis de elementos finitos para verificar comportamiento ante sismo, cargas vivas y condiciones climáticas.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">4. Documentación de Construcción</h3>
                <p className="text-sm leading-7 text-muted-foreground">Planos constructivos detallados, especificaciones de materiales y protocolos de inspección en obra.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">5. Supervisión Técnica</h3>
                <p className="text-sm leading-7 text-muted-foreground">Seguimiento de construcción para asegurar cumplimiento de diseño y especificaciones técnicas.</p>
              </div>
            </div>
          </section>


        </div>
      </main>
      <Footer />
    </>
  )
}
