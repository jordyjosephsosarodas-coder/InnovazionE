"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function ArchitectureHydrologyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section with Image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm mb-12">
            <div
              className="h-80 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/project-3.jpg')" }}
            />
            <div className="space-y-6 px-6 py-14 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios Especializados</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Arquitectura, Hidrología, Sanitaria y Geotecnia
                  </h1>
                </div>
                <Link
                  href="/"
                  className="rounded-full border border-border bg-background/90 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/20"
                >
                  Inicio
                </Link>
              </div>
            </div>
          </div>

          {/* Main Description */}
          <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Estructuras Específicas</h2>
            <p className="text-lg leading-relaxed text-muted-foreground hyphens-auto text-justify mb-6">
              InnovazionE ofrece servicios integrales en arquitectura, hidrología, ingeniería sanitaria y geotecnia para proyectos en Guatemala. Nuestro equipo de especialistas realiza estudios de suelo, diseño de sistemas de drenaje, proyectos de agua potable, diseño arquitectónico funcional y evaluaciones geotécnicas completas. Contamos con profesionales certificados en cada especialidad para garantizar que tu proyecto cumpla normas guatemaltecas y sea seguro, funcional y sostenible.
            </p>
          </div>

          {/* Services Overview */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestras Especialidades
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Arquitectura Funcional
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Diseño arquitectónico que optimiza espacios, circulación y funcionalidad. Desde viviendas hasta proyectos comerciales e industriales, creamos espacios que maximizan uso y confort.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Estudios Geotécnicos
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Investigación completa de suelos: perfiles estratigráficos, resistencia, capacidad portante y recomendaciones de cimentación adaptadas a condiciones de Guatemala.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Hidrología
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Análisis hidrológico completo: evaluación de flujos de agua, comportamiento de cuencas y sistemas hídricos en tu terreno para optimizar su funcionamiento.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ingeniería Sanitaria
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Sistemas de agua potable, alcantarillado y tratamiento de aguas residuales que cumplen normativa AGIES y protegen la salud pública.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Services */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Servicios Detallados por Especialidad
            </h2>
            <div className="space-y-8">
              {/* Arquitectura */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Arquitectura</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Diseño de viviendas unifamiliares y multifamiliares</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Proyectos comerciales y de retail</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Edificios institucionales y públicos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Remodelación y adaptación de espacios existentes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Planos arquitectónicos para trámites municipales</span>
                  </li>
                </ul>
              </div>

              {/* Geotecnia */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Geotecnia</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Estudios de suelo y sondeos estratigráficos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Capacidad portante y análisis de cimentaciones</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Estabilidad de taludes y evaluación de deslizamientos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Análisis de asentamientos diferenciales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Mejoramiento de suelos problemáticos</span>
                  </li>
                </ul>
              </div>

              {/* Hidrología */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Hidrología</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Análisis de drenaje superficial y subsuperficial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Evaluación de riesgo de inundación</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Diseño de sistemas de drenaje y canales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Manejo de cuencas hidrográficas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Estudios de infiltración y permeabilidad</span>
                  </li>
                </ul>
              </div>

              {/* Sanitaria */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Ingeniería Sanitaria</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Diseño de sistemas de agua potable</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Sistemas de alcantarillado sanitario y pluvial</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Tratamiento de aguas residuales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Plantas de tratamiento de agua</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Cumplimiento de normas AGIES y salud pública</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Equipo de Especialistas */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestro Equipo de Especialistas
            </h2>
            <p className="text-base leading-8 text-muted-foreground mb-6 hyphens-auto text-justify">
              InnovazionE cuenta con arquitectos, geotécnicos, hidrólogos e ingenieros sanitarios con experiencia comprobada en proyectos de diferentes tipos y escalas en Guatemala. Nuestros profesionales están colegiados y certificados, cumpliendo con los estándares del Colegio de Arquitectos de Guatemala (CAG), Colegio de Ingenieros de Guatemala (CIG) y normas AGIES.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background/50 p-4">
                <h3 className="font-semibold text-foreground mb-2">Arquitecto</h3>
                <p className="text-sm text-muted-foreground">Diseño funcional y estético adaptado a tus necesidades.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/50 p-4">
                <h3 className="font-semibold text-foreground mb-2">Ingeniero Geotécnico</h3>
                <p className="text-sm text-muted-foreground">Evaluación de suelos y recomendaciones de cimentación.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/50 p-4">
                <h3 className="font-semibold text-foreground mb-2">Ingeniero Hidrólogo</h3>
                <p className="text-sm text-muted-foreground">Manejo de agua, drenaje y control de inundaciones.</p>
              </div>
              <div className="rounded-lg border border-border bg-background/50 p-4">
                <h3 className="font-semibold text-foreground mb-2">Ingeniero Sanitario</h3>
                <p className="text-sm text-muted-foreground">Sistemas de agua potable y tratamiento de aguas.</p>
              </div>
            </div>
          </section>

          {/* Casos de Uso */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Tipos de Proyectos que Atendemos
            </h2>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Vivienda unifamiliar y multifamiliar:</strong> Desde diseño hasta permisos municipales y cálculos geotécnicos.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Proyectos comerciales:</strong> Centros comerciales, oficinas y locales con sistemas de agua y drenaje integrados.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Infraestructura urbana:</strong> Carreteras, puentes y sistemas de agua con análisis hidrológico completo.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Proyectos rurales:</strong> Agua potable para comunidades, drenaje agrícola y sistemas de tratamiento.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Evaluación y remediación:</strong> Análisis de terrenos problemáticos, inestabilidad de taludes y soluciones de drenaje.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Remodelaciones:</strong> Adaptación de espacios existentes con evaluaciones geotécnicas y mejoras hidráulicas.</span>
              </p>
            </div>
          </section>

          {/* Process Section */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestro Proceso Integral
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">1. Consulta Inicial</h3>
                <p className="text-sm leading-7 text-muted-foreground">Evaluamos tus necesidades, localización del proyecto y especificidades técnicas para determinar qué especialidades requieres.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">2. Estudios y Evaluaciones</h3>
                <p className="text-sm leading-7 text-muted-foreground">Realizamos estudios geotécnicos, análisis hidrológicos y evaluaciones sanitarias según sea necesario para tu proyecto.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">3. Diseño Integral</h3>
                <p className="text-sm leading-7 text-muted-foreground">Nuestros especialistas trabajan conjuntamente para diseñar soluciones que integren arquitectura, estructuras, sistemas de agua y drenaje.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">4. Documentación y Trámites</h3>
                <p className="text-sm leading-7 text-muted-foreground">Preparamos planos, memorias de cálculo y documentación técnica para permisos municipales y cumplimiento normativo.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">5. Supervisión de Obra</h3>
                <p className="text-sm leading-7 text-muted-foreground">Acompañamos la construcción para asegurar que la obra se ejecute conforme a diseños y especificaciones técnicas.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
