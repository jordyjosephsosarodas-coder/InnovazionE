"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function StructuralReinforcementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section with Image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm mb-12">
            <div
              className="h-80 w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/finite-element-model.jpg')" }}
            />
            <div className="space-y-6 px-6 py-14 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Servicios Especializados</p>
                  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    Reforzamiento Estructural
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
              InnovazionE ofrece servicios integrales de reforzamiento estructural para edificios, bodegas, puentes y estructuras que requieren mejora de su capacidad resistente. Utilizamos análisis de cálculo estructural avanzado, ensayos no destructivos con esclerómetro digital, y trabajamos con acero, concreto reforzado, fibra de carbono y otros materiales de última generación. Nuestro equipo diseña y supervisa soluciones de reforzamiento que mejoran la seguridad estructural, incrementan la vida útil de las construcciones y aseguran cumplimiento con normativas vigentes en Guatemala.
            </p>
          </div>

          {/* Services Overview */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestras Especialidades en Reforzamiento
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Cálculo Estructural Avanzado
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Análisis de elementos finitos con modelado 3D para determinar capacidades de carga, identificar deficiencias y diseñar soluciones de reforzamiento óptimas.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Ensayos No Destructivos
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Esclerómetro digital, ultrasonido y otras técnicas NDT para evaluar la resistencia y durabilidad del concreto sin dañar la estructura.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Reforzamiento con Acero
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Soldadura estructural, adición de perfiles metálicos y sistemas de refuerzo con acero para incrementar capacidad y rigidez.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Reforzamiento con Concreto
                </h3>
                <p className="text-sm leading-7 text-muted-foreground hyphens-auto text-justify">
                  Encamisado de elementos, adición de capas de concreto reforzado y micro-concreto para restaurar y mejorar estructuras existentes.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Services */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Métodos y Técnicas de Reforzamiento
            </h2>
            <div className="space-y-8">
              {/* Cálculo Estructural */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Cálculo y Análisis Estructural</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Modelado 3D con software de elementos finitos (SAP2000, ETABS, RISA)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Análisis de carga actual y redistribución de esfuerzos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Verificación de capacidad resistente y factores de seguridad</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Diseño de soluciones de refuerzo eficientes y económicas</span>
                  </li>
                </ul>
              </div>

              {/* Ensayos NDT */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Ensayos No Destructivos (NDT)</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Esclerómetro digital: resistencia superficial y homogeneidad del concreto</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Ultrasonido: detección de vacíos, grietas y delaminación</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Pacómetro: localización y diámetro de armadura</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Pruebas de carbonatación y permeabilidad</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Extracción de muestras para ensayos de laboratorio</span>
                  </li>
                </ul>
              </div>

              {/* Materiales */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Materiales de Reforzamiento</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Acero estructural:</strong> Perfiles laminados, ángulos, canales y placas para refuerzo de elementos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Concreto de alta resistencia:</strong> Encamisado y reparación de elementos dañados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Fibra de carbono (CFRP):</strong> Refuerzo ligero y de alta resistencia para estructuras existentes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Resinas epóxicas:</strong> Reparación de grietas y inyección de elementos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Adhesivos de ingeniería:</strong> Conexión segura entre materiales</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span><strong>Refuerzo geosintético:</strong> Para aplicaciones especiales en taludes y muros</span>
                  </li>
                </ul>
              </div>

              {/* Tipos de Reforzamiento */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Tipos de Reforzamiento Estructural</h3>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Encamisado de columnas y vigas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Soldadura y conexiones de acero estructural</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Adherencia de láminas de fibra de carbono</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Inyección de grietas con resina epóxica</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Restitución de secciones de concreto degradado</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-semibold">•</span>
                    <span>Refuerzo sísmico de estructuras existentes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Casos de Uso */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Proyectos de Reforzamiento que Atendemos
            </h2>
            <div className="space-y-4 text-base leading-8 text-muted-foreground">
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Estructuras dañadas por sismo:</strong> Evaluación post-sismo y diseño de refuerzo para restaurar capacidad estructural.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Edificios que cambian de uso:</strong> Incremento de cargas vivas requiere reforzamiento de elementos existentes.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Deterioro por corrosión:</strong> Reparación de estructuras afectadas por oxidación de acero y carbonatación del concreto.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Ampliaciones de bodegas:</strong> Refuerzo de estructuras existentes para soportar nuevas cargas.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Puentes y obras de infraestructura:</strong> Mejora de capacidad y vida útil de estructuras críticas.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Cumplimiento de normativa:</strong> Refuerzo sísmico para cumplir normas AGIES actuales.</span>
              </p>
              <p className="flex gap-3">
                <span className="text-accent font-semibold">•</span>
                <span><strong>Prevención de fallas:</strong> Identificación temprana de deficiencias y refuerzo preventivo.</span>
              </p>
            </div>
          </section>

          {/* Proceso Section */}
          <section className="rounded-3xl border border-border bg-background/90 p-8 shadow-sm backdrop-blur-sm mb-12">
            <h2 className="mb-8 text-2xl font-semibold text-foreground">
              Nuestro Proceso de Reforzamiento
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">1. Evaluación Inicial</h3>
                <p className="text-sm leading-7 text-muted-foreground">Inspección visual, historial de la estructura y levantamiento de planos as-built para comprender condición actual.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">2. Ensayos NDT</h3>
                <p className="text-sm leading-7 text-muted-foreground">Esclerómetro digital, ultrasonido y pruebas de laboratorio para caracterizar resistencia del concreto y acero.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">3. Cálculo y Análisis</h3>
                <p className="text-sm leading-7 text-muted-foreground">Modelado estructural 3D, análisis de esfuerzos y diseño de soluciones de refuerzo eficientes.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">4. Diseño Constructivo</h3>
                <p className="text-sm leading-7 text-muted-foreground">Planos de refuerzos, especificaciones de materiales y procedimientos constructivos detallados.</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-semibold text-foreground text-accent">5. Supervisión de Obra</h3>
                <p className="text-sm leading-7 text-muted-foreground">Acompañamiento técnico durante la ejecución del refuerzamiento y control de calidad de materiales y procesos.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
